package Assignment;

public class StudentMain {

	public static void main(String[] args) {
		Student st1= new Student();
		Student st2= new Student();
		Student st3= new Student();

		
		st1.setStudentId(101);
		st1.setStudentName("pratik");
		st1.setMarks(85.23f);
		System.out.println("1st student details: " );
		System.out.println("Sudent ID: "+ st1.getStudentId());		
		System.out.println("Sudent Name: " + st1.getStudentName());		
		System.out.println("Marks: " + st1.getMarks());
		
		st2.setStudentId(102);
		st2.setStudentName("atharva");
		st2.setMarks(76.25f);
		System.out.println("2nd student details: " );
		System.out.println("Sudent ID: "+ st1.getStudentId());		
		System.out.println("Sudent Name: " + st1.getStudentName());		
		System.out.println("Marks: " + st1.getMarks());
		
		
		st3.setStudentId(103);
		st3.setStudentName("sudarshan");
		st3.setMarks(89.79f);
		System.out.println("3rd student details: " );
		System.out.println("Sudent ID: "+ st1.getStudentId());		
		System.out.println("Sudent Name: " + st1.getStudentName());		
		System.out.println("Marks: " + st1.getMarks());
		
		
	}

}
