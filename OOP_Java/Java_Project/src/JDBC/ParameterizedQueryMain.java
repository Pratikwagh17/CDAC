package JDBC;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ParameterizedQueryMain {

	public static void main(String[] args) {
		String sqlQuery="select dname,loc,deptno from dept where deptno in(?,?)";
		try(Connection dbConnection = jdbcUtils.obtainConnection();
			PreparedStatement pstmt= dbConnection.prepareStatement(sqlQuery);
				
			){
			pstmt.setInt(1, 100);
			pstmt.setInt(2, 200);
			ResultSet rs = pstmt.executeQuery();
			int flag = 0;
			
//			boolean found = false;
			
			
			while(rs.next()) {
				flag=1;
				String name=rs.getString(1);
				String location=rs.getString(2);
				int deptno=rs.getInt(3);
				System.out.println(deptno+" - "+name+" - "+location);
				
			
			}
			if (flag==0) {
				System.out.println("not found");
			}
			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

}
