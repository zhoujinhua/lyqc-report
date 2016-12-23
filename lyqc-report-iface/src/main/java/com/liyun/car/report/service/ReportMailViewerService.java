package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportMailViewer;

public interface ReportMailViewerService {
	
	public Page<ReportMailViewer> pageList(ReportMailViewer viewer, int pn);
	
	public List<ReportMailViewer> getEntitysByParams(ReportMailViewer viewer,String...params);
	
	public void updateEntity(ReportMailViewer viewer ,String...params);
	
	public void saveEntity(ReportMailViewer viewer);
	
	public List<ReportMailViewer> getEntitysByIds(int...ids);
	
	public ReportMailViewer getEntityById(int id);
}
