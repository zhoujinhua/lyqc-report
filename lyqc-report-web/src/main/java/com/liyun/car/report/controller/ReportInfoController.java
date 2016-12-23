package com.liyun.car.report.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.report.entity.ReportDetail;
import com.liyun.car.report.entity.ReportExcel;
import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.entity.ReportInfoDetail;
import com.liyun.car.report.entity.ReportMailViewer;
import com.liyun.car.report.entity.ReportSender;
import com.liyun.car.report.service.ReportDetailService;
import com.liyun.car.report.service.ReportInfoService;
import com.liyun.car.report.service.ReportMailViewerService;
import com.liyun.car.report.service.ReportSenderService;

@Controller
@RequestMapping("report")
public class ReportInfoController {

	private Logger logger = LoggerFactory.getLogger(ReportInfoController.class);
	
	@Autowired
	private ReportInfoService reportInfoService;
	
	@Autowired
	private ReportMailViewerService mailViewerService;
	
	@Autowired
	private ReportSenderService reportSenderService;
	
	@Autowired
	private ReportDetailService reportDetailService;
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request,ReportInfo info){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		Page<ReportInfo> page = reportInfoService.pageList(info, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}
	
	@RequestMapping("add")
	public String add(HttpServletRequest request,ReportInfo info){
		if(info.getId()!=null){
			info = reportInfoService.getEntityById(info.getId());
		}
		
		ReportMailViewer viewer = new ReportMailViewer();
		viewer.setStatus(ParamStatusEnum.ON);
		List<ReportMailViewer> viewers = mailViewerService.getEntitysByParams(viewer , "status");
		
		ReportSender sender = new ReportSender();
		sender.setStatus(ParamStatusEnum.ON);
		List<ReportSender> senders = reportSenderService.getEntitysByParams(sender, "status");
		
		ReportDetail detail = new ReportDetail();
		detail.setIsValidate(BooleanEnum.YES);
		detail.setStatus(ParamStatusEnum.ON);
		List<ReportDetail> validDetails = reportDetailService.getEntitysByParams(detail, "isValidate","status");
		
		request.setAttribute("info", info);
		request.setAttribute("viewers", viewers);
		request.setAttribute("senders", senders);
		request.setAttribute("validDetails", validDetails);
		return "report/add";
	}
	
	@RequestMapping("getContentsByInfo")
	@ResponseBody
	public Map<String, Object> getContentsByInfo(HttpServletRequest request, HttpServletResponse response, ReportInfo reportInfo){
		Map<String, Object> map = new HashMap<String,Object>();
		reportInfo = reportInfoService.getEntityById(reportInfo.getId());
		List<ReportInfoDetail> infoDetails = reportInfo.getReportInfoDetails();
		List<ReportDetail> reportDetails = new ArrayList<ReportDetail>();
		if(infoDetails!=null && !infoDetails.isEmpty()){
			for(ReportInfoDetail infoDetail : reportInfo.getReportInfoDetails()){
				reportDetails.add(infoDetail.getReportDetail());
			}
		}
		map.put("aaData", reportDetails);
		return map;
	}
	
	@RequestMapping("save")
	public String save(HttpServletRequest request,ReportInfo info){
		try{
			if(info.getId() == null){
				reportInfoService.saveReportInfo(info);
			} else {
				reportInfoService.updateReportInfo(info);
			}
			request.setAttribute("msg", "保存成功!");
		} catch(Exception e){
			request.setAttribute("msg", "保存失败!" + e.getMessage());
			logger.error("保存失败,",e);
			
			request.setAttribute("info", info);
			return "report/add";
		}
		return "report/list";
	}
	
	@RequestMapping("exec")
	public String exec(HttpServletRequest request,ReportInfo info){
		try{
			boolean flag = info.getIsSendMail() == BooleanEnum.YES?true:false;
			reportInfoService.saveReportExecResult(info,flag);
			request.setAttribute("msg", "执行成功!");
		} catch(Exception e){
			request.setAttribute("msg", "执行失败!" + e.getMessage());
			logger.error("执行失败,",e);
		}
		return "report/list";
	}
	
	
	
	@RequestMapping("dialog")
	public String dialog(HttpServletRequest request,ReportExcel excel){
		request.setAttribute("id", excel.getId());
		return "report/dialog";
	}
	
	@RequestMapping("setContent")
	@ResponseBody
	public String setContent(HttpServletRequest request,ReportInfo info){
		try {
			reportInfoService.updateReportInfoContent(info);
			request.setAttribute("msg", "操作成功");
		} catch(Exception e){
			logger.error("设置失败,",e);
			return "error:"+e.getMessage();
		}
		return "success";
	}
}
