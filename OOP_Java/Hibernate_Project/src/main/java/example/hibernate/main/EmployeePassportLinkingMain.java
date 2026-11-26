package example.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Employee;
import example.hibernate.entity.Passport;

public class EmployeePassportLinkingMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();				
				){
			//Load the the passport which are to linked
			Passport passport1 =session.find(Passport.class,"P1");
			Passport passport2 =session.find(Passport.class, "P2");
			
			//Load the employee to which passports are to be linked
			Employee employee1= session.find(Employee.class,1);
			Employee employee2= session.find(Employee.class,2);
			
			Transaction tx=session.beginTransaction();
				employee1.setPassport(passport1);
				employee2.setPassport(passport2);
 				tx.commit();
				
			System.out.println("Passport Linked to employee...");


			
		}catch(Exception ex) {
			ex.printStackTrace();	
		}
	}

}
