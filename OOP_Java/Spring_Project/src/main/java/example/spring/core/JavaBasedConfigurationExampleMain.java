package example.spring.core;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class JavaBasedConfigurationExampleMain {

	public static void main(String[] args) {
		//SpringConfig
		ApplicationContext appCtx = new AnnotationConfigApplicationContext(SpringConfig.class);
		Object obj = appCtx.getBean("getHelloService");
		GreetingService gs = (GreetingService)obj;
		System.out.println(gs.sayGreetings());
		
		System.out.println("====================");
		List<String> allMovies = (List<String>) appCtx.getBean("Movies");
		allMovies.stream().forEach(movie->System.out.println(movie));
			
				
				
				}

}
