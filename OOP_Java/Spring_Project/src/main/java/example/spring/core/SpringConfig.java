package example.spring.core;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;

@Configurable  //marks the class as a configuration specific class
public class SpringConfig {
	//Declare a bean of type HelloService
	@Bean  //Marks this method as a class declaration method
	public HelloService getHelloService() {
		return new HelloService();
	}
		@Bean("Movies") //Customizing ID
		public List<String> getMovies(){
			return Arrays.asList("Drishaym", "Corporate", "Dial 100");
		}
		@Bean("emp")
		public  Employee getEmployee() {
			Employee emp = new Employee();
			emp.setEmpNo(1022);
			emp.setName("Mhika Dixit");
			emp.setSal(6789.28f);
			return emp;
		}
		@Bean("anotheremp")
		public  Employee getAnotherEmployee() {
			Employee emp = new Employee(1022,"Parag Joshi",6789.28f);
			return emp;
			
			
		}
		@Bean ("bean1")
		@Lazy
		@Scope("prototype")
		public BeanImpl getBeanImpl() {
			return new BeanImpl();
		}
		@Bean
		public address getHomeAddress() {
			return new address ("Mumbai", 422003);
			
		}
		@Bean("secondHome")
		public address getSecondHomeAddress() {
			return new address("Pune",411041);
		}
		
		@Bean ("cust")
		public Customer getCustomer() {
			Customer cst = new Customer("Sunil Kumar","sunilkumar@gmail.com",getHomeAddress());
			return cst;
		}
		@Bean("myBook")
		@Primary
		public Book getBook() {
			return new Book ("Boardroom", "Achyut Godbole");
			
		}@Bean("myAnotherBook")
		public Book getAnotherBook() {
			return new Book ("APJ Kalam", "Wings of fire");
			
		}
		@Bean ("myBorrower")
		public Borrower getBorrower() {
			Borrower br = new Borrower();
			br.setId(120);
			br.setName("Prajakta Deshmukh");
			return br;
		}

}
