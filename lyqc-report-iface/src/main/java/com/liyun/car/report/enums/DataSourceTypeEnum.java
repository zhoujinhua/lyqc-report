package com.liyun.car.report.enums;

import com.liyun.car.common.service.Enum;

public enum DataSourceTypeEnum implements Enum{
	
	NULL("--",""),
	MYSQL("1","MYSQL"),
	ORACLE("2","ORACLE");
	
	private String name;
	private String value;
	
	private DataSourceTypeEnum(String value,String name){
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
