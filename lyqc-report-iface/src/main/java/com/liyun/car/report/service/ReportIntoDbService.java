package com.liyun.car.report.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.liyun.car.report.dto.ImportDataDto;

public interface ReportIntoDbService {

    /**
     * 导入
     * @param file
     * @param importDataDto
     * @return 
     */
    List<Map<String, String>> upload(MultipartFile file, ImportDataDto importDataDto);

    /**
     * 入库
     * @param importDataDto
     * @return
     */
    void intoDb(ImportDataDto importDataDto);

}
