package com.liyun.car.report.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.mail.internet.MimeMessage;

import com.liyun.car.mail.config.MailSender;
import com.liyun.car.mail.config.MailSenderConfig;
import com.liyun.car.mail.entity.Attachment;

public class MailSendUtil {

	private static final String SMTP_MAIL_HOST = "smtp.exmail.qq.com";
	private String subject;
	private String content;
	private List<String> mailAddress;
	private List<String> mailCCAddress;
	private List<Attachment> attachments;
	private String userName;
	private String password;

	public MailSendUtil(String subject, String content, List<String> mailAddress, List<String> mailCCAddress,
			List<Attachment> attachments, String userName, String password) {
		super();
		this.subject = subject;
		this.content = content;
		this.mailAddress = mailAddress;
		this.mailCCAddress = mailCCAddress;
		this.attachments = attachments;
		this.userName = userName;
		this.password = password;
	}

	public MailSendUtil() {
		super();
	}

	public void send() throws Exception {
		MailSenderConfig c = new MailSenderConfig(SMTP_MAIL_HOST, subject, content, userName);
		c.setUsername(userName);
		c.setPassword(password);
		if(mailAddress!=null && !mailAddress.isEmpty()){
			for(String addr : mailAddress){
				c.addToMail(addr);
			}
		}
		if(mailCCAddress!=null && !mailCCAddress.isEmpty()){
			for(String addr : mailCCAddress){
				c.addCcMail(addr);
			}
		}
		if(attachments!=null && !attachments.isEmpty()){
			for(Attachment attachment : attachments){
				c.addAttachment(attachment);
			}
		}
        MailSender ms = new MailSender(c);
        MimeMessage message = ms.getMessage();
        ms.setMessage(message);
        
        ms.send();
        System.out.println("sent...");
	}

	public static void main(String[] args) throws Exception {
		List<String> list = new ArrayList<>();
		list.add("fei.zhou01@liyunqiche.com");
		
		List<Attachment> attachments
		 = new ArrayList<>();
		
		attachments.add(new Attachment(new File("F://test.xlsx")));
		new MailSendUtil("a", "b", list, null, attachments, "noreply@liyunqiche.com", "Password2").send();
	}
	
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<String> getMailAddress() {
		return mailAddress;
	}

	public void setMailAddress(List<String> mailAddress) {
		this.mailAddress = mailAddress;
	}

	public List<String> getMailCCAddress() {
		return mailCCAddress;
	}

	public void setMailCCAddress(List<String> mailCCAddress) {
		this.mailCCAddress = mailCCAddress;
	}

	public List<Attachment> getAttachments() {
		return attachments;
	}

	public void setAttachments(List<Attachment> attachments) {
		this.attachments = attachments;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
