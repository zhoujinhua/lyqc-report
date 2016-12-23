package com.liyun.car.report.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.hibernate.hibernate.HibernateSupport;
import com.liyun.car.report.entity.ReportSender;
import com.liyun.car.report.service.ReportSenderService;

@Service
public class ReportSenderServiceImpl extends HibernateSupport implements ReportSenderService {

	@Override
	public Page<ReportSender> pageList(ReportSender sender, int pn) {
		if(sender!=null){
			return getSession().getCriteria(ReportSender.class).addRestriction(sender, OperMode.EQ, "").getResultList(pn);
		} else {
			return getSession().getCriteria(ReportSender.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportSender> getEntitysByParams(ReportSender sender, String... params) {
		if(sender!=null){
			return getSession().getCriteria(ReportSender.class).addRestriction(sender, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportSender.class).getResultList();
		}
	}

	@Override
	public void updateEntity(ReportSender sender, String... params) {
		getSession().update(sender, params);
	}

	@Override
	public void saveEntity(ReportSender sender) {
		getSession().persist(sender);
	}

	@Override
	public List<ReportSender> getEntitysByIds(int... ids) {
		return getSession().findEntitys(ReportSender.class, ids);
	}

	@Override
	public ReportSender getEntityById(int  id) {
		return getSession().find(ReportSender.class, id);
	}

}
