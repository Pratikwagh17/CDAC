package example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import example.beans.jdbcUtils;
//\import JDBC.jdbcUtils;
import example.entity.Department;

public class DepartmentDao implements AppDao<Department,Integer>{

	@Override
	public Department getByID(Integer deptno) {
		Department foundDept = null;
		String sqlQuery="select dname,loc,deptno from dept where deptno = ?";
		
		try(Connection dbConnection = jdbcUtils.obtainConnection();
				PreparedStatement pstmt= dbConnection.prepareStatement(sqlQuery);
					
				){
				pstmt.setInt(1, deptno);
				ResultSet rs = pstmt.executeQuery();
				
				if(rs.next()) {
					String name=rs.getString(1);
					String location=rs.getString(2);
					int deptId=rs.getInt(3);
					foundDept = new Department(deptId,name,location);
					System.out.println(foundDept);
					
				}
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}

		return foundDept;
	}
	

}
