package exception_handling;

public class DefaultExceptionHandlerMain {

	public static void main(String[] args) {
		//programm that accept 2 numbers as command line arguments and prints their sum
		try {
			int x = Integer.parseInt(args[0]);
			int y = Integer.parseInt(args[1]);
			int result=x/y;		
			System.out.println(result);
			
		}
		catch(ArrayIndexOutOfBoundsException | ArithmeticException ex) {
			if (ex instanceof ArrayIndexOutOfBoundsException)
				System.out.println("Enter atleast 2 numbers");
			else {
				System.out.println("Enter 2nd no as non zero");
				
			}
			
		}
		catch (Exception ex) {
			System.out.println("General Errorrrrr...");
		}
		finally {
			System.out.println("Done...");
		}
		
		/*
		catch (ArrayIndexOutOfBoundsException ex) {
			System.out.println("Enter at least 2 numbers");
		}
		catch (ArithmeticException ex) {
			System.out.println("Enter 2nd no as non zero number");
		}*/
		


	}

}
