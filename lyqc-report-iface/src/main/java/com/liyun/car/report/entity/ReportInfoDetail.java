package com.liyun.car.report.entity;

/**
 * 报表和脚本对应关系表
 * @author zhoufei
 *
 */
public class ReportInfoDetail {

	private Integer id;
	private ReportInfo reportInfo;
	private ReportDetail reportDetail;
	private Integer seq;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public ReportInfo getReportInfo() {
		return reportInfo;
	}
	public void setReportInfo(ReportInfo reportInfo) {
		this.reportInfo = reportInfo;
	}
	public ReportDetail getReportDetail() {
		return reportDetail;
	}
	public void setReportDetail(ReportDetail reportDetail) {
		this.reportDetail = reportDetail;
	}
	public Integer getSeq() {
		return seq;
	}
	public void setSeq(Integer seq) {
		this.seq = seq;
	}
	
}
