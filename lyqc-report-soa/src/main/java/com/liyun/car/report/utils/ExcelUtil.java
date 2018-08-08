package com.liyun.car.report.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtil {

    public static void main(String[] args) throws IOException {
        readLine(new File("H://opt/test.xlsx"), 10);
    }
    
    
    public static List<Map<String, String>> readLine(File file, Integer limit) throws IOException {
        FileInputStream is = new FileInputStream(file);
        List<Map<String, String>> list = readLine(new FileInputStream(file), file.getName(), limit);
        is.close();
        
        return list;
    }
    
    public static List<Map<String, String>> readLine(InputStream inputStream, String fileName, Integer limit) {
        Row row = null;
        String cellData = null;
        Workbook wb = readExcel(inputStream, fileName);
        Sheet sheet = wb.getSheetAt(0);
        List<String> titleList = new ArrayList<>();
        List<Map<String, String>> list = new ArrayList<Map<String, String>>();
        // 获取最大行数
        int rownum = sheet.getPhysicalNumberOfRows();
        if (limit != null) {
            rownum = limit;
        }

        // 获取第一行
        row = sheet.getRow(0);
        if(row != null) {
            // 获取最大列数
            int colnum = row.getPhysicalNumberOfCells();
            for (int j = 0; j < colnum; j++) {
                cellData = (String) getCellFormatValue(row.getCell(j));
                titleList.add(cellData);
            }
            for (int i = 1; i < rownum; i++) {
                Map<String, String> map = new LinkedHashMap<String, String>();
                row = sheet.getRow(i);
                if (row != null) {
                    colnum = row.getPhysicalNumberOfCells();
                    for (int j = 0; j < colnum; j++) {
                        cellData = (String) getCellFormatValue(row.getCell(j));
                        map.put(titleList.get(j), cellData);
                    }
                } else {
                    break;
                }
                list.add(map);
            }
        }
        return list;
    }

    // 读取excel
    public static Workbook readExcel(InputStream is, String fileName) {
        Workbook wb = null;
        try {
            if (fileName.contains(".xlsx")) {
                wb = new XSSFWorkbook(is);
            } else {
                wb = new HSSFWorkbook(is);
            }
            return wb;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return wb;
    }

    public static Object getCellFormatValue(Cell cell) {
        Object cellValue = null;
        if (cell != null) {
            // 判断cell类型
            switch (cell.getCellType()) {
            case Cell.CELL_TYPE_NUMERIC: {
                cellValue = String.valueOf(cell.getNumericCellValue());
                break;
            }
            case Cell.CELL_TYPE_FORMULA: {
                // 判断cell是否为日期格式
                if (DateUtil.isCellDateFormatted(cell)) {
                    // 转换为日期格式YYYY-mm-dd
                    cellValue = cell.getDateCellValue();
                } else {
                    // 数字
                    cellValue = String.valueOf(cell.getNumericCellValue());
                }
                break;
            }
            case Cell.CELL_TYPE_STRING: {
                cellValue = cell.getRichStringCellValue().getString();
                break;
            }
            default:
                cellValue = "";
            }
        } else {
            cellValue = "";
        }
        return cellValue;
    }

}