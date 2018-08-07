package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.ParamStatusEnum;

/**
 * 报表内容
 * @author zhoufei
 *
 */

public class ReportDetail implements Serializable{

	private Integer id;
	//@JsonIgnore
	//private ReportInfo reportInfo; //报表ID
	private String content; //sql内容
	private BooleanEnum isValidate; //是否为验证脚本
	private BooleanEnum isExpect; //期望/非期望
	private String validValue;  //值
	private BooleanEnum isSub; //是否细分内容
	private BooleanEnum isViewer; //细分字段是不是拆分报表收件人
	private ParamStatusEnum status;
	
	private BooleanEnum isFieldTitle; //是否使用字段名称作为标题名称
	private String titleName; //标题名称
	private Date createTime;
	private ReportDataSource dataSource;
	
	@JsonIgnore
	private List<ReportField> reportFields;
	//@JsonIgnore
	//private ReportExcel reportExcel; //属于哪个sheet
	@JsonIgnore
	private ReportField reportField; //细分字段ID;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	/*public ReportInfo getReportInfo() {
		return reportInfo;
	}

	public void setReportInfo(ReportInfo reportInfo) {
		this.reportInfo = reportInfo;
	}*/

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public BooleanEnum getIsSub() {
		return isSub;
	}

	public void setIsSub(BooleanEnum isSub) {
		this.isSub = isSub;
	}

	public BooleanEnum getIsViewer() {
        return isViewer;
    }

    public void setIsViewer(BooleanEnum isViewer) {
        this.isViewer = isViewer;
    }

    public ReportField getReportField() {
		if(this.reportFields!=null && !this.reportFields.isEmpty()){
			for(ReportField field : this.reportFields){
				if(field.getIsSubParam() == BooleanEnum.YES){
					return field;
				}
			}
		}
		return reportField;
	}

	public void setReportField(ReportField reportField) {
		this.reportField = reportField;
	}

	public BooleanEnum getIsFieldTitle() {
		return isFieldTitle;
	}

	public void setIsFieldTitle(BooleanEnum isFieldTitle) {
		this.isFieldTitle = isFieldTitle;
	}

	public String getTitleName() {
		return titleName;
	}

	public void setTitleName(String titleName) {
		this.titleName = titleName;
	}

	public List<ReportField> getReportFields() {
		return reportFields;
	}

	public void setReportFields(List<ReportField> reportFields) {
		this.reportFields = reportFields;
	}

	/*public ReportExcel getReportExcel() {
		return reportExcel;
	}

	public void setReportExcel(ReportExcel reportExcel) {
		this.reportExcel = reportExcel;
	}*/

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public ReportDataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(ReportDataSource dataSource) {
		this.dataSource = dataSource;
	}

	public BooleanEnum getIsValidate() {
		return isValidate;
	}

	public void setIsValidate(BooleanEnum isValidate) {
		this.isValidate = isValidate;
	}

	public BooleanEnum getIsExpect() {
		return isExpect;
	}

	public void setIsExpect(BooleanEnum isExpect) {
		this.isExpect = isExpect;
	}

	public String getValidValue() {
		return validValue;
	}

	public void setValidValue(String validValue) {
		this.validValue = validValue;
	}

	public ParamStatusEnum getStatus() {
		return status;
	}

	public void setStatus(ParamStatusEnum status) {
		this.status = status;
	}
	
	
}
