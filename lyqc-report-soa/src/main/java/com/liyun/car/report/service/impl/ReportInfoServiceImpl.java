package com.liyun.car.report.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.quartz.SchedulerException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.common.utils.ArrayUtils;
import com.liyun.car.common.utils.DateUtil;
import com.liyun.car.common.utils.PropertyUtil;
import com.liyun.car.hibernate.hibernate.HibernateSupport;
import com.liyun.car.mail.entity.Attachment;
import com.liyun.car.report.entity.ReportDetail;
import com.liyun.car.report.entity.ReportExcel;
import com.liyun.car.report.entity.ReportExcelDetail;
import com.liyun.car.report.entity.ReportField;
import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.entity.ReportInfoDetail;
import com.liyun.car.report.entity.ReportMailViewer;
import com.liyun.car.report.entity.ReportTask;
import com.liyun.car.report.entity.ReportViewer;
import com.liyun.car.report.enums.MailTypeEnum;
import com.liyun.car.report.quartz.QuartzUtil;
import com.liyun.car.report.service.ReportInfoService;
import com.liyun.car.report.utils.DBUtil;
import com.liyun.car.report.utils.MailSendUtil;

@Service
public class ReportInfoServiceImpl extends HibernateSupport implements ReportInfoService {

	private Logger logger = LoggerFactory.getLogger(ReportInfoServiceImpl.class);
	
	@Override
	public Page<ReportInfo> pageList(ReportInfo info, int pn) {
		if(info!=null){
			return getSession().getCriteria(ReportInfo.class).addRestriction(info, OperMode.EQ, "").getResultList(pn);
		} else {
			return getSession().getCriteria(ReportInfo.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportInfo> getEntitysByParams(ReportInfo info, String... params) {
		if(info!=null){
			return getSession().getCriteria(ReportInfo.class).addRestriction(info, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportInfo.class).getResultList();
		}
	}

	@Override
	public void updateEntity(ReportInfo info, String... params) {
		getSession().update(info, params);
	}

	@Override
	public void saveEntity(ReportInfo info) {
		getSession().persist(info);
	}

	@Override
	public List<ReportInfo> getEntitysByIds(int... ids) {
		return getSession().findEntitys(ReportInfo.class, ids);
	}

	@Override
	public ReportInfo getEntityById(int id) {
		return (ReportInfo) getSession().find(ReportInfo.class, id);
	}
	
	public boolean validateReportMailSend(ReportDetail detail) throws Exception{
		List<Object[]> list = new DBUtil(detail.getDataSource().getJdbcUrl(),detail.getDataSource().getUsername(),detail.getDataSource().getPassword()).getSqlResult(detail.getContent());
		
		if(list!=null && !list.isEmpty()){
			Object[] obj = list.get(0);
			if(obj!=null && obj.length!=0){
				String invalidValue = String.valueOf(obj[0]);
				if((detail.getIsExpect() == BooleanEnum.YES && invalidValue.equals(detail.getValidValue()))
						|| (detail.getIsExpect() == BooleanEnum.NO && !invalidValue.equals(detail.getValidValue()))){
					return true;
				}
			}
		}
		return false;
	}
	
	@Async
	public void saveReportExecResult(ReportInfo info , boolean sendMail) throws Exception{
		ReportTask task = new ReportTask();
		
		try{
			info = getSession().find(ReportInfo.class, info.getId());
			task.setReportInfo(info);
			
			String html = getReportHtmlResult(info);
			task.setHtmlContent(html);
			
			File file = null;
			if(info.getIsGenExcel() == BooleanEnum.YES){
				String fileName = PropertyUtil.getPropertyValue("EXCEL_FILE_PATH")+info.getReportName()+"_"+info.getId()+"_"+DateUtil.getDateFormatAll_(new Date())+".xlsx";
				file = getReportExcelResult(info, fileName);
				task.setFilePath(fileName);
				task.setFileName(file.getName());
				task.setFileSize(Integer.parseInt(file.length()+""));
			}
			
			task.setExecTime(new Date());
			if(sendMail){
				sendMail(info, file, html.toString(), task);
			}
			task.setIsSuccess(BooleanEnum.YES);
			task.setMessage("执行成功!");
		} catch(Exception e){
			task.setIsSuccess(BooleanEnum.NO);
			task.setMessage(e.getMessage());
		}
		getSession().persist(task);
	}
	
	@SuppressWarnings("resource")
	public File getReportExcelResult(ReportInfo info ,String fileName) throws Exception{
		//0.定义变量
		FileOutputStream fos =null;
		SXSSFWorkbook swb = new SXSSFWorkbook(1000);
		File file = new File(fileName);
		fos = new FileOutputStream(file);
		List<ReportExcel> reportExcels = info.getReportExcels();

		for(ReportExcel excel : reportExcels){
			swb.createSheet(excel.getSheetName());
			List<ReportExcelDetail> excelDetails = excel.getReportExcelDetails();
			for(ReportExcelDetail excelDetail : excelDetails){
				ReportDetail detail = excelDetail.getReportDetail();
				List<Object[]> list = new DBUtil(detail.getDataSource().getJdbcUrl(),detail.getDataSource().getUsername(),detail.getDataSource().getPassword()).getSqlResult(detail.getContent());//getSession().createNativeQuery(detail.getContent()).getResultList();
				List<ReportField> reportFields = detail.getReportFields();
				List<ReportField> tempFields = new ArrayList<ReportField>();
				tempFields.addAll(reportFields);
				if(detail.getIsSub() == BooleanEnum.YES){  //带细分字段
					Map<Object,List<Object[]>> map = new HashMap<Object,List<Object[]>>();
					ReportField field = detail.getReportField();
					tempFields.remove(field);
					for(Object[] obj : list){
						Object key = obj[field.getSeq()-1];
						if(!map.containsKey(key)){
							map.put(key, new ArrayList<Object[]>());
						}
							
						Object[] result = ArrayUtils.delete(obj, (field.getSeq()-1));
						map.get(key).add(result);
					}
					for(Iterator<Object> iter = map.keySet().iterator();iter.hasNext();){
						Object key = iter.next();
						getExcelBody(swb.getSheet(excel.getSheetName()), map.get(key), tempFields, key.toString());
					}
				} else {
					getExcelBody(swb.getSheet(excel.getSheetName()), list, tempFields,detail.getTitleName());
				}
			}
		}
		swb.write(fos);
		fos.close();
		
		return new File(fileName);
	}
	
	public String getReportHtmlResult(ReportInfo info) throws Exception {
		//0.定义变量
		StringBuffer htmlSb = new StringBuffer();
		
		//1.处理数据
		List<ReportInfoDetail> reportInfoDetails = info.getReportInfoDetails();
		for(ReportInfoDetail infoDetail : reportInfoDetails){
			ReportDetail detail = infoDetail.getReportDetail();
			List<Object[]> list = new DBUtil(detail.getDataSource().getJdbcUrl(),detail.getDataSource().getUsername(),detail.getDataSource().getPassword()).getSqlResult(detail.getContent());//getSession().createNativeQuery(detail.getContent()).getResultList();
			List<ReportField> reportFields = detail.getReportFields();
			List<ReportField> tempFields = new ArrayList<ReportField>();
			tempFields.addAll(reportFields);
			if(detail.getIsSub() == BooleanEnum.YES){  //带细分字段
				Map<Object,List<Object[]>> map = new HashMap<Object,List<Object[]>>();
				ReportField field = detail.getReportField();
				tempFields.remove(field);
				for(Object[] obj : list){
					Object key = obj[field.getSeq()-1];
					if(!map.containsKey(key)){
						map.put(key, new ArrayList<Object[]>());
					}
						
					Object[] result = ArrayUtils.delete(obj, (field.getSeq()-1));
					map.get(key).add(result);
				}
				for(Iterator<Object> iter = map.keySet().iterator();iter.hasNext();){
					Object key = iter.next();
					htmlSb.append(getHtmlContext(map.get(key), tempFields, key.toString()));
				}
			} else {
				htmlSb.append(getHtmlContext(list,tempFields,detail.getTitleName()));
			}
		}
		
		return htmlSb.toString();
	}

	private void sendMail(ReportInfo info, File file, String content, ReportTask task) throws Exception{
		if(info.getIsSendMail() == BooleanEnum.YES){
			if(!validateReportMailSend(info.getReportDetail())){
				throw new RuntimeException("未通过报表发送校验规则,发送被拒绝.");
			}
			
			List<String> mailAddress =  new ArrayList<>();
			List<String> mailCcAddress =  new ArrayList<>();
			for(ReportViewer viewer : info.getReportViewers()){
				if(viewer.getMailType() == MailTypeEnum.TO){
					mailAddress.add(viewer.getMailViewer().getEmail());
					task.setMailAddress(task.getMailAddress()+viewer.getMailViewer().getEmail()+";");
				}
				if(viewer.getMailType() == MailTypeEnum.CC){
					mailCcAddress.add(viewer.getMailViewer().getEmail());
					task.setMailCcAddress(task.getMailCcAddress()+viewer.getMailViewer().getEmail()+";");
				}
			}
			
			List<Attachment> attachments = new ArrayList<>();
			if(file!=null && file.exists()){
				attachments.add(new Attachment(file,info.getExcelName()+".xlsx"));
			}
			
			try{
				task.setReportSender(info.getReportSender());
				new MailSendUtil(info.getReportName(), content, mailAddress, mailCcAddress, attachments, info.getReportSender().getEmail(), info.getReportSender().getPassword()).send();;
				
				task.setIsMailSuccess(BooleanEnum.YES);
				task.setMailMessage("发送成功!");
			} catch(Exception e){
				task.setIsMailSuccess(BooleanEnum.NO);
				task.setMailMessage(e.getMessage());
				throw e;
			}
		}
	}
	
	private StringBuffer getHtmlContext(List<Object[]> list, List<ReportField> reportFields, String titleName) {
		StringBuffer sb = new StringBuffer("<table style='border-collapse: collapse;width:auto;' cellspacing='0' cellpadding='0' border='0' width='612'>");
		sb.append("<colgroup><col style='mso-width-source:userset;mso-width-alt:3754;width:88pt' width='117'><col style='mso-width-source:userset;mso-width-alt:3157;width:74pt' width='99' span='5'></colgroup>");
		sb.append("<tbody>");
		getHtmlBody(sb, list, reportFields, titleName);
		sb.append("</tbody></table>");
		
		return sb;
	}
	
	public void getExcelBody(Sheet sheet,List<Object[]> list, List<ReportField> reportFields ,String titleName){
		int num = sheet.getLastRowNum();
		Row row=sheet.createRow((short)(num+2));
		
		
		Cell titleCell = row.createCell(0, 0);
		titleCell.setCellType(XSSFCell.CELL_TYPE_STRING);
		titleCell.setCellValue(titleName);
		
		row = sheet.createRow((short)(num+3));
		for(int i = 0;i<reportFields.size();i++){
			sheet.setColumnWidth(i, 20*256);
			Cell cell = row.createCell(i, 0);
			cell.setCellType(XSSFCell.CELL_TYPE_STRING);
			cell.setCellValue(reportFields.get(i).getDeclaredName());
		}
		
		for(int i = 0;i<list.size();i++){
			row = sheet.createRow((short)(num + i + 4));
			Object[] array = (Object[]) list.get(i);
			for(int j = 0;j<array.length;j++){
				Cell cell = row.createCell(j);
				cell.setCellType(XSSFCell.CELL_TYPE_STRING);
				cell.setCellValue(array[j]==null?"":array[j].toString());
			}
		}
	}
	
	public StringBuffer getHtmlBody(StringBuffer sb,List<Object[]> list, List<ReportField> reportFields, String titleName){
		sb.append("<tr class='firstRow'>");
		sb.append("<td style='word-break: break-all;padding-top:20px;' width='240' valign='top'>" + titleName +"</td>");
		sb.append("<td style='word-break: break-all;' rowspan='1' colspan='5' width='746' valign='top'></td>");
		
		StringBuffer titleSb = new StringBuffer("<tr>");
		for(int i = 0; i<reportFields.size();i++){
			if(i == 0){
				titleSb.append("<td style='word-break: break-all;' width='240' valign='top'>"+reportFields.get(i).getDeclaredName()+"</td>");
			} else {
				titleSb.append("<td width='140' valign='top'>"+reportFields.get(i).getDeclaredName()+"</td>");
			}
		}
		titleSb.append("</tr>");
		
		sb.append(titleSb.toString());
		for(int i = 0;i<list.size();i++){
			StringBuffer bodySb = new StringBuffer("<tr>");
			Object[] array = (Object[]) list.get(i);
			for(int j=0;j<array.length;j++){
				if(j == 0){
					bodySb.append("<td width='240' valign='top'>"+ (array[j]==null?"":array[j].toString()) +"</td>");
				} else {
					bodySb.append("<td width='140' valign='top'>"+ (array[j]==null?"":array[j].toString()) +"</td>");
				}
			}
			bodySb.append("</tr>");
			sb.append(bodySb.toString());
		}
		
		
		return sb;
	}

	@Override
	public void saveReportInfo(ReportInfo info) {
		info.setCreateTime(new Date());
		saveEntity(info);
		
		if(info.getReportViewers() == null){
			info.setReportViewers(new ArrayList<ReportViewer>());
		}
		if(info.getMailViewers() != null && !info.getMailViewers().equals("")){
			for(String viewer : info.getMailViewers().split(",")){
				ReportViewer reportViewer = new ReportViewer();
				reportViewer.setMailType(MailTypeEnum.TO);
				reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
				reportViewer.setReportInfo(info);
				
				getSession().persist(reportViewer);
			}
		}
		if(info.getMailCcViewers() != null && !info.getMailCcViewers().equals("")){
			for(String viewer : info.getMailCcViewers().split(",")){
				ReportViewer reportViewer = new ReportViewer();
				reportViewer.setMailType(MailTypeEnum.CC);
				reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
				reportViewer.setReportInfo(info);
				
				getSession().persist(reportViewer);
			}
		}
		try {
			if(info.getStatus() == ParamStatusEnum.ON){
				QuartzUtil.mergeSchedule(info);
			}
		} catch (SchedulerException e) {
			logger.error("添加定时任务失败",e);
			e.printStackTrace();
		}
	}

	@Override
	public void updateReportInfo(ReportInfo info) {
		getSession().update(info,"reportName","status","isSendMail","excelName","isGenExcel","reportSender","sendTime","reportDetail","isValidate");
		
		ReportInfo reportInfo = getSession().find(ReportInfo.class, info.getId());
		reportInfo.getReportViewers().clear();
		
		if(info.getMailViewers() != null && !info.getMailViewers().equals("")){
			for(String viewer : info.getMailViewers().split(",")){
				ReportViewer reportViewer = new ReportViewer();
				reportViewer.setMailType(MailTypeEnum.TO);
				reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
				reportViewer.setReportInfo(info);
				
				reportInfo.getReportViewers().add(reportViewer);
			}
		}
		if(info.getMailCcViewers() != null && !info.getMailCcViewers().equals("")){
			for(String viewer : info.getMailCcViewers().split(",")){
				ReportViewer reportViewer = new ReportViewer();
				reportViewer.setMailType(MailTypeEnum.CC);
				reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
				reportViewer.setReportInfo(info);
				
				reportInfo.getReportViewers().add(reportViewer);
			}
		}
		
		try {
			if(info.getStatus() == ParamStatusEnum.OFF){
				QuartzUtil.deleteSchedule(info);
			} else {
				QuartzUtil.mergeSchedule(info);
			}
		} catch (SchedulerException e) {
			logger.error("添加删除定时任务失败",e);
			e.printStackTrace();
		}
	}

	@Override
	public void print(String msg) {
		System.out.println(msg);
	}

	@Override
	public void updateReportInfoContent(ReportInfo info) {
		ReportInfo reportInfo = this.getSession().find(ReportInfo.class, info.getId());
		if(reportInfo.getReportInfoDetails()!=null){
			reportInfo.getReportInfoDetails().clear();
		} else {
			reportInfo.setReportInfoDetails(new ArrayList<ReportInfoDetail>());
		}
		
		for(ReportInfoDetail infoDetail : info.getReportInfoDetails()){
			infoDetail.setReportInfo(info);
			reportInfo.getReportInfoDetails().add(infoDetail);
		}
	}
}
