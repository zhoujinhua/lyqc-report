package com.liyun.car.report.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class MessageDto implements Serializable{

	/**
	 * 接口返回内容
	 */
	private static final long serialVersionUID = 8475031290992534279L;
	/**
	 * 返回码
	 */
	private String code;
	/**
	 * 返回摘要
	 */
	@JsonIgnore
	private String summary;
	/**
	 * 返回内容
	 */
	private String message;
	/**
	 * 是否成功
	 */
	@JsonIgnore
	private String isSuccess;
	/**
	 * 报文体
	 */
	private Object data;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getIsSuccess() {
		return isSuccess;
	}
	public void setIsSuccess(String isSuccess) {
		this.isSuccess = isSuccess;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
	@Override
	public String toString() {
		return "MessageDto [code=" + code + ", summary=" + summary + ", message=" + message + ", isSuccess=" + isSuccess
				+ ", data=" + data + "]";
	}
	
}
