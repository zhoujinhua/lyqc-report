package com.liyun.car.report.quartz;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.liyun.car.core.spring.SpringContextBeanFactory;
import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.service.ReportInfoService;

public class QuartzTaskFactory implements Job {

	public static ReportInfoService reportInfoService = SpringContextBeanFactory.getBean("reportInfoServiceImpl");
	private Logger logger = LoggerFactory.getLogger(QuartzTaskFactory.class);
	
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		try {
			System.out.println("任务运行...");
			ReportInfo reportInfo = (ReportInfo) context.getMergedJobDataMap().get("reportInfo");
			System.out.println("任务名称: [" + reportInfo.getReportName() + "]");

			reportInfoService.saveReportExecResult(reportInfo ,true);
			System.out.println("任务运行完成...");
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("任务执行失败,",e);
		}
	}
}