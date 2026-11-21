package JDBC;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DataDeletionMain {

	public static void main(String[] args) {
		String sqlQuery="delete from dept_copy where deptno = ?";
		try(Connection dbConnection = jdbcUtils.obtainConnection();
			PreparedStatement pstmt= dbConnection.prepareStatement(sqlQuery);
				
			){
			pstmt.setInt(1, 50);
			int updateCount = pstmt.executeUpdate();
            System.out.println(updateCount+"Record deleted");
				
			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

}
