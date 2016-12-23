package com.liyun.car.report.test;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.service.ReportInfoService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring/spring-base.xml" })
public class ReportTest {

	@Autowired
	private ReportInfoService reportInfoService;

	@Test
	public void test1(){
		ReportInfo info  = reportInfoService.getEntityById(25);
		try {
			reportInfoService.saveReportExecResult(info,true);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
