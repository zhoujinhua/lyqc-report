package com.liyun.car.report.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
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
import com.liyun.car.core.utils.DownloadUtil;
import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.entity.ReportTask;
import com.liyun.car.report.service.ReportTaskService;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("task")
public class ReportTaskController {

	@Autowired
	private ReportTaskService reportTaskService;

	private Logger logger = LoggerFactory.getLogger(ReportTaskController.class);
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request,ReportTask task){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		
		if(task.getReportInfo()==null){
			task.setReportInfo(new ReportInfo());
		}
		task.getReportInfo().setReportName(task.getReportName());
		Page<ReportTask> page = reportTaskService.pageList(task, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}
	
	@RequestMapping("download")
	public void download(HttpServletRequest request, HttpServletResponse response, ReportTask reportTask){
		try {
			reportTask = reportTaskService.getEntityById(reportTask.getId());
			DownloadUtil.download(request, response, new File(reportTask.getFilePath()), reportTask.getReportInfo().getExcelName()+".xlsx");
		} catch (IOException e) {
			e.printStackTrace();
			logger.error("附件下载失败,",e);
		}
	}
	
	@RequestMapping("html")
	@ResponseBody
	public void html(HttpServletRequest request,HttpServletResponse response, ReportTask reportTask){
		PrintWriter pw = null;
		try{
			pw = response.getWriter();
			reportTask = reportTaskService.getEntityById(reportTask.getId());
			reportTask.setReportInfo(null);
			pw.print(JSONObject.fromObject(reportTask));
		} catch(Exception e){
			pw.println("");
			logger.error("html失败",e);
		}
	}
}
