package com.liyun.car.report.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.report.entity.ReportMailViewer;
import com.liyun.car.report.service.ReportMailViewerService;

@Controller
@RequestMapping("viewer")
public class ReportMailViewerController {
	
	private Logger logger = LoggerFactory.getLogger(ReportMailViewerController.class);
	
	@Autowired
	private ReportMailViewerService mailViewerService;

	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request, ReportMailViewer viewer){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		Page<ReportMailViewer> page = mailViewerService.pageList(viewer, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}
	
	
	@RequestMapping("add")
	public String add(HttpServletRequest request, ReportMailViewer viewer){
		viewer = mailViewerService.getEntityById(viewer.getId());
		
		request.setAttribute("viewer", viewer);
		return "viewer/add";
	}
	
	@RequestMapping("save")
	public String save(HttpServletRequest request , ReportMailViewer viewer){
		try{
			if(viewer.getId() != null){
				mailViewerService.updateEntity(viewer,"sheetName");
			} else {
				viewer.setCreateTime(new Date());
				mailViewerService.saveEntity(viewer);
			}
		} catch(Exception e){
			logger.error("保存失败,",e);
			request.setAttribute("viewer", viewer);
			
			return "viewer/add";
		}
		return "viewer/list";
	}
	
	@RequestMapping("setStatus")
	public String setStatus(HttpServletRequest request , ReportMailViewer viewer){
		try{
			viewer = mailViewerService.getEntityById(viewer.getId());
			if(viewer.getStatus() == ParamStatusEnum.ON){
				viewer.setStatus(ParamStatusEnum.OFF);
			} else {
				viewer.setStatus(ParamStatusEnum.ON);
			}
			mailViewerService.updateEntity(viewer, "status");
			request.setAttribute("msg", "状态设置成功!");
		} catch(Exception e){
			logger.error("设置状态失败,",e);
			request.setAttribute("msg", "状态设置失败,"+e.getMessage());
		}
		return "viewer/list";
	}
}
