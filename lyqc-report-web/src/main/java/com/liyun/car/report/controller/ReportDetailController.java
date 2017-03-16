package com.liyun.car.report.controller;

import java.io.PrintWriter;
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
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.common.utils.StringUtils;
import com.liyun.car.report.entity.ReportDataSource;
import com.liyun.car.report.entity.ReportDetail;
import com.liyun.car.report.enums.DataSourceTypeEnum;
import com.liyun.car.report.service.ReportDataSourceService;
import com.liyun.car.report.service.ReportDetailService;
import com.liyun.car.report.utils.DBUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping("content")
public class ReportDetailController {

	
	private Logger logger = LoggerFactory.getLogger(ReportDetailController.class);
	@Autowired
	private ReportDetailService reportDetailService;
	
	@Autowired
	private ReportDataSourceService reportDataSourceService;

	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request,ReportDetail detail){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		Page<ReportDetail> page = reportDetailService.pageList(detail, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}
	
	@RequestMapping("getContents")
	@ResponseBody
	public Map<String,Object> getContents(HttpServletRequest request, HttpServletResponse response ,ReportDetail reportDetail){
		Map<String, Object> map = new HashMap<String,Object>();
		List<ReportDetail> reportDetails = reportDetailService.getEntitysByParams(reportDetail, "status","isValidate");
		
		map.put("aaData", reportDetails);
		return map;
	}
	
	@RequestMapping("getContentField")
	public void getContentField(HttpServletRequest request,HttpServletResponse response){
		PrintWriter pw = null;
		try{
			pw = response.getWriter();
			String content = request.getParameter("content");
			String dataSourceId = request.getParameter("dataSourceId");
			ReportDataSource dataSource = reportDataSourceService.getEntityById(Integer.parseInt(dataSourceId));
			String driverName = "";
			if(dataSource.getType() == DataSourceTypeEnum.MYSQL){
				driverName = "oracle.jdbc.driver.OracleDriver";
			} else {
				driverName = "com.mysql.jdbc.Driver";
			}
			
			List<String> list = new DBUtil(driverName, dataSource.getJdbcUrl(),dataSource.getUsername(),dataSource.getPassword()).getSqlColumn(content);
			pw.print(JSONArray.fromObject(list).toString());
		} catch(Exception e){
			JSONObject obj = JSONObject.fromObject("{\"msg\":\""+StringUtils.strFormatJson(e.getMessage())+"\"}");
			pw.print(obj.toString());
		}
	}
	
	@RequestMapping("save")
	public String save(HttpServletRequest request ,ReportDetail detail){
		try {
			if(detail.getId()!=null){
				reportDetailService.updateReportDetail(detail);
			} else {
				reportDetailService.saveReportDetail(detail);
			}
			request.setAttribute("msg", "保存成功");
			return "content/list";
		} catch(Exception e){
			logger.error("脚本设置失败.",e);
			request.setAttribute("msg", "保存失败,"+e.getMessage());
			
			request.setAttribute("detail", detail);
			return "content/add";
		}
	}
	
	@RequestMapping("add")
	public String add(HttpServletRequest request,ReportDetail detail){
		if(detail.getId()!=null){
			detail = reportDetailService.getEntityById(detail.getId());
			request.setAttribute("detail", detail);
		}
		ReportDataSource dataSource = new ReportDataSource();
		dataSource.setStatus(ParamStatusEnum.ON);;
		List<ReportDataSource> dataSources = reportDataSourceService.getEntitysByParams(dataSource , "status");
		
		request.setAttribute("dataSources", dataSources);
		return "content/add";
	}
	
	@RequestMapping("delete")
	public String delete(HttpServletRequest request, ReportDetail detail){
		try {
			reportDetailService.deleteReportDetail(detail);
			request.setAttribute("msg", "删除成功!");
			return "content/list";
		} catch(Exception e){
			logger.error("删除失败,",e);
			return "content/list";
		}
	}
}
