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
import com.liyun.car.report.entity.ReportSender;
import com.liyun.car.report.service.ReportSenderService;

@Controller
@RequestMapping("sender")
public class ReportSenderController {

private Logger logger = LoggerFactory.getLogger(ReportSenderController.class);
	
	@Autowired
	private ReportSenderService reportSenderService;

	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request,ReportSender sender){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		Page<ReportSender> page = reportSenderService.pageList(sender, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}
	
	@RequestMapping("save")
	public String save(HttpServletRequest request , ReportSender sender){
		try{
			if(sender.getId() != null){
				reportSenderService.updateEntity(sender,"sheetName");
			} else {
				sender.setCreateTime(new Date());
				reportSenderService.saveEntity(sender);
			}
		} catch(Exception e){
			logger.error("保存失败,",e);
			request.setAttribute("sender", sender);
			
			return "sender/add";
		}
		return "sender/list";
	}
	
	@RequestMapping("add")
	public String add(HttpServletRequest request, ReportSender sender){
		sender = reportSenderService.getEntityById(sender.getId());
		
		request.setAttribute("sender", sender);
		return "sender/add";
	}
	
	@RequestMapping("setStatus")
	public String setStatus(HttpServletRequest request , ReportSender sender){
		try{
			sender = reportSenderService.getEntityById(sender.getId());
			if(sender.getStatus() == ParamStatusEnum.ON){
				sender.setStatus(ParamStatusEnum.OFF);
			} else {
				sender.setStatus(ParamStatusEnum.ON);
			}
			reportSenderService.updateEntity(sender, "status");
			request.setAttribute("msg", "状态设置成功!");
		} catch(Exception e){
			logger.error("设置状态失败,",e);
			request.setAttribute("msg", "状态设置失败,"+e.getMessage());
		}
		return "sender/list";
	}
}
