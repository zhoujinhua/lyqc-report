package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.report.enums.MailTypeEnum;

/**
 * 报表主表
 * @author zhoufei
 *
 */
public class ReportInfo implements Serializable{

	private Integer id;
	private String reportName;
	private ParamStatusEnum status; //启用/停用
	private BooleanEnum isSendMail; //是否发送邮件
	private BooleanEnum isValidate; //发送前是否验证
	private BooleanEnum isContent; //是否生成邮件正文
	@JsonIgnore
	private ReportDetail reportDetail; //验证脚本
	private BooleanEnum isGenExcel; //是否发送excel附件
	private String excelName; //excel名称
	private String sendTime; //发送计划
	private Date createTime; //创建时间
	
	@JsonIgnore
	private ReportSender reportSender;
	
	@JsonIgnore
	private List<ReportInfoDetail> reportInfoDetails;
	/*@JsonIgnore
	private List<ReportDetail> reportDetails;*/
	@JsonIgnore
	private List<ReportExcel> reportExcels;
	@JsonIgnore
	private List<ReportViewer> reportViewers;
	
	//辅助字段
	@JsonIgnore
	private String mailViewers;
	@JsonIgnore
	private String mailCcViewers;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getReportName() {
		return reportName;
	}
	public void setReportName(String reportName) {
		this.reportName = reportName;
	}
	public ParamStatusEnum getStatus() {
		return status;
	}
	public void setStatus(ParamStatusEnum status) {
		this.status = status;
	}
	public BooleanEnum getIsContent() {
		return isContent;
	}
	public void setIsContent(BooleanEnum isContent) {
		this.isContent = isContent;
	}
	public BooleanEnum getIsGenExcel() {
		return isGenExcel;
	}
	public void setIsGenExcel(BooleanEnum isGenExcel) {
		this.isGenExcel = isGenExcel;
	}
	public String getExcelName() {
		return excelName;
	}
	public void setExcelName(String excelName) {
		this.excelName = excelName;
	}
	public String getSendTime() {
		return sendTime;
	}
	public void setSendTime(String sendTime) {
		this.sendTime = sendTime;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	/*public List<ReportDetail> getReportDetails() {
		return reportDetails;
	}
	public void setReportDetails(List<ReportDetail> reportDetails) {
		this.reportDetails = reportDetails;
	}*/
	
	public List<ReportExcel> getReportExcels() {
		return reportExcels;
	}
	public List<ReportInfoDetail> getReportInfoDetails() {
		return reportInfoDetails;
	}
	public void setReportInfoDetails(List<ReportInfoDetail> reportInfoDetails) {
		this.reportInfoDetails = reportInfoDetails;
	}
	public void setReportExcels(List<ReportExcel> reportExcels) {
		this.reportExcels = reportExcels;
	}
	public BooleanEnum getIsSendMail() {
		return isSendMail;
	}
	public void setIsSendMail(BooleanEnum isSendMail) {
		this.isSendMail = isSendMail;
	}
	public ReportSender getReportSender() {
		return reportSender;
	}
	public void setReportSender(ReportSender reportSender) {
		this.reportSender = reportSender;
	}
	public List<ReportViewer> getReportViewers() {
		return reportViewers;
	}
	public void setReportViewers(List<ReportViewer> reportViewers) {
		this.reportViewers = reportViewers;
	}
	public String getMailViewers() {
		if(this.reportViewers!=null && !this.reportViewers.isEmpty()){
			String viewers = "";
			for(ReportViewer viewer : this.reportViewers){
				if(viewer.getMailType() == MailTypeEnum.TO)
				viewers += viewer.getMailViewer().getId() + ",";
			}
			return viewers;
		}
		return mailViewers;
	}
	public String getMailCcViewers() {
		if(this.reportViewers!=null && !this.reportViewers.isEmpty()){
			String viewers = "";
			for(ReportViewer viewer : this.reportViewers){
				if(viewer.getMailType() == MailTypeEnum.CC)
				viewers += viewer.getMailViewer().getId() + ",";
			}
			return viewers;
		}
		return mailCcViewers;
	}
	public void setMailViewers(String mailViewers) {
		this.mailViewers = mailViewers;
	}
	public void setMailCcViewers(String mailCcViewers) {
		this.mailCcViewers = mailCcViewers;
	}
	public BooleanEnum getIsValidate() {
		return isValidate;
	}
	public void setIsValidate(BooleanEnum isValidate) {
		this.isValidate = isValidate;
	}
	public ReportDetail getReportDetail() {
		return reportDetail;
	}
	public void setReportDetail(ReportDetail reportDetail) {
		this.reportDetail = reportDetail;
	}
	
}
