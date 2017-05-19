package com.liyun.car.report.utils;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import com.liyun.car.common.utils.DateUtil;

public class DBUtil {

	private String jdbcUrl;
	private String username;
	private String password;
	private String driverName;
	
	public DBUtil(String driverName, String jdbcUrl, String username, String password) {
		super();
		this.driverName = driverName;
		this.jdbcUrl = jdbcUrl;
		this.username = username;
		this.password = password;
	}

	public DBUtil() {
		super();
	}

	public Connection getConnection() throws SQLException, ClassNotFoundException {
		Class.forName(driverName);
		return DriverManager.getConnection(jdbcUrl,username,password);
	}


	public List<String> getTableColumns(String tname) {
		Connection conn = null;
		Statement statement = null;
		ResultSet rs = null;
		List<String> list = new ArrayList<String>();
		try {
			conn = getConnection();
			statement = conn.createStatement();
			DatabaseMetaData dbMetData = conn.getMetaData();
			rs = dbMetData.getColumns(null, "%", tname, "%");
			while (rs.next()) {
				list.add(rs.getString("COLUMN_NAME").toUpperCase());
				System.out.println(rs.getString("TYPE_NAME")); 
			}
		} catch (Exception e) {

		} finally {
			close(rs, statement, conn);
		}
		return list;
	}
	public Map<String,String> getTableColumnMap(String tname) throws Exception {
		Connection conn = null;
		Statement statement = null;
		Map<String,String> map = new TreeMap<String, String>();
		try {
			conn = getConnection();
			statement = conn.createStatement();
			DatabaseMetaData dbMetData = conn.getMetaData();
			ResultSet colRet = dbMetData.getColumns(null, "%", tname, "%");
			while (colRet.next()) {
				map.put(colRet.getString("COLUMN_NAME").toUpperCase(),colRet.getString("TYPE_NAME").toUpperCase());
			}
		} catch (Exception e) {
			throw new Exception(e);
		} finally {
			close(null, statement, conn);
		}
		return map;
	}
	
	public List<String> getSqlColumn(String sql) throws Exception {
		Connection conn = null;
		Statement statement = null;
		ResultSet rs = null;
		List<String> list = new ArrayList<String>();
		try {
			conn = getConnection();
			statement = conn.createStatement();
			rs = statement.executeQuery(sql);
			
			ResultSetMetaData rsMeta = rs.getMetaData();
			for(int i=1; i<=rs.getMetaData().getColumnCount(); i++) { 
				list.add(rsMeta.getColumnLabel(i)); 
			}
		} catch (Exception e) {
			throw new Exception(e);
		} finally {
			close(rs, statement, conn);
		}
		return list;
	}
	public List<Object[]> getSqlResult(String sql) throws Exception{
		Connection conn = null;
		Statement statement = null;
		ResultSet rs = null;
		List<Object[]> list = new ArrayList<Object[]>();
		try {
			conn = getConnection();
			statement = conn.createStatement();
			rs = statement.executeQuery(sql);
			
			while(rs.next()){
				Object[] obj = new Object[rs.getMetaData().getColumnCount()];
				obj = new Object[rs.getMetaData().getColumnCount()];
				for(int i=1; i<=rs.getMetaData().getColumnCount(); i++) { 
					//对日期类型进行特殊处理
					if(rs.getMetaData().getColumnType(i)==91){
						java.util.Date date = rs.getDate(i);
						if(date!=null){
							obj[i-1] = DateUtil.formatDay(date);
						}
					}
					if(rs.getMetaData().getColumnType(i)==93){
						Timestamp timestamp = rs.getTimestamp(i);
						if(timestamp!=null){
							Date date = new Date(timestamp.getTime());
							obj[i-1] = DateUtil.getDateFormat(date);
						}
					}
					if(rs.getMetaData().getColumnType(i)!=93 && rs.getMetaData().getColumnType(i)!=91){
						obj[i-1] = rs.getObject(i);
					}
				}
				list.add(obj);
			}
			
		} catch (Exception e) {
			throw new Exception(e);
		} finally {
			close(rs, statement, conn);
		}
		return list;
	}
	public List<Object[]> getSqlColumnAndResult(String sql) throws Exception {
		Connection conn = null;
		Statement statement = null;
		ResultSet rs = null;
		List<Object[]> list = new ArrayList<Object[]>();
		try {
			conn = getConnection();
			statement = conn.createStatement();
			rs = statement.executeQuery(sql);
			Object[] obj = new Object[rs.getMetaData().getColumnCount()];
			for(int i=1; i<=rs.getMetaData().getColumnCount(); i++) { 
				obj[i-1] = rs.getMetaData().getColumnLabel(i);
			}
			list.add(obj);
			
			while(rs.next()){
				obj = new Object[rs.getMetaData().getColumnCount()];
				for(int i=1; i<=rs.getMetaData().getColumnCount(); i++) { 
					//对日期类型进行特殊处理
					if(rs.getMetaData().getColumnType(i)==91){
						java.util.Date date = rs.getDate(i);
						if(date!=null){
							obj[i-1] = DateUtil.formatDay(date);
						}
					}
					if(rs.getMetaData().getColumnType(i)==93){
						Timestamp timestamp = rs.getTimestamp(i);
						if(timestamp!=null){
							Date date = new Date(timestamp.getTime());
							obj[i-1] = DateUtil.getDateFormat(date);
						}
					}
					if(rs.getMetaData().getColumnType(i)!=93 && rs.getMetaData().getColumnType(i)!=91){
						obj[i-1] = rs.getObject(i);
					}
				}
				list.add(obj);
			}
			
		} catch (Exception e) {
			throw new Exception(e);
		} finally {
			close(rs, statement, conn);
		}
		return list;
	}

	public boolean checkTableExist(String tname) {
		Connection conn = null;
		Statement statement = null;
		ResultSet rs = null;
		try {
			conn = getConnection();
			statement = conn.createStatement();
			DatabaseMetaData dbMetData = conn.getMetaData();
			rs = dbMetData.getTables(null,convertDatabaseCharsetType("root", "mysql"), null,new String[] { "TABLE", "VIEW" });
			while (rs.next()) {
				if (rs.getString(4) != null&& (rs.getString(4).equalsIgnoreCase("TABLE") || rs.getString(4).equalsIgnoreCase("VIEW"))) {
					String tableName = rs.getString(3).toLowerCase();
					if (tname.equals(tableName)) {
						return true;
					}
				}
			}
		} catch (Exception e) {
			return false;
		} finally {
			close(rs, statement, conn);
		}
		return false;
	}

	public String convertDatabaseCharsetType(String in, String type) {
		String dbUser;
		if (in != null) {
			if (type.equals("oracle")) {
				dbUser = in.toUpperCase();
			} else if (type.equals("postgresql")) {
				dbUser = "public";
			} else if (type.equals("mysql")) {
				dbUser = null;
			} else if (type.equals("mssqlserver")) {
				dbUser = null;
			} else if (type.equals("db2")) {
				dbUser = in.toUpperCase();
			} else {
				dbUser = in;
			}
		} else {
			dbUser = "public";
		}
		return dbUser;
	}
	
	public void close(ResultSet rs, Statement st, Connection conn) {
		try {
			if (rs != null) {
				rs.close();

			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				if (conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}
			}
		}
	}

	public String getJdbcUrl() {
		return jdbcUrl;
	}

	public void setJdbcUrl(String jdbcUrl) {
		this.jdbcUrl = jdbcUrl;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public static void main(String[] args) throws Exception {
		Object o = new DBUtil("oracle.jdbc.driver.OracleDriver","jdbc:oracle:thin:@192.168.3.9:1521/lybi", "ly_dw", "ly_dw_prd").getSqlColumnAndResult("select t.BRAND_NAME,t.SALE_AREA, t.kpi,t.live_dealer,t.all_dealer,t.live_rate,t.line_rate from ly_ods.KPI_0315 t");
		System.out.println(o);
	}
}