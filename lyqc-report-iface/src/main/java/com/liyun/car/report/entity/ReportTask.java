package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.liyun.car.common.enums.BooleanEnum;

/**
 * 执行任务日志
 * @author zhoufei
 *
 */
public class ReportTask implements Serializable{

	private Integer id;
	@JsonIgnore
	private ReportInfo reportInfo;
	private Date execTime;
	@JsonIgnore
	private String htmlContent;
	private String filePath;
	private Integer fileSize;
	private ReportSender reportSender;
	
	private String mailAddress = "";
	private String mailCcAddress = "";
	private BooleanEnum isMailSuccess;
	private String mailMessage;
	private BooleanEnum isSuccess;
	private String message;
	private String reportName;
	private String fileName;
	
	
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
	public Date getExecTime() {
		return execTime;
	}
	public void setExecTime(Date execTime) {
		this.execTime = execTime;
	}
	public BooleanEnum getIsSuccess() {
		return isSuccess;
	}
	public void setIsSuccess(BooleanEnum isSuccess) {
		this.isSuccess = isSuccess;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getHtmlContent() {
		return htmlContent;
	}
	public void setHtmlContent(String htmlContent) {
		this.htmlContent = htmlContent;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getMailAddress() {
		return mailAddress;
	}
	public void setMailAddress(String mailAddress) {
		this.mailAddress = mailAddress;
	}
	public String getMailCcAddress() {
		return mailCcAddress;
	}
	public void setMailCcAddress(String mailCcAddress) {
		this.mailCcAddress = mailCcAddress;
	}
	public BooleanEnum getIsMailSuccess() {
		return isMailSuccess;
	}
	public void setIsMailSuccess(BooleanEnum isMailSuccess) {
		this.isMailSuccess = isMailSuccess;
	}
	public String getMailMessage() {
		return mailMessage;
	}
	public void setMailMessage(String mailMessage) {
		this.mailMessage = mailMessage;
	}
	public String getReportName() {
		if(this.reportInfo!=null){
			return this.reportInfo.getReportName();
		}
		return reportName;
	}
	public void setReportName(String reportName) {
		this.reportName = reportName;
	}
	public Integer getFileSize() {
		return fileSize;
	}
	public void setFileSize(Integer fileSize) {
		this.fileSize = fileSize;
	}
	public ReportSender getReportSender() {
		return reportSender;
	}
	public void setReportSender(ReportSender reportSender) {
		this.reportSender = reportSender;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
}
