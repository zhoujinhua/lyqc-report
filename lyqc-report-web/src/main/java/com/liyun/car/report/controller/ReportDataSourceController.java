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
import com.liyun.car.report.entity.ReportDataSource;
import com.liyun.car.report.service.ReportDataSourceService;

@Controller
@RequestMapping("dataSource")
public class ReportDataSourceController {

private Logger logger = LoggerFactory.getLogger(ReportDataSourceController.class);
	
	@Autowired
	private ReportDataSourceService reportDataSourceService;

	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request,ReportDataSource dataSource){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		Page<ReportDataSource> page = reportDataSourceService.pageList(dataSource, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}
	
	@RequestMapping("add")
	public String add(HttpServletRequest request, ReportDataSource dataSource){
		dataSource = reportDataSourceService.getEntityById(dataSource.getId());
		
		request.setAttribute("dataSource", dataSource);
		return "datasource/add";
	}
	
	@RequestMapping("save")
	public String save(HttpServletRequest request , ReportDataSource dataSource){
		try{
			if(dataSource.getId() != null){
				reportDataSourceService.updateEntity(dataSource,"dataSourceName","type","jdbcUrl","username","password","status","remark");
			} else {
				dataSource.setCreateTime(new Date());
				reportDataSourceService.saveEntity(dataSource);
			}
		} catch(Exception e){
			logger.error("保存失败,",e);
			request.setAttribute("dataSource", dataSource);
			
			return "datasource/add";
		}
		return "datasource/list";
	}
	
	@RequestMapping("setStatus")
	public String setStatus(HttpServletRequest request , ReportDataSource dataSource){
		try{
			dataSource = reportDataSourceService.getEntityById(dataSource.getId());
			if(dataSource.getStatus() == ParamStatusEnum.ON){
				dataSource.setStatus(ParamStatusEnum.OFF);
			} else {
				dataSource.setStatus(ParamStatusEnum.ON);
			}
			reportDataSourceService.updateEntity(dataSource, "status");
			request.setAttribute("msg", "状态设置成功!");
		} catch(Exception e){
			logger.error("设置状态失败,",e);
			request.setAttribute("msg", "状态设置失败,"+e.getMessage());
		}
		return "datasource/list";
	}
}
