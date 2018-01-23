package com.liyun.car.report.controller;

import java.util.Date;
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
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.core.utils.ReturnUitl;
import com.liyun.car.report.dto.MessageDto;
import com.liyun.car.report.entity.ReportDataSource;
import com.liyun.car.report.enums.DataSourceTypeEnum;
import com.liyun.car.report.service.ReportDataSourceService;
import com.liyun.car.report.utils.DBUtil;
import com.liyun.car.report.utils.MessageUtil;

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
	@ResponseBody
	public MessageDto save(ReportDataSource dataSource){
		try{
			if(dataSource.getId() != null){
				reportDataSourceService.updateEntity(dataSource,"dataSourceName","type","jdbcUrl","username","password","status","remark");
			} else {
				dataSource.setCreateTime(new Date());
				reportDataSourceService.saveEntity(dataSource);
			}
		} catch(Exception e){
			logger.error("保存失败,",e);
			
			return MessageUtil.buildDto("99", "保存失败," + e.getMessage());
		}
		return MessageUtil.buildDto("00", "请求成功!");
	}
	
	@RequestMapping("test")
	public void test(HttpServletRequest request, HttpServletResponse response, ReportDataSource dataSource){
		try{
			String driverName = "";
			if(dataSource.getType() == DataSourceTypeEnum.MYSQL){
				driverName = "com.mysql.jdbc.Driver";
			} else {
				driverName = "oracle.jdbc.driver.OracleDriver";
			}
			
			new DBUtil(driverName, dataSource.getJdbcUrl(),dataSource.getUsername(),dataSource.getPassword()).getConnection();
			ReturnUitl.write(response, 1);
		}catch(Exception e){
			logger.error("测试不通过,", e);
			String msg = "连接失败,"+e.getMessage();
			System.out.println(msg);
			ReturnUitl.write(response, 0, msg);
		}
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
