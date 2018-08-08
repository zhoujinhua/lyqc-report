package com.liyun.car.report.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.liyun.car.report.dto.ImportDataDto;
import com.liyun.car.report.entity.ReportDataSource;
import com.liyun.car.report.enums.DataSourceTypeEnum;
import com.liyun.car.report.service.ReportDataSourceService;
import com.liyun.car.report.service.ReportIntoDbService;
import com.liyun.car.report.utils.DBUtil;
import com.liyun.car.report.utils.ExcelUtil;

@Service
public class ReportIntoDbServiceImpl implements ReportIntoDbService {

    @Autowired
    ReportDataSourceService reportDataSourceService;
    
    @Override
    public List<Map<String, String>> upload(MultipartFile file, ImportDataDto importDataDto) {
        ReportDataSource dataSource = reportDataSourceService.getEntityById(importDataDto.getDbId());
        
        String driverName = "";
        if(dataSource.getType() == DataSourceTypeEnum.MYSQL){
            driverName = "com.mysql.jdbc.Driver";
        } else {
            driverName = "oracle.jdbc.driver.OracleDriver";
        }
        
        Map<String, String> commentMap = null;
        List<Map<String, String>> list = null;
        try {
            commentMap = new DBUtil(driverName, dataSource.getJdbcUrl(),dataSource.getUsername(),dataSource.getPassword()).getTableCommentMap(importDataDto.getTableName());
        } catch (Exception e) {
            throw new RuntimeException("数据库连接失败.");
        }
        
        if(commentMap == null || commentMap.isEmpty()) {
            throw new RuntimeException("数据库表不存在.");
        }
        
        InputStream is = null;
        OutputStream os = null;
        File outputFile = new File(importDataDto.getFilePath());
        try {
            is = file.getInputStream();
            os = new FileOutputStream(outputFile);
            IOUtils.copy(is, os);
            list = ExcelUtil.readLine(new FileInputStream(outputFile), file.getOriginalFilename(), 11);
        } catch (IOException e) {
            throw new RuntimeException("文件读取失败.", e);
        } finally {
            try {
                is.close();
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        
        for(Map<String, String> map : list) {
            Iterator<String> iter = map.keySet().iterator();
            while(iter.hasNext()) {
                String title = iter.next();
                if(!commentMap.containsKey(title)) {
                    map.put(title, null);
                }
            }
        }
        return list;
    }

    @Override
    public void intoDb(ImportDataDto importDataDto) {
        File file = new File(importDataDto.getFilePath());
        if(!file.exists()) {
            throw new RuntimeException("文件不存在.");
        }
        
        ReportDataSource dataSource = reportDataSourceService.getEntityById(importDataDto.getDbId());
        String driverName = "";
        if(dataSource.getType() == DataSourceTypeEnum.MYSQL){
            driverName = "com.mysql.jdbc.Driver";
        } else {
            driverName = "oracle.jdbc.driver.OracleDriver";
        }
        
        Map<String, String> commentMap = null;
        List<Map<String, String>> list = null;
        try {
            commentMap = new DBUtil(driverName, dataSource.getJdbcUrl(),dataSource.getUsername(),dataSource.getPassword()).getTableCommentMap(importDataDto.getTableName());
        } catch (Exception e) {
            throw new RuntimeException("数据库连接失败.");
        }
        
        if(commentMap == null || commentMap.isEmpty()) {
            throw new RuntimeException("数据库表不存在.");
        }
        
        try {
            list = ExcelUtil.readLine(file, null);
        } catch (IOException e) {
            throw new RuntimeException("文件读取失败.", e);
        }
        
        List<String> sqlList = new ArrayList<>();
        for(Map<String, String> map : list) {
            StringBuilder prefixSb = new StringBuilder("INSERT INTO " + importDataDto.getTableName() + "(");
            StringBuilder tailSb = new StringBuilder(" VALUES (");
            Iterator<String> iter = map.keySet().iterator();
            while(iter.hasNext()) {
                String title = iter.next();
                if(commentMap.containsKey(title)) {
                    prefixSb.append(commentMap.get(title)).append(",");
                    tailSb.append("'").append(map.get(title)).append("',");
                }
            }
            String prefix = prefixSb.substring(0, prefixSb.length() - 1) + ")";
            String tail = tailSb.substring(0, tailSb.length() - 1) + ")";
            
            sqlList.add(prefix + tail);
        }
        
        new DBUtil(driverName, dataSource.getJdbcUrl(),dataSource.getUsername(),dataSource.getPassword()).batchExecute(sqlList);
    }

}
