
// how to create class 
class Students {
    // data-member of class 
    stdId: number = 101;
    stdName: string = "Anmol";
    stdContact: number = 1524654;
   private addtharNo:number=123456;
   protected gender:string="male"
    // create constructor 
    constructor(_id: number, _name: string, _contact: number) {
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
    phy: number = 0;
    che: number = 0;
    math: number = 0;

    constructor(_id: number, _name: string, _contact: number, _phy: number, _che: number, _math: number) {
        super(_id, _name, _contact);
        this.phy=_phy;
        this.che=_che;
        this.math=_math;
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