package example.spring.core;

public class Customer {
	private String name;
	private String email;
	private address permanantAddress;

	public Customer() {
		// TODO Auto-generated constructor stub
	}

	public Customer(String name, String email, address permanantAddress) {
		super();
		this.name = name;
		this.email = email;
		this.permanantAddress = permanantAddress;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public address getPermanantAddress() {
		return permanantAddress;
	}

	public void setPermanantAddress(address permanantAddress) {
		this.permanantAddress = permanantAddress;
	}

	@Override
	public String toString() {
		return "Customer [name=" + name + ", email=" + email + ", permanantAddress=" + permanantAddress + "]";
	}

}
