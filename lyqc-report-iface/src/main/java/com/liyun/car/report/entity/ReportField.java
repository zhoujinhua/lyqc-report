package com.liyun.car.report.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.liyun.car.common.enums.BooleanEnum;

/**
 * 内容涉及字段
 * @author zhoufei
 *
 */

public class ReportField implements Serializable{

	private Integer id;
	@JsonIgnore
	private ReportDetail reportDetail; //sqlID
	private String fieldName; //字段属性
	private String declaredName; //重命名属性名称
	private BooleanEnum isTitle; //是否作为标题
	private BooleanEnum isSubParam; //是否为细分字段
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
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public String getDeclaredName() {
		return declaredName;
	}
	public void setDeclaredName(String declaredName) {
		this.declaredName = declaredName;
	}
	public BooleanEnum getIsTitle() {
		return isTitle;
	}
	public void setIsTitle(BooleanEnum isTitle) {
		this.isTitle = isTitle;
	}
	public BooleanEnum getIsSubParam() {
		return isSubParam;
	}
	public void setIsSubParam(BooleanEnum isSubParam) {
		this.isSubParam = isSubParam;
	}
	public Integer getSeq() {
		return seq;
	}
	public void setSeq(Integer seq) {
		this.seq = seq;
	}
	
	
}
