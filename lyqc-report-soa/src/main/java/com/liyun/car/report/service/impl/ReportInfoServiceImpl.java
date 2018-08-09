package com.liyun.car.report.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.mail.Address;
import javax.mail.SendFailedException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.hibernate.criterion.Order;
import org.quartz.SchedulerException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.common.utils.ArrayUtils;
import com.liyun.car.common.utils.DateUtil;
import com.liyun.car.common.utils.PropertyUtil;
import com.liyun.car.common.utils.StringUtils;
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
import com.liyun.car.report.enums.DataSourceTypeEnum;
import com.liyun.car.report.enums.MailTypeEnum;
import com.liyun.car.report.quartz.QuartzUtil;
import com.liyun.car.report.service.ReportDetailService;
import com.liyun.car.report.service.ReportInfoService;
import com.liyun.car.report.utils.DBUtil;
import com.liyun.car.report.utils.MailSendUtil;

@Service
public class ReportInfoServiceImpl extends HibernateSupport implements ReportInfoService {

    private Logger logger = LoggerFactory.getLogger(ReportInfoServiceImpl.class);

    @Autowired
    private ReportDetailService reportDetailService;

    @Override
    public Page<ReportInfo> pageList(ReportInfo info, int pn) {
        if (info != null) {
            return getSession().getCriteria(ReportInfo.class).addRestriction(info, OperMode.EQ, "reportName")
                    .addOrder(Order.desc("createTime")).getResultList(pn);
        } else {
            return getSession().getCriteria(ReportInfo.class).getResultList(pn);
        }
    }

    @Override
    public List<ReportInfo> getEntitysByParams(ReportInfo info, String... params) {
        if (info != null) {
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

    public boolean validateReportMailSend(ReportDetail detail) throws Exception {
        String driverName = "";
        if (detail.getDataSource().getType() == DataSourceTypeEnum.MYSQL) {
            driverName = "com.mysql.jdbc.Driver";
        } else {
            driverName = "oracle.jdbc.driver.OracleDriver";
        }
        List<Object[]> list = new DBUtil(driverName, detail.getDataSource().getJdbcUrl(),
                detail.getDataSource().getUsername(), detail.getDataSource().getPassword()).getSqlResult(detail.getContent());

        if (list != null && !list.isEmpty()) {
            Object[] obj = list.get(0);
            if (obj != null && obj.length != 0) {
                String invalidValue = String.valueOf(obj[0]);
                if ((detail.getIsExpect() == BooleanEnum.YES && invalidValue.equals(detail.getValidValue()))
                        || (detail.getIsExpect() == BooleanEnum.NO && !invalidValue.equals(detail.getValidValue()))) {
                    return true;
                }
            }
        }
        return false;
    }

    @Async
    public void saveReportExecResult(ReportInfo info, boolean sendMail) throws Exception {
        info = getSession().find(ReportInfo.class, info.getId());
        Map<String, ReportTask> taskMap = new HashMap<>();
        ReportTask mainTask = new ReportTask();

        String html = "";
        if (info.getIsContent() != null && info.getIsContent() == BooleanEnum.YES) {
            html = getReportHtmlResult(info, taskMap);
            mainTask.setHtmlContent(html);
        }

        File file = null;
        if (info.getIsGenExcel() == BooleanEnum.YES) {
            String fileName = PropertyUtil.getPropertyValue("EXCEL_FILE_PATH") + info.getReportName() + "_"
                    + info.getId() + "_" + DateUtil.getDateFormatAll_(new Date()) + ".xlsx";
            file = getReportExcelResult(info, fileName, taskMap);
            mainTask.setFilePath(fileName);
            mainTask.setFileName(file.getName());
        }

        buildMainTask(info, mainTask);
        
        List<ReportTask> taskList = new ArrayList<>();
        for(Iterator<String> iter = taskMap.keySet().iterator(); iter.hasNext();) {
            String key = iter.next();
            taskList.add(taskMap.get(key));
        }
        taskList.add(mainTask);
        if (sendMail) {
            sendMail(info, taskList);
        }
    }

    private void buildMainTask(ReportInfo info, ReportTask task) {
        for (ReportViewer viewer : info.getReportViewers()) {
            if (viewer.getMailType() == MailTypeEnum.TO) {
                task.setMailAddress(task.getMailAddress() + viewer.getMailViewer().getEmail() + ";");
            }
            if (viewer.getMailType() == MailTypeEnum.CC) {
                task.setMailCcAddress(task.getMailCcAddress() + viewer.getMailViewer().getEmail() + ";");
            }
        }
    }

    @SuppressWarnings("resource")
    public File getReportExcelResult(ReportInfo info, String fileName, Map<String, ReportTask> taskMap)
            throws Exception {
        // 0.定义变量
        FileOutputStream fos = null;
        SXSSFWorkbook swb = new SXSSFWorkbook(1000);
        File file = new File(fileName);
        fos = new FileOutputStream(file);
        List<ReportExcel> reportExcels = info.getReportExcels();

        for (ReportExcel excel : reportExcels) {
            swb.createSheet(excel.getSheetName());
            List<ReportExcelDetail> excelDetails = excel.getReportExcelDetails();
            for (ReportExcelDetail excelDetail : excelDetails) {
                ReportDetail detail = excelDetail.getReportDetail();
                String driverName = "";
                if (detail.getDataSource().getType() == DataSourceTypeEnum.MYSQL) {
                    driverName = "com.mysql.jdbc.Driver";
                } else {
                    driverName = "oracle.jdbc.driver.OracleDriver";
                }

                List<Object[]> list = new DBUtil(driverName, detail.getDataSource().getJdbcUrl(),
                        detail.getDataSource().getUsername(), detail.getDataSource().getPassword()).getSqlResult(detail.getContent());
                List<ReportField> reportFields = detail.getReportFields();
                List<ReportField> tempFields = new ArrayList<ReportField>();
                tempFields.addAll(reportFields);
                if (detail.getIsSub() == BooleanEnum.YES) { // 带细分字段
                    Map<Object, List<Object[]>> map = new HashMap<Object, List<Object[]>>();
                    ReportField field = detail.getReportField();
                    tempFields.remove(field);
                    for (Object[] obj : list) {
                        Object key = obj[field.getSeq() - 1];
                        if (!map.containsKey(key)) {
                            map.put(key, new ArrayList<Object[]>());
                        }

                        Object[] result = ArrayUtils.delete(obj, (field.getSeq() - 1));
                        map.get(key).add(result);
                    }
                    for (Iterator<Object> iter = map.keySet().iterator(); iter.hasNext();) {
                        Object key = iter.next();
                        getExcelBody(swb.getSheet(excel.getSheetName()), map.get(key), tempFields, key.toString());

                        if (detail.getIsViewer() == BooleanEnum.YES) {
                            ReportTask reportTask = taskMap.get(key);

                            String innerFileName = info.getReportName() + "_" + key + "_" + DateUtil.getDateFormatAll_(new Date()) + ".xlsx";
                            String innerFilePath = PropertyUtil.getPropertyValue("EXCEL_FILE_PATH") + innerFileName;
                            FileOutputStream innerfos = null;
                            SXSSFWorkbook innerswb = new SXSSFWorkbook(1000);
                            innerswb.createSheet();
                            File innerfile = new File(innerFilePath);
                            innerfos = new FileOutputStream(innerfile);
                            getExcelBody(innerswb.getSheetAt(0), map.get(key), tempFields, key.toString());
                            innerswb.write(innerfos);
                            innerfos.close();

                            reportTask.setFileName(innerFileName);
                            reportTask.setFilePath(innerFilePath);
                        }
                    }
                } else {
                    getExcelBody(swb.getSheet(excel.getSheetName()), list, tempFields, detail.getTitleName());
                }
            }
        }
        swb.write(fos);
        fos.close();

        return new File(fileName);
    }

    public String getReportHtmlResult(ReportInfo info, Map<String, ReportTask> taskMap) throws Exception {
        // 0.定义变量
        StringBuffer htmlSb = new StringBuffer();

        // 1.处理数据
        List<ReportInfoDetail> reportInfoDetails = info.getReportInfoDetails();
        if (reportInfoDetails != null && !reportInfoDetails.isEmpty()) {
            for (ReportInfoDetail infoDetail : reportInfoDetails) {
                ReportDetail detail = infoDetail.getReportDetail();
                String driverName = "";
                if (detail.getDataSource().getType() == DataSourceTypeEnum.MYSQL) {
                    driverName = "com.mysql.jdbc.Driver";
                } else {
                    driverName = "oracle.jdbc.driver.OracleDriver";
                }

                List<Object[]> list = new DBUtil(driverName, detail.getDataSource().getJdbcUrl(),
                        detail.getDataSource().getUsername(), detail.getDataSource().getPassword())
                                .getSqlResult(detail.getContent());
                List<ReportField> reportFields = detail.getReportFields();
                List<ReportField> tempFields = new ArrayList<ReportField>();
                tempFields.addAll(reportFields);
                if (detail.getIsSub() == BooleanEnum.YES) { // 带细分字段
                    Map<Object, List<Object[]>> map = new HashMap<Object, List<Object[]>>();
                    ReportField field = detail.getReportField();
                    tempFields.remove(field);
                    for (Object[] obj : list) {
                        Object key = obj[field.getSeq() - 1];
                        if (!map.containsKey(key)) {
                            map.put(key, new ArrayList<Object[]>());
                        }
                        if (!taskMap.containsKey(key)) {
                            taskMap.put(String.valueOf(key), new ReportTask());
                        }

                        Object[] result = ArrayUtils.delete(obj, (field.getSeq() - 1));
                        map.get(key).add(result);
                    }
                    for (Iterator<Object> iter = map.keySet().iterator(); iter.hasNext();) {
                        Object key = iter.next();

                        StringBuffer innerHtml = getHtmlContext(map.get(key), tempFields, key.toString());
                        htmlSb.append(innerHtml);

                        if (detail.getIsViewer() == BooleanEnum.YES) {
                            ReportTask reportTask = taskMap.get(key);
                            reportTask.setHtmlContent(innerHtml.toString());
                            reportTask.setMailAddress(String.valueOf(key));
                        }
                    }

                } else {
                    htmlSb.append(getHtmlContext(list, tempFields, detail.getTitleName()));
                }
            }
        }

        return htmlSb.toString();
    }

    private void sendMail(ReportInfo info, Collection<ReportTask> taskList) throws Exception {
        if (info.getIsSendMail() == BooleanEnum.YES) {
            if (info.getIsValidate() == BooleanEnum.YES && !validateReportMailSend(info.getReportDetail())) {
                throw new RuntimeException("未通过报表发送校验规则,发送被拒绝.");
            }

            for(ReportTask task : taskList) {
                task.setIsMailSuccess(BooleanEnum.YES);
                task.setIsSuccess(BooleanEnum.YES);
                task.setMailMessage("发送成功!");
                task.setMessage("执行成功!");
                task.setExecTime(new Date());
                task.setReportInfo(info);
                task.setReportSender(info.getReportSender());
                if(task.getHtmlContent() == null) {
                    task.setHtmlContent("");
                }
                
                MailSendUtil mailSend = buildMailSend(info, task);
                try {
                    mailSend.send();
                } catch (SendFailedException se) {
                    se.printStackTrace();
                    Address[] unsend = se.getValidUnsentAddresses();
                    if (null != unsend) {
                        List<String> validAddrList = new ArrayList<>();
                        for (int i = 0; i < unsend.length; i++) {
                            validAddrList.add(unsend[i].toString());
                        }
                        mailSend.setMailAddress(validAddrList);
                        mailSend.send();
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    task.setIsMailSuccess(BooleanEnum.NO);
                    task.setMailMessage(e.getMessage());
                } finally {
                    getSession().persist(task);
                }
            }
        }
    }

    private MailSendUtil buildMailSend(ReportInfo info, ReportTask task) {
        List<Attachment> attachments = new ArrayList<>();
        File file = new File(task.getFilePath());
        if (file != null && file.exists()) {
            attachments.add(new Attachment(file, info.getExcelName() + ".xlsx"));
        }
        
        List<String> mailAddressList = new ArrayList<>();
        List<String> mailCcAddressList = new ArrayList<>();
        if(!StringUtils.isBlank(task.getMailAddress())) {
            for(String mailAddress : task.getMailAddress().split(";")) {
                mailAddressList.add(mailAddress);
            }
        }
        
        if(!StringUtils.isBlank(task.getMailCcAddress())) {
            for(String mailCcAddress : task.getMailCcAddress().split(";")) {
                mailCcAddressList.add(mailCcAddress);
            }
        }
        
        return new MailSendUtil(info.getReportName(), task.getHtmlContent(), mailAddressList, mailCcAddressList, attachments,
                info.getReportSender().getEmail(), info.getReportSender().getPassword());
    }

    private StringBuffer getHtmlContext(List<Object[]> list, List<ReportField> reportFields, String titleName) {
        StringBuffer sb = new StringBuffer("<div style='line-height: normal; position: relative;'><table border='0' cellpadding='0' cellspacing='0' width='910' style='border-collapse:collapse;width:590pt'>");
        sb.append("<colgroup><col width='100' style='mso-width-source:userset;mso-width-alt:3128;width:218pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:15758;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:3527;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("<col width='100' style='mso-width-source:userset;mso-width-alt:5603;width:118pt'>");
        sb.append("</colgroup><tbody>");
        getHtmlBody(sb, list, reportFields, titleName);
        sb.append("</tbody></table></div>");

        return sb;
    }

    public void getExcelBody(Sheet sheet, List<Object[]> list, List<ReportField> reportFields, String titleName) {
        int num = sheet.getLastRowNum();
        Row row = sheet.createRow((num + 2));

        Cell titleCell = row.createCell(0, 0);
        titleCell.setCellType(XSSFCell.CELL_TYPE_STRING);
        titleCell.setCellValue(titleName);

        row = sheet.createRow((num + 3));
        for (int i = 0; i < reportFields.size(); i++) {
            sheet.setColumnWidth(i, 20 * 256);
            Cell cell = row.createCell(i, 0);
            cell.setCellType(XSSFCell.CELL_TYPE_STRING);
            cell.setCellValue(reportFields.get(i).getDeclaredName());
        }

        for (int i = 0; i < list.size(); i++) {
            row = sheet.createRow((num + i + 4));
            Object[] array = (Object[]) list.get(i);
            for (int j = 0; j < array.length; j++) {
                Cell cell = row.createCell(j);
                cell.setCellType(XSSFCell.CELL_TYPE_STRING);
                cell.setCellValue(array[j] == null ? "" : array[j].toString());
            }
        }
    }

    public StringBuffer getHtmlBody(StringBuffer sb, List<Object[]> list, List<ReportField> reportFields,
            String titleName) {
        sb.append("<tr height='20' style='mso-height-source:userset;height:15.0pt'>");
        sb.append("<td height='20' class='xl83' width='100' style='height: 15pt; width: 66pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 10pt; font-weight: 700; font-style: italic; font-family: 微软雅黑, sans-serif; vertical-align: middle; border: none; white-space: nowrap; text-align: left;' colspan='100'>"
                        + titleName + "</td></tr>");
        StringBuffer titleSb = new StringBuffer("<tr height='20' style='mso-height-source:userset;height:15.0pt'>");
        for (int i = 0; i < reportFields.size(); i++) {
            titleSb.append("<td class='xl66' style='border: 0.5pt solid windowtext; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 8pt; font-family: 微软雅黑, sans-serif; vertical-align: middle; white-space: nowrap;'>"
                            + reportFields.get(i).getDeclaredName() + "</td>");
        }
        titleSb.append("</tr>");

        sb.append(titleSb.toString());
        for (int i = 0; i < list.size(); i++) {
            StringBuffer bodySb = new StringBuffer("<tr height='20' style='mso-height-source:userset;height:15.0pt'>");
            Object[] array = (Object[]) list.get(i);
            for (int j = 0; j < array.length; j++) {
                bodySb.append("<td class='xl66' style='border: 0.5pt solid windowtext; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 8pt; font-family: 微软雅黑, sans-serif; vertical-align: middle; white-space: nowrap;'>" + (array[j] == null ? "" : array[j].toString()) + "</td>");
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

        if (info.getReportViewers() == null) {
            info.setReportViewers(new ArrayList<ReportViewer>());
        }
        if (info.getMailViewers() != null && !info.getMailViewers().equals("")) {
            for (String viewer : info.getMailViewers().split(",")) {
                ReportViewer reportViewer = new ReportViewer();
                reportViewer.setMailType(MailTypeEnum.TO);
                reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
                reportViewer.setReportInfo(info);

                getSession().persist(reportViewer);
            }
        }
        if (info.getMailCcViewers() != null && !info.getMailCcViewers().equals("")) {
            for (String viewer : info.getMailCcViewers().split(",")) {
                ReportViewer reportViewer = new ReportViewer();
                reportViewer.setMailType(MailTypeEnum.CC);
                reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
                reportViewer.setReportInfo(info);

                getSession().persist(reportViewer);
            }
        }
        try {
            if (info.getStatus() == ParamStatusEnum.ON) {
                QuartzUtil.mergeSchedule(info);
            }
        } catch (SchedulerException e) {
            logger.error("添加定时任务失败", e);
            e.printStackTrace();
        }
    }

    @Override
    public void updateReportInfo(ReportInfo info) {
        if (info.getReportDetail() != null && info.getReportDetail().getId() != null) {
            ReportDetail reportDetail = reportDetailService.getEntityById(info.getReportDetail().getId());
            info.setReportDetail(reportDetail);
            getSession().update(info, "reportName", "status", "isSendMail", "excelName", "isContent", "isGenExcel",
                    "reportSender", "sendTime", "reportDetail", "isValidate");
        } else {
            info.setReportDetail(null);
            getSession().update(info, "reportName", "status", "isSendMail", "excelName", "isContent", "isGenExcel",
                    "reportSender", "sendTime", "reportDetail", "isValidate");
        }

        ReportInfo reportInfo = getSession().find(ReportInfo.class, info.getId());
        reportInfo.getReportViewers().clear();

        if (info.getMailViewers() != null && !info.getMailViewers().equals("")) {
            for (String viewer : info.getMailViewers().split(",")) {
                ReportViewer reportViewer = new ReportViewer();
                reportViewer.setMailType(MailTypeEnum.TO);
                reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
                reportViewer.setReportInfo(info);

                reportInfo.getReportViewers().add(reportViewer);
            }
        }
        if (info.getMailCcViewers() != null && !info.getMailCcViewers().equals("")) {
            for (String viewer : info.getMailCcViewers().split(",")) {
                ReportViewer reportViewer = new ReportViewer();
                reportViewer.setMailType(MailTypeEnum.CC);
                reportViewer.setMailViewer(new ReportMailViewer(Integer.parseInt(viewer)));
                reportViewer.setReportInfo(info);

                reportInfo.getReportViewers().add(reportViewer);
            }
        }

        try {
            if (info.getStatus() == ParamStatusEnum.OFF) {
                QuartzUtil.deleteSchedule(info);
            } else {
                QuartzUtil.mergeSchedule(info);
            }
        } catch (SchedulerException e) {
            logger.error("添加删除定时任务失败", e);
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
        if (reportInfo.getReportInfoDetails() != null) {
            reportInfo.getReportInfoDetails().clear();
        } else {
            reportInfo.setReportInfoDetails(new ArrayList<ReportInfoDetail>());
        }

        for (ReportInfoDetail infoDetail : info.getReportInfoDetails()) {
            infoDetail.setReportInfo(info);
            reportInfo.getReportInfoDetails().add(infoDetail);
        }
    }
}
