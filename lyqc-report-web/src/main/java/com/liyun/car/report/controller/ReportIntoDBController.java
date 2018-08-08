package com.liyun.car.report.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.liyun.car.common.utils.PropertyUtil;
import com.liyun.car.report.dto.ImportDataDto;
import com.liyun.car.report.dto.MessageDto;
import com.liyun.car.report.service.ReportDataSourceService;
import com.liyun.car.report.service.ReportIntoDbService;
import com.liyun.car.report.utils.MessageUtil;

@Controller
@RequestMapping("upload")
public class ReportIntoDBController {
    
    @Autowired
    ReportIntoDbService reportIntoDbService;
    
    @Autowired
    ReportDataSourceService reportDataSourceService;
    
    @RequestMapping("test")
    public String test() {
        return "1";
    }
    
    @ResponseBody
    @RequestMapping("upload")
    public MessageDto upload(@RequestParam("file")MultipartFile file, ImportDataDto importDataDto) {
        Object obj = null;
        try {
            String filePath = PropertyUtil.getPropertyValue("EXCEL_FILE_IN_PATH") + System.currentTimeMillis() + file.getOriginalFilename();
            importDataDto.setFilePath(filePath);
            obj = reportIntoDbService.upload(file, importDataDto);
        } catch(RuntimeException e) {
            return MessageUtil.buildDto("99", e.getMessage());
        }
        Map<String, Object> map = new HashMap<>();
        map.put("data", obj);
        map.put("importData", importDataDto);
        return MessageUtil.buildDto("00", "请求成功!", map);
    }
    
    
    @ResponseBody
    @RequestMapping("intoDb")
    public MessageDto intoDb(ImportDataDto importDataDto) {
        try {
            reportIntoDbService.intoDb(importDataDto);
        } catch(RuntimeException e) {
            return MessageUtil.buildDto("99", e.getMessage());
        }
        return MessageUtil.buildDto("00", "请求成功!");
    }
}
