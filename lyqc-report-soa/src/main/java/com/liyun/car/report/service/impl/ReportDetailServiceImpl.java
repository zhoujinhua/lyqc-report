package com.liyun.car.report.service.impl;

import java.util.Date;
import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.criterion.Order;
import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.hibernate.hibernate.HibernateSupport;
import com.liyun.car.report.entity.ReportDetail;
import com.liyun.car.report.entity.ReportField;
import com.liyun.car.report.service.ReportDetailService;

@Service
public class ReportDetailServiceImpl extends HibernateSupport implements ReportDetailService {

	@Override
	public Page<ReportDetail> pageList(ReportDetail detail, int pn) {
		if(detail!=null){
			return getSession().getCriteria(ReportDetail.class).addRestriction(detail, OperMode.EQ, "status","titleName").addOrder(Order.desc("createTime")).getResultList(pn);
		} else {
			return getSession().getCriteria(ReportDetail.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportDetail> getEntitysByParams(ReportDetail detail, String... params) {
		if(detail!=null){
			return getSession().getCriteria(ReportDetail.class).addRestriction(detail, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportDetail.class).getResultList();
		}
	}

	@Override
	public void updateEntity(ReportDetail detail, String... params) {
		getSession().update(detail, params);
	}

	@Override
	public void saveEntity(ReportDetail detail) {
		getSession().persist(detail);
	}

	@Override
	public List<ReportDetail> getEntitysByIds(int... ids) {
		return (List<ReportDetail>) getSession().findEntitys(ReportDetail.class, ids);
	}

	@Override
	public ReportDetail getEntityById(int  id) {
		ReportDetail reportDetail = (ReportDetail) getSession().find(ReportDetail.class, id);
		Hibernate.initialize(reportDetail.getReportFields());
		return reportDetail;
	}

	@Override
	public void updateReportDetail(ReportDetail detail) {
		getSession().update(detail,"titleName","isSub","content","dataSource","isValidate","isExpect","validValue","status");
		ReportDetail reportDetail = getSession().find(ReportDetail.class, detail.getId());
		reportDetail.getReportFields().clear();
		
		if(detail.getReportFields()!=null && !detail.getReportFields().isEmpty()){
			int i = 0;
			for(ReportField field : detail.getReportFields()){
				if(detail.getIsSub() == BooleanEnum.YES && field.getFieldName().equals(detail.getReportField().getFieldName())){
					field.setIsSubParam(BooleanEnum.YES);
					field.setIsTitle(BooleanEnum.YES);
				}
				field.setSeq(i+1);
				i++;
				field.setReportDetail(detail);
				
				reportDetail.getReportFields().add(field);
			}
		}
	}

	@Override
	public void saveReportDetail(ReportDetail detail) {
		detail.setCreateTime(new Date());
		getSession().persist(detail);
		if(detail.getReportFields()!=null && !detail.getReportFields().isEmpty()){
			int i = 0;
			for(ReportField field : detail.getReportFields()){
				if(detail.getIsSub() == BooleanEnum.YES && field.getFieldName().equals(detail.getReportField().getFieldName())){
					field.setIsSubParam(BooleanEnum.YES);
					field.setIsTitle(BooleanEnum.YES);
				}
				field.setSeq(i+1);
				i++;
				field.setReportDetail(detail);
			}
		}
	}

	@Override
	public void deleteReportDetail(ReportDetail detail) {
		detail = getSession().find(ReportDetail.class, detail.getId());
		detail.getReportFields().clear();
		
		getSession().remove(detail);
	}

}
