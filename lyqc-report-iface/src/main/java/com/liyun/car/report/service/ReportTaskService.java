package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportTask;

public interface ReportTaskService {
	
	public Page<ReportTask> pageList(ReportTask task, int pn);
	
	public List<ReportTask> getEntitysByParams(ReportTask task,String...params);
	
	public ReportTask getEntityById(int id);
}
