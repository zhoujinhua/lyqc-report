package com.liyun.car.report.job;

import java.util.List;

import org.quartz.SchedulerException;

import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.core.spring.SpringContextBeanFactory;
import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.quartz.QuartzUtil;
import com.liyun.car.report.service.ReportInfoService;

public class LoadTask {
	
	public static ReportInfoService reportInfoService = SpringContextBeanFactory.getBean("reportInfoServiceImpl");
	
	public void initTask() {
		ReportInfo info = new ReportInfo();
		info.setStatus(ParamStatusEnum.ON);
		info.setIsSendMail(BooleanEnum.YES);

		// 可执行的任务列表
		List<ReportInfo> list = reportInfoService.getEntitysByParams(info, "status", "isSendMail");

		for (ReportInfo reportInfo : list) {
			try {
				QuartzUtil.mergeSchedule(reportInfo);
			} catch (SchedulerException e) {
				e.printStackTrace();
			}
		}
	}

}