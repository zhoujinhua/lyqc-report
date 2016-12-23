package com.liyun.car.report.service;

import java.util.List;

import com.liyun.car.common.entity.Page;
import com.liyun.car.report.entity.ReportSender;

public interface ReportSenderService {
	
	public Page<ReportSender> pageList(ReportSender sender, int pn);
	
	public List<ReportSender> getEntitysByParams(ReportSender sender,String...params);
	
	public void updateEntity(ReportSender sender ,String...params);
	
	public void saveEntity(ReportSender sender);
	
	public List<ReportSender> getEntitysByIds(int...ids);
	
	public ReportSender getEntityById(int id);
}
