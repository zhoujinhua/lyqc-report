package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportExcel;

public interface ReportExcelService {
	
	public Page<ReportExcel> pageList(ReportExcel excel, int pn);
	
	public List<ReportExcel> getEntitysByParams(ReportExcel excel,String...params);
	
	public void updateEntity(ReportExcel excel ,String...params);
	
	public void saveEntity(ReportExcel excel);
	
	public List<ReportExcel> getEntitysByIds(int...ids);
	
	public ReportExcel getEntityById(int id);

	public void updateReportExcelContent(ReportExcel excel);
}
