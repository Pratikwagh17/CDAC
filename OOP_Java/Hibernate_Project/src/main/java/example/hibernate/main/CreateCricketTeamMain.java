package example.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.CricketTeam;

public class CreateCricketTeamMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();				
				){
			CricketTeam team1 = new CricketTeam("IND","India",null);
			CricketTeam team2 = new CricketTeam("NZ","New Zealand",null);
			
			Transaction tx = session.beginTransaction();
			session.persist(team1);
			session.persist(team2);
			tx.commit();
			
		System.out.println("Cricket Teams created...");
			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

}
