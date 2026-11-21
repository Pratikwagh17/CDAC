
public class OfflineTraining extends Training {
	private String venue;

	public OfflineTraining() {
		super();
		venue="YCP,Mumbai";
	}

	public OfflineTraining(String moduleName, int duration, String venue) {
		super(moduleName, duration);
		this.venue = venue;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}
	
	public void conduct() {
		String currentModule=this.getModuleName();
		int currentDuration=this.getDuration();
		System.out.println("Conducting the training on "+ currentModule);
		System.out.println("For " + currentDuration + " hours");
		System.out.println("At " + venue);
		
	}
	
	public String getDetails() {
		return super.getDetails()+" " + venue;
	}

	
	

}
