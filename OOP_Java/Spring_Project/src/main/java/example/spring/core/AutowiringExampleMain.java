package example.spring.core;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AutowiringExampleMain {

	public static void main(String[] args) {
		ApplicationContext appCtx = new AnnotationConfigApplicationContext(SpringConfig.class);
		Object borrower = appCtx.getBean("myBorrower");
		System.out.println(borrower);

		// TODO Auto-generated method stub

	}

}
