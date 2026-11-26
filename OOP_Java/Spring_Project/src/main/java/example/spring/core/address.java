package example.spring.core;

public class address {
	private String city;
	private int pincode;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

	public address(String city, int pincode) {
		super();
		this.city = city;
		this.pincode = pincode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "address [city=" + city + ", pincode=" + pincode + "]";
	}

}
