package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 导出excel格式
 * @author zhoufei
 *
 */
public class ReportExcel implements Serializable{

	private Integer id;
	@JsonIgnore
	private ReportInfo reportInfo;
	private String sheetName;
	private Date createTime;
	
	//private List<ReportDetail> reportDetails;
	@JsonIgnore
	private List<ReportExcelDetail> reportExcelDetails;

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

	public String getSheetName() {
		return sheetName;
	}

	public void setSheetName(String sheetName) {
		this.sheetName = sheetName;
	}

	/*public List<ReportDetail> getReportDetails() {
		return reportDetails;
	}

	public void setReportDetails(List<ReportDetail> reportDetails) {
		this.reportDetails = reportDetails;
	}*/
	

	public Date getCreateTime() {
		return createTime;
	}

	public List<ReportExcelDetail> getReportExcelDetails() {
		return reportExcelDetails;
	}

	public void setReportExcelDetails(List<ReportExcelDetail> reportExcelDetails) {
		this.reportExcelDetails = reportExcelDetails;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
}
