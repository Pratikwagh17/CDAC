package string_builder;

public class StringBuilderMain {

	public static void main(String[] args) {
		StringBuilder builder = new StringBuilder();
		builder.append("Today is Thursday and it is day no. ");
		builder.append(4);
		builder.append(". Usually we have lunch at ");
		builder.append(1.30f);
		builder.append(" pm. Are you enjoining this training? ");
		builder.append(true);
		
		System.out.println(builder); 		
	}

}
