package example.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Employee;

public class CreateEmployeeMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();				
				){
			Employee e1 = new Employee(null,"Aniket Singh", 45865.65f,null);
			Employee e2 = new Employee(null,"Shruti Joshi", 45865.65f,null);
			Transaction tx = session.beginTransaction();
			session.persist(e1);
			session.persist(e2);
			
			tx.commit();
			System.out.println("Employee Created...");
			
			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

}
