package collection_framework;
import java.util.ArrayList;
public class ArrayExampleMain {

	public static void main(String[] args) {
		ArrayList dataValues = new ArrayList();
		System.out.println("Cuurent size:" + dataValues.size());
		System.out.println("Total capacity:" +   dataValues.capacity());
		dataValues.add(65);
		dataValues.add(85);
		dataValues.add(32);
		dataValues.add(96);
		System.out.println("Cuurent size:" + dataValues.size());
		System.out.println("Total capacity:" + dataValues.capacity());
		
		for (int i=101;i<108;i++)
			dataValues.add(i);
		System.out.println("final size:" + dataValues.size());
		System.out.println("Final capacity:" + dataValues.capacity());


	}

}
