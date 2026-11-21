package io_programming;

import java.io.InputStream;
import java.util.Scanner;

public class AcceptInputMain {

	public static void main(String[] args) {
		InputStream keyboard = System.in;
		try(
				Scanner scr = new Scanner(keyboard)){
			{
				System.out.println("Enter your Name: ");
				String myName = scr.nextLine();
				
				System.out.println("Enter your height(in cm)");
				int myHeight =scr.nextInt();
				
				System.out.println("Enter your weight(in kg): ");
				float myWeight= scr.nextFloat();
				
				float heightInMtr = myHeight / 100.0f;
				float bmi = myWeight / (heightInMtr*heightInMtr);
				System.out.println("Hey " + myName + ",Your BMI is "+ bmi);
				
			}
		}
	}

}
