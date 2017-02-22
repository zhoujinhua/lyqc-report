package com.liyun.car.report.controller;

import java.util.ArrayList;
import java.util.Date;
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
import com.liyun.car.report.entity.ReportDetail;
import com.liyun.car.report.entity.ReportExcel;
import com.liyun.car.report.entity.ReportExcelDetail;
import com.liyun.car.report.service.ReportExcelService;

@Controller
@RequestMapping("excel")
public class ReportExcelController {
	
	private Logger logger = LoggerFactory.getLogger(ReportExcelController.class);
	@Autowired
	private ReportExcelService reportExcelService;

	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(HttpServletRequest request,ReportExcel excel){
		int length = ServletRequestUtils.getIntParameter(request, "length", 10);
		int start = ServletRequestUtils.getIntParameter(request, "start", 0);
		int pn = start == 0?1:(start/length+1);
		Map<String, Object> map = new HashMap<String,Object>();
		Page<ReportExcel> page = reportExcelService.pageList(excel, pn);
		
		map.put("aaData", page.getItems());
		map.put("recordsTotal", page.getCount());
	    map.put("recordsFiltered", page.getCount());
	    
	    return map;
	}

	@RequestMapping("getContentsByExcel")
	@ResponseBody
	public Map<String, Object> getContentsByExcel(HttpServletRequest request, HttpServletResponse response, ReportExcel reportExcel){
		Map<String, Object> map = new HashMap<String,Object>();
		reportExcel = reportExcelService.getEntityById(reportExcel.getId());
		List<ReportExcelDetail> excelDetails = reportExcel.getReportExcelDetails();
		List<ReportDetail> reportDetails = new ArrayList<ReportDetail>();
		if(excelDetails!=null && !excelDetails.isEmpty()){
			for(ReportExcelDetail excelDetail : reportExcel.getReportExcelDetails()){
				reportDetails.add(excelDetail.getReportDetail());
			}
		}
		map.put("aaData", reportDetails);
		return map;
	}
	
	@RequestMapping("setContent")
	@ResponseBody
	public String setContent(HttpServletRequest request,ReportExcel excel){
		try {
			reportExcelService.updateReportExcelContent(excel);
			request.setAttribute("msg", "操作成功");
		} catch(Exception e){
			logger.error("设置失败,",e);
			return "error:"+e.getMessage();
		}
		return "success";
	}
	
	@RequestMapping("save")
	public String save(HttpServletRequest request , ReportExcel excel){
		try{
			if(excel.getId() != null){
				reportExcelService.updateEntity(excel,"sheetName");
			} else {
				excel.setCreateTime(new Date());
				reportExcelService.saveEntity(excel);
			}
		} catch(Exception e){
			logger.error("保存失败,",e);
			request.setAttribute("excel", excel);
		}
		request.setAttribute("id", excel.getReportInfo().getId());
		return "excel/list";
	}
	
	@RequestMapping("dialog")
	public String dialog(HttpServletRequest request,ReportExcel excel){
		request.setAttribute("id", excel.getId());
		return "excel/dialog";
	}
	
	@RequestMapping("delete")
	public String delete(HttpServletRequest request,ReportExcel excel){
		String id = "";
		try{
			excel = reportExcelService.getEntityById(excel.getId());
			id = excel.getReportInfo().getId() + "";
			reportExcelService.deleteExcel(excel);
			request.setAttribute("msg", "删除成功!");
		} catch(Exception e){
			logger.error("删除失败,",e);
			request.setAttribute("msg", "删除失败,"+e.getMessage());
			request.setAttribute("excel", excel);
		}
		request.setAttribute("id", id);
		return "excel/list";
	}
}
