
public class ParameterPassing {
	private static void changeIndex(int idx) {
		idx=10;		
	}
	
	private static void changeBookTitle(Book currentBook) {
		currentBook.setTitle("Rainy Days");
	}

	public static void main(String[] args) {
		
		int index=7;
		System.out.println("Index before change: " +index);
		changeIndex(index);
		System.out.println("Index after change: "+index);
		System.out.println("===============================");
		
		Book myBook=new Book();
		System.out.println("Book title before change: "+myBook.getTitle());
		changeBookTitle(myBook);
		System.out.println("Book title after change: "+myBook.getTitle());
	}

}
