package com.liyun.car.report.utils;

import com.liyun.car.report.dto.MessageDto;

/**
 * 组装返回报文体
 * @author zhoufei
 *
 */
public class MessageUtil {


	public static MessageDto buildDto(String code, String message){
		MessageDto result = new MessageDto();
		result.setCode(code);
		result.setMessage(message);
		return result;
	}
	
	public static MessageDto buildDto(String code, String message, Object data){
		MessageDto result = new MessageDto();
		result.setCode(code);
		result.setMessage(message);
		result.setData(data);
		return result;
	}
	
}
