package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;

import com.liyun.car.common.enums.ParamStatusEnum;

/**
 * 查看者
 * @author zhoufei
 *
 */
public class ReportMailViewer implements Serializable{

	private Integer id;
	private String userName;
	private String email;
	private ParamStatusEnum status;
	private Date createTime;
	private String remark;
	
	
	public ReportMailViewer(Integer id) {
		super();
		this.id = id;
	}
	public ReportMailViewer() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public ParamStatusEnum getStatus() {
		return status;
	}
	public void setStatus(ParamStatusEnum status) {
		this.status = status;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}
