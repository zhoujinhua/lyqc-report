package com.liyun.car.report.entity;

import java.io.Serializable;
import java.util.Date;

import com.liyun.car.common.enums.ParamStatusEnum;
import com.liyun.car.report.enums.DataSourceTypeEnum;

/**
 * 数据源
 * @author zhoufei
 *
 */
public class ReportDataSource implements Serializable{

	private Integer id;
	private String dataSourceName;
	private DataSourceTypeEnum type;
	private String jdbcUrl;
	private String username;
	private String password;
	private ParamStatusEnum status;
	private Date createTime;
	private String remark;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDataSourceName() {
		return dataSourceName;
	}
	public void setDataSourceName(String dataSourceName) {
		this.dataSourceName = dataSourceName;
	}
	public DataSourceTypeEnum getType() {
		return type;
	}
	public void setType(DataSourceTypeEnum type) {
		this.type = type;
	}
	public String getJdbcUrl() {
		return jdbcUrl;
	}
	public void setJdbcUrl(String jdbcUrl) {
		this.jdbcUrl = jdbcUrl;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public ParamStatusEnum getStatus() {
		return status;
	}
	public void setStatus(ParamStatusEnum status) {
		this.status = status;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
}
