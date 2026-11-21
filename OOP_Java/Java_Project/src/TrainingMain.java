
public class TrainingMain {

	public static void main(String[] args) {
		OfflineTraining offline = new OfflineTraining();
		offline.conduct();
		System.out.println("==================================");
		
		OnlineTraining online= new OnlineTraining("SQL",30,"https://www.meet.google.com/7410");
		online.conduct();
		
		System.out.println("======================================");
		
		System.out.println(offline.getDetails());
		System.out.println(online.getDetails());
		
		/*Training myTraining= new OnlineTraining();
		myTraining.conduct();
		
		Training yourTraining=new OfflineTraining();
		yourTraining.conduct();*/

	}

}

