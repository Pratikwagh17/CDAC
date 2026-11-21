package exception_handling;

public class ThrowsMain {
	private static void doTest() throws Exception{
		
	}
	
	private static void conductTest() {
		try {
			doTest();
		}
		catch(Exception ex) {
			
		}
		
	}
	
	private static void performTest() throws Exception {
		doTest();		
	}
	private static void handelTest() throws RuntimeException {
		
	}

	public static void main(String[] args) {
		conductTest();
		try {
			performTest();
		}
		catch (Exception ex){
			
		}
		handelTest();

	}

}
