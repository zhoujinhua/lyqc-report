package com.liyun.car.report.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.hibernate.hibernate.HibernateSupport;
import com.liyun.car.report.entity.ReportMailViewer;
import com.liyun.car.report.service.ReportMailViewerService;

@Service
public class ReportMailViewerServiceImpl extends HibernateSupport implements ReportMailViewerService {

	@Override
	public Page<ReportMailViewer> pageList(ReportMailViewer viewer, int pn) {
		if(viewer!=null){
			return getSession().getCriteria(ReportMailViewer.class).addRestriction(viewer, OperMode.EQ, "").getResultList(pn);
		} else {
			return getSession().getCriteria(ReportMailViewer.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportMailViewer> getEntitysByParams(ReportMailViewer viewer, String... params) {
		if(viewer!=null){
			return getSession().getCriteria(ReportMailViewer.class).addRestriction(viewer, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportMailViewer.class).getResultList();
		}
	}

	@Override
	public void updateEntity(ReportMailViewer viewer, String... params) {
		getSession().update(viewer, params);
	}

	@Override
	public void saveEntity(ReportMailViewer viewer) {
		getSession().persist(viewer);
	}

	@Override
	public List<ReportMailViewer> getEntitysByIds(int... ids) {
		return getSession().findEntitys(ReportMailViewer.class, ids);
	}

	@Override
	public ReportMailViewer getEntityById(int  id) {
		return getSession().find(ReportMailViewer.class, id);
	}

}
