
public class PlayerMain {

	public static void main(String[] args) {
		CricketPlayer crPlayer = new CricketPlayer();
		crPlayer.setName("Rohit");
		crPlayer.setAge(38);
		crPlayer.setRuns(1382);
		crPlayer.setBattingAvg(41.36f);
		
		System.out.println(crPlayer.getName()+","+crPlayer.getRuns());
		System.out.println("=======================================================");
		
		CricketPlayer crPlayer2=new CricketPlayer("Virat",37,4563,46.85f);
		System.out.println(crPlayer2.getName()+","+crPlayer2.getRuns());


	}

}
