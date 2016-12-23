package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;

import com.liyun.car.common.enums.BooleanEnum;
import com.liyun.car.common.enums.ParamStatusEnum;

/**
 * 发送者
 * @author zhoufei
 *
 */
public class ReportSender implements Serializable{

	private Integer id;
	private String userName;
	private String email;
	private String password;
	private BooleanEnum isDefault;
	private Date createTime;
	private ParamStatusEnum status;
	private String remark;
	
	
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public BooleanEnum getIsDefault() {
		return isDefault;
	}
	public void setIsDefault(BooleanEnum isDefault) {
		this.isDefault = isDefault;
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
