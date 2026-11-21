// how to create class 
class Students {
    // data-member of class 
    stdId = 101;
    stdName = "Anmol";
    stdContact = 1524654;
    addtharNo = 123456;
    gender = "male";
    // create constructor 
    constructor(_id, _name, _contact) {
        this.stdId = _id;
        this.stdName = _name;
        this.stdContact = _contact;
    }
    //member function 
    studentDetails() {
        return `Id:${this.stdId} Name:${this.stdName} Contact:${this.stdContact} AdharNo:${this.addtharNo} Gender:${this.gender}`;
    }
}
// create object of class 
// let stdObj1 = new Students(201,"Rahul",13246);
// console.log(stdObj1.stdName);
// console.log(stdObj1.studentDetails());
// let stdObj2 = new Students(202,"Radha",44654);
// console.log(stdObj2.studentDetails());
// let stdObj3 = new Students(203,"Roy",3654);
// console.log(stdObj3.studentDetails());
//Inheritance 
export default class Result extends Students {
    phy = 0;
    che = 0;
    math = 0;
    constructor(_id, _name, _contact, _phy, _che, _math) {
        super(_id, _name, _contact);
        this.phy = _phy;
        this.che = _che;
        this.math = _math;
    }
    total() {
        return this.phy + this.che + this.math;
    }
    studentDetails() {
        return `Gender:${this.gender} Id:${this.stdId} Name:${this.stdName} Contact:${this.stdContact} Physics:${this.phy} Chemistry:${this.che} Math:${this.math} TotalMark:${this.total()}`;
    }
}
// let resultObj = new Result(301, "Sanjay", 2222, 85, 90, 95);
// console.log(resultObj.studentDetails());
