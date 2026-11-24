package example.beans;

public class Persons {
	private String name;
	private int height;
	private float weight;

	public void Persons() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHeight() {
		System.out.println("height: ");
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public float getWeight() {
		System.out.println("weight:");
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public Persons() {	
			System.out.println("Inside Person");
	}

}
