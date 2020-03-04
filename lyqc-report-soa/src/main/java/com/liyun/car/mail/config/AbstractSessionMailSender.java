package com.liyun.car.mail.config;
import java.util.Properties;

import javax.mail.Session;

import com.liyun.car.mail.entity.SimpleAuthenticator;

public abstract class AbstractSessionMailSender {
    
    protected Session session;
    
    public final static String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
    
    /**
     * 初始化Session
     * @return
     */
    public static Session initSession(MailSenderConfig c) {
        Properties props = new Properties();
        if (c.getSMTPMailHost() != null && c.getSMTPMailHost().length() > 0) {
            props.put("mail.smtp.host", c.getSMTPMailHost());
        }
        
        props.put("mail.smtp.port", "465");
        props.put("mail.smtp.socketFactory.class", SSL_FACTORY); // 使用JSSE的SSL
        props.put("mail.smtp.socketFactory.fallback", "false"); // 只处理SSL的连接,对于非SSL的连接不做处理
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.ssl.enable", true);
        if (c.getUsername() != null && c.getUsername().length() > 0 && 
                c.getPassword() != null && c.getPassword().length() > 0) {
            props.put("mail.smtp.auth", "true");
            return Session.getInstance(props, new SimpleAuthenticator(c.getUsername(), c.getPassword()));
        } else {
            props.put("mail.smtp.auth", "false");
            return Session.getInstance(props);
        }
    }

    /**
     * 暴露Getter、Setter提供Session的可设置性，以支持批量发送邮件/发送多次邮件时，可缓存Session
     * @return
     */
    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }
    
}