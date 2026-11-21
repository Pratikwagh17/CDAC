package collection_framework;

import java.util.Stack;

import io_programming.Flight;

public class StackExampleMain {

	public static void main(String[] args) {
		Stack dataValues = new Stack();
		dataValues.add("Welcome to collection");
		dataValues.add("Collections are everywhere");
		dataValues.add(new StringBuilder("Welcome"));
		dataValues.add(new Flight("LX369","Luftansa Airlines","New Delhi","Berlin"));
		 int score = 57;
		 dataValues.add(score);
		 System.out.println("Element at 3rd index" + dataValues.get(3));
		 System.out.println("=============Printing all element==============");
		 
		 int size =dataValues.size();
		 System.out.println("size is: " + size);
		 for(int index=0;index<size;index++) {
		 Object obj=dataValues.get(index);
		 System.out.println(obj);
		 }
		 
		 System.out.println("=========Printing all values===============");
			for(Object obj:dataValues)
				 System.out.println(obj);
			
			System.out.println("=========Printing all values===============");
			dataValues.remove(3);
			for(Object obj:dataValues)
				 System.out.println(obj);
	}
	
		



}
