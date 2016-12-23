import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.report.entity.ReportInfo;
import com.liyun.car.report.service.ReportInfoService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring/spring-base.xml" })
public class ReportTest {

	@Autowired
	private ReportInfoService reportInfoService;

	@Test
	public void test1(){
		reportInfoService.getEntitysByParams(null, "");
		System.out.println(121111111);
	}
	
	public void test2(){
		ReportInfo info = new ReportInfo();
		info.setStatus(ParamStatusEnum.ON);
		info.setIsSendMail(BooleanEnum.YES);

		// 可执行的任务列表
		List<ReportInfo> list = reportInfoService.getEntitysByParams(info, "status", "isSendMail");

		/*for (ReportInfo reportInfo : list) {
			try {
				QuartzUtil.mergeSchedule(reportInfo);
			} catch (SchedulerException e) {
				e.printStackTrace();
			}
		}*/
	}
}
