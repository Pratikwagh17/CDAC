package example.hibernate.main;

import java.time.LocalDate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Article;

public class CreateArticleMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();
				
				){
			Article a1= new Article(null,"king","lion",LocalDate.now());
			Transaction tx = session.beginTransaction();
			session.persist(a1);
			tx.commit();
			System.out.println("Article created...");			
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		
	}

}
