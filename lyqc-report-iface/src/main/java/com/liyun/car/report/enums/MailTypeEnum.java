package com.liyun.car.report.enums;

import com.liyun.car.common.service.Enum;

public enum MailTypeEnum implements Enum{
	
	TO("1","主送"),
	CC("2","抄送");
	
	private String name;
	private String value;
	
	private MailTypeEnum(String value,String name){
		this.value = value;
		this.name = name;
	}
	
	@Override
	public String getName() {
		return this.name;
	}

	@Override
	public String getValue() {
		return this.value;
	}

}
