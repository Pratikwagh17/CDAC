package JDBC;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DataUpdationMain {

	public static void main(String[] args) {
		String sqlQuery="update dept_copy set dname=?,loc=? where deptno = ?";
		try(Connection dbConnection = jdbcUtils.obtainConnection();
			PreparedStatement pstmt= dbConnection.prepareStatement(sqlQuery);
				
			){
			pstmt.setInt(3, 50);
			pstmt.setString(1, "Bank");
			pstmt.setString(2, "Mumbai region");
			int updateCount = pstmt.executeUpdate();
            System.out.println(updateCount+"Record updated");
				
			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

}
