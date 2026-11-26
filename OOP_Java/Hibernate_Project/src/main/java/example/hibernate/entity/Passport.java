package example.hibernate.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "Passport_Master")
public class Passport {
	@Id
	@Column(name="passport_no",length=8)
	private String passportNo;
	@Column(name="name",length=40)
	private String name;
	@Column(name="issuedAt",length=30)
	private String issuedAt;

	public Passport() {
		// TODO Auto-generated constructor stub
	}

	public Passport(String passportNo, String name, String issueDate) {
		super();
		this.passportNo = passportNo;
		this.name = name;
		this.issuedAt = issueDate;
	}

	public String getPassportNo() {
		return passportNo;
	}

	public void setPassportNo(String passportNo) {
		this.passportNo = passportNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIssueDate() {
		return issuedAt;
	}

	public void setIssueDate(String issueDate) {
		this.issuedAt = issueDate;
	}

	@Override
	public String toString() {
		return "Passport [passportNo=" + passportNo + ", name=" + name + ", issueDate=" + issuedAt + "]";
	}

}
