package example.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import example.hibernate.beans.HibernateUtils;
import example.hibernate.entity.CricketPlayer;

public class CreateCricketTeamPlayerMain {

	public static void main(String[] args) {
		try(
				SessionFactory sf=HibernateUtils.getSessionFactory();
				Session session = sf.openSession();				
				){
			CricketPlayer player1 = new CricketPlayer(null,"Abhishek Sharma");
			CricketPlayer player2 = new CricketPlayer(null,"Vaibhav Suryavanshi");
			CricketPlayer player3 = new CricketPlayer(null,"Arshadeep singh");
			CricketPlayer player4 = new CricketPlayer(null,"Rachi Ravindra");
			CricketPlayer player5 = new CricketPlayer(null,"Glenn Phillips");
			CricketPlayer player6 = new CricketPlayer(null,"Mitchell Santner");

			
			Transaction tx=  session.beginTransaction();
			session.persist(player1);
			session.persist(player2);
			session.persist(player3);
			session.persist(player4);
			session.persist(player5);
			session.persist(player6);
			
			tx.commit();
			System.out.println("Player List Created...");

			
		}catch(Exception ex) {
			ex.printStackTrace();
		}

	}

	}


