package example.hibernate.main;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Article;

public class FROMMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				 Session session = sf.openSession();
				
				){
			String hqlQuery = "from Article a";
			Query<Article> qr =  session.createQuery(hqlQuery, Article.class);
			List<Article> allArticles = qr.list();
			allArticles.stream().forEach(art -> System.out.println(art.getHeadLine()));
//			for(Article art:allArticles) {
//				System.out.println(art);
//			}
			
					
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		
	}

}
