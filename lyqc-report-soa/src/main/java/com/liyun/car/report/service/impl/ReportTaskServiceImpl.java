package com.liyun.car.report.service.impl;

import java.util.List;

import org.hibernate.criterion.Order;
import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.hibernate.hibernate.HibernateSupport;
import com.liyun.car.report.entity.ReportTask;
import com.liyun.car.report.service.ReportTaskService;

@Service
public class ReportTaskServiceImpl extends HibernateSupport implements ReportTaskService {

	@Override
	public Page<ReportTask> pageList(ReportTask task, int pn) {
		if(task!=null){
			return getSession().getCriteria(ReportTask.class).addRestriction(task, OperMode.EQ, "reportInfo.reportName").addOrder(Order.desc("execTime")).getResultList(pn);
		} else {
			return getSession().getCriteria(ReportTask.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportTask> getEntitysByParams(ReportTask task, String... params) {
		if(task!=null){
			return getSession().getCriteria(ReportTask.class).addRestriction(task, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportTask.class).getResultList();
		}
	}

	@Override
	public ReportTask getEntityById(int  id) {
		return getSession().find(ReportTask.class, id);
	}

}
