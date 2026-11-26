package example.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.Article;


public class DeleteArticleMain {
	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();				
				){
//			Class<Article>entityClass=Article.class;
//			Integer id= 2;
			Article foundArticle = session.find(Article.class,3);
			if(foundArticle!=null) {
				Transaction tx =  session.beginTransaction();
					session.remove(foundArticle);
				tx.commit();
				System.out.println("Article Updated...");
			}
			else {
				System.out.println("Article not Found...");
			}}
		catch(Exception ex) {
		ex.printStackTrace();		
		}
	}}
