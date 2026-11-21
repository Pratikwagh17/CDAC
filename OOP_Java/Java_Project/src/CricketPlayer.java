
public class CricketPlayer extends Player {
	private int runs;
	private float battingAvg;
	
	public CricketPlayer() {
		super();
		System.out.println("inside Cricket Player()");
	}
	
	
	public CricketPlayer(String name, int age, int runs, float battingAvg) {
		super(name, age);
		this.runs = runs;
		this.battingAvg = battingAvg;

	}

/*
	public CricketPlayer(String nm,int ag, int rn, float ba) {
		super(nm,ag);
		runs=rn;
		battingAvg=ba;
		
	}*/
	
	public int getRuns() {
		return runs;
	}
	public void setRuns(int runs) {
		this.runs = runs;
	}
	public float getBattingAvg() {
		return battingAvg;
	}
	public void setBattingAvg(float battingAvg) {
		this.battingAvg = battingAvg;
	}
	

}
