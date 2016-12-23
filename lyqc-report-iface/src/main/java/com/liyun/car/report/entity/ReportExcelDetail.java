package com.liyun.car.report.entity;

/**
 * excel脚本对应关系表
 * @author zhoufei
 *
 */
public class ReportExcelDetail {

	private Integer id;
	private ReportDetail reportDetail;
	private ReportExcel reportExcel;
	private Integer seq;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public ReportDetail getReportDetail() {
		return reportDetail;
	}
	public void setReportDetail(ReportDetail reportDetail) {
		this.reportDetail = reportDetail;
	}
	public ReportExcel getReportExcel() {
		return reportExcel;
	}
	public void setReportExcel(ReportExcel reportExcel) {
		this.reportExcel = reportExcel;
	}
	public Integer getSeq() {
		return seq;
	}
	public void setSeq(Integer seq) {
		this.seq = seq;
	}
	
	
}
