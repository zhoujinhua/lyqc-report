package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportInfo;

public interface ReportInfoService {
	
	public Page<ReportInfo> pageList(ReportInfo info, int pn);
	
	public List<ReportInfo> getEntitysByParams(ReportInfo info,String...params);
	
	public void updateEntity(ReportInfo info ,String...params);
	
	public void saveEntity(ReportInfo info);
	
	public List<ReportInfo> getEntitysByIds(int...ids);
	
	public ReportInfo getEntityById(int id);
	
	public void saveReportExecResult(ReportInfo info , boolean sendMail) throws Exception;

	public void saveReportInfo(ReportInfo info);

	public void updateReportInfo(ReportInfo info);
	
	public void print(String msg);

	public void updateReportInfoContent(ReportInfo info);
}
