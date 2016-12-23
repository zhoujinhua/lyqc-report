package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportDetail;

public interface ReportDetailService {
	
	public Page<ReportDetail> pageList(ReportDetail detail, int pn);
	
	public List<ReportDetail> getEntitysByParams(ReportDetail detail,String...params);
	
	public void updateEntity(ReportDetail detail ,String...params);
	
	public void saveEntity(ReportDetail detail);
	
	public List<ReportDetail> getEntitysByIds(int...ids);
	
	public ReportDetail getEntityById(int id);

	public void updateReportDetail(ReportDetail detail);

	public void saveReportDetail(ReportDetail detail);

	public void deleteReportDetail(ReportDetail detail);
}
