package com.liyun.car.report.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.liyun.car.common.entity.Page;
import com.liyun.car.common.enums.OperMode;
import com.liyun.car.hibernate.service.impl.HibernateServiceSupport;
import com.liyun.car.report.entity.ReportExcel;
import com.liyun.car.report.entity.ReportExcelDetail;
import com.liyun.car.report.service.ReportExcelService;

@Service
public class ReportExcelServiceImpl extends HibernateServiceSupport implements ReportExcelService {

	@Override
	public Page<ReportExcel> pageList(ReportExcel excel, int pn) {
		if(excel!=null){
			return getSession().getCriteria(ReportExcel.class).addRestriction(excel, OperMode.EQ, "reportInfo.id","sheetName","id").getResultList(pn);
		} else {
			return getSession().getCriteria(ReportExcel.class).getResultList(pn);
		}
	}

	@Override
	public List<ReportExcel> getEntitysByParams(ReportExcel excel, String... params) {
		if(excel!=null){
			return getSession().getCriteria(ReportExcel.class).addRestriction(excel, OperMode.EQ, params).getResultList();
		} else {
			return getSession().getCriteria(ReportExcel.class).getResultList();
		}
	}

	@Override
	public void updateEntity(ReportExcel excel, String... params) {
		getSession().update(excel, params);
	}

	@Override
	public void saveEntity(ReportExcel excel) {
		getSession().persist(excel);
	}

	@Override
	public List<ReportExcel> getEntitysByIds(int... ids) {
		return getSession().findEntitys(ReportExcel.class, ids);
	}

	@Override
	public ReportExcel getEntityById(int  id) {
		return getSession().find(ReportExcel.class, id);
	}

	@Override
	public void updateReportExcelContent(ReportExcel excel) {
		ReportExcel reportExcel = getSession().find(ReportExcel.class, excel.getId());
		if(reportExcel.getReportExcelDetails()!=null){
			reportExcel.getReportExcelDetails().clear();
		} else {
			reportExcel.setReportExcelDetails(new ArrayList<ReportExcelDetail>());
		}
		
		for(ReportExcelDetail excelDetail : excel.getReportExcelDetails()){
			excelDetail.setReportExcel(excel);
			reportExcel.getReportExcelDetails().add(excelDetail);
		}
	}

	@Override
	public void deleteExcel(ReportExcel excel) {
		excel = getSession().find(ReportExcel.class, excel.getId());
		excel.getReportInfo().getReportExcels().remove(excel);
		excel.setReportInfo(null);
		excel.getReportExcelDetails().clear();
		
		getSession().remove(excel);
	}

}
