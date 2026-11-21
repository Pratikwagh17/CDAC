package exception_handling;

public class UserDefinedExceptionMain {
	public static void main(String[] args) {
		try {
			int position = NameCollection.getPosition("Rahul");
			System.out.println(position);
		} catch (NameNotFoundException e) {
			//e.printStackTrace();
			System.out.println(e.getMessage());
		}
	}
}
