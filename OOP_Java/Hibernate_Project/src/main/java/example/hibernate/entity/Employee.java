package example.hibernate.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Employee_Master")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="emp_no")
	private Integer empNo;
	@Column(name="emp_name")
	private String name;
	@Column(name="emp_sal")
	private float sal;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "passport_no")
	private Passport passport;

	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(Integer empNo, String name, float sal, Passport passport) {
		super();
		this.empNo = empNo;
		this.name = name;
		this.sal = sal;
		this.passport = passport;
	}

	public Integer getEmpNo() {
		return empNo;
	}

	public void setEmpNo(Integer empNo) {
		this.empNo = empNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getSal() {
		return sal;
	}

	public void setSal(float sal) {
		this.sal = sal;
	}

	public Passport getPassport() {
		return passport;
	}

	public void setPassport(Passport passport) {
		this.passport = passport;
	}

}
