package collection_framework;

import java.util.Stack;

public class StackOperationsMain {

	public static void main(String[] args) {
		Stack dataValues = new Stack();
		dataValues.push("Mumbai");
		dataValues.push("Pune");
		dataValues.push("Nashik");
		
		for(Object obj:dataValues)
		System.out.println(obj);
		
		System.out.println("=====================");
		
		Object poppedobj=dataValues.pop();
		System.out.println("popped object" + poppedobj);
		for(Object obj:dataValues)
		System.out.println(obj);
		
		System.out.println("=====================");
		
		Object peekobj=dataValues.peek();
		System.out.println("Peeked object" + peekobj);
		for(Object obj:dataValues)
		System.out.println(obj);

	
		// TODO Auto-generated method stub

	}

}
