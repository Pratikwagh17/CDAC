
public class OnlineTraining extends Training {
	private String meetingLink;
	
	public OnlineTraining() {
		super();
		meetingLink="https://www.zoom.us/852";
	}

	public OnlineTraining(String moduleName, int duration, String meetingLink) {
		super(moduleName, duration);
		this.meetingLink = meetingLink;
	}

	public String getMeetingLink() {
		return meetingLink;
	}

	public void setMeetingLink(String meetingLink) {
		this.meetingLink = meetingLink;
	}
	public void conduct() {
		String currentModule=this.getModuleName();
		int currentDuration=this.getDuration();
		System.out.println("Conducting the training on "+ currentModule);
		System.out.println("For " + currentDuration + " hours");
		System.out.println("Using the link " + meetingLink);
		
	}
	public String getDetails() {
		return super.getDetails() +" "  + meetingLink;
	}

	
	
	
}
