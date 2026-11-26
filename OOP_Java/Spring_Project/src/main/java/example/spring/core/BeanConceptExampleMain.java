package example.spring.core;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class BeanConceptExampleMain {

	public static void main(String[] args) {
		ApplicationContext appCtx = new AnnotationConfigApplicationContext(SpringConfig.class);
		Object bean1= appCtx.getBean("bean1") ;
		Object anotherbean1= appCtx.getBean("bean1") ;
		System.out.println(bean1==anotherbean1);
	}

}
