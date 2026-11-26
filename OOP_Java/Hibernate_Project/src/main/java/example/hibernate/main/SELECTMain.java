package example.hibernate.main;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Article;

public class SELECTMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				 Session session = sf.openSession();
				
				){
			String hqlQuery = "select a.headLine,a.publishedOn from Article a";
			Query<Object[]> qr =  session.createQuery(hqlQuery, Object[].class);
			List<Object[]> articleData = qr.list();
			articleData.stream().forEach(data -> System.out.println(data[0] + " , " + data[1]));
//			for(Article art:allArticles) {
//				System.out.println(art);
//			}
			
					
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		
	}

}
