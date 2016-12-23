package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportDataSource;

public interface ReportDataSourceService {
	
	public Page<ReportDataSource> pageList(ReportDataSource dataSource, int pn);
	
	public List<ReportDataSource> getEntitysByParams(ReportDataSource dataSource,String...params);
	
	public void updateEntity(ReportDataSource dataSource ,String...params);
	
	public void saveEntity(ReportDataSource dataSource);
	
	public List<ReportDataSource> getEntitysByIds(int...ids);
	
	public ReportDataSource getEntityById(int id);
}
