package com.liyun.car.report.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.hibernate.hibernate.HibernateSupport;
import com.liyun.car.report.entity.ReportDataSource;
import com.liyun.car.report.service.ReportDataSourceService;

@Service
public class ReportDataSourceServiceImpl extends HibernateSupport implements ReportDataSourceService {

	@Override
	public Page<ReportDataSource> pageList(ReportDataSource dataSource, int pn) {
		if(dataSource!=null){
			return getSession().getCriteria(ReportDataSource.class).addRestriction(dataSource, OperMode.EQ, "dataSourceName").getResultList(pn);
		} else {
			return getSession().getCriteria(ReportDataSource.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportDataSource> getEntitysByParams(ReportDataSource dataSource, String... params) {
		if(dataSource!=null){
			return getSession().getCriteria(ReportDataSource.class).addRestriction(dataSource, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportDataSource.class).getResultList();
		}
	}

	@Override
	public void updateEntity(ReportDataSource dataSource, String... params) {
		getSession().update(dataSource, params);
	}

	@Override
	public void saveEntity(ReportDataSource dataSource) {
		getSession().persist(dataSource);
	}

	@Override
	public List<ReportDataSource> getEntitysByIds(int... ids) {
		return getSession().findEntitys(ReportDataSource.class, ids);
	}

	@Override
	public ReportDataSource getEntityById(int  id) {
		return getSession().find(ReportDataSource.class, id);
	}

}
