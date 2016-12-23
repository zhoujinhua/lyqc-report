package com.liyun.car.report.entity;

import java.io.Serializable;

import com.liyun.car.report.enums.MailTypeEnum;

public class ReportViewer implements Serializable{

	private Integer id;
	private ReportInfo reportInfo;
	private ReportMailViewer mailViewer;
	private MailTypeEnum mailType; //主送、抄送
	
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
	public ReportMailViewer getMailViewer() {
		return mailViewer;
	}
	public void setMailViewer(ReportMailViewer mailViewer) {
		this.mailViewer = mailViewer;
	}
	public MailTypeEnum getMailType() {
		return mailType;
	}
	public void setMailType(MailTypeEnum mailType) {
		this.mailType = mailType;
	}
	
	
}
