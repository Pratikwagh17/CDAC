package example.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Passport;

public class CreatePassportMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();				
				){
			Passport p1  = new Passport("P1", "Aniket singh", "Mumbai");
			Passport p2  = new Passport("P2", "Shruti Joshi", "Pune");
			
			Transaction tx=  session.beginTransaction();
			session.persist(p1);
			session.persist(p2);
			
			tx.commit();
			System.out.println("Passport Created");

			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

}
