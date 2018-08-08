package com.liyun.car.report.dto;

import java.io.Serializable;

public class ImportDataDto implements Serializable{

    /**
     * 数据导入
     */
    private static final long serialVersionUID = 2173520535180657203L;

    /**
     * 库ID
     */
    private Integer dbId;
    
    /**
     * 表名
     */
    private String tableName;
    
    /**
     * 文件路径
     */
    private String filePath;

    public Integer getDbId() {
        return dbId;
    }

    public void setDbId(Integer dbId) {
        this.dbId = dbId;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
    
}
