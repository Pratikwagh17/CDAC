class Student {
    //data members.
    stdId = 101;
    stdName = "wagh";
    stdContact = 7658652454;
    //member function
    studentDetails() {
        return `ID:${this.stdId} Name:${this.stdName} Contact:${this.stdContact}`;
    }
    // create constructor
    constructor(_id, _name, _contact) {
        this.stdContact = _contact;
        this.stdId = _id;
        this.stdName = _name;
    }
}
export default class Result extends Student {
    phy = 0;
    chem = 0;
    maths = 0;
    constructor(_id, _name, _contact, _phy, _chem, _maths) {
        super(_id, _name, _contact);
        this.chem = _chem;
        this.maths = _maths;
        this.phy = _phy;
    }
    total() {
        return this.chem + this.phy + this.maths;
    }
    studentDetails() {
        return `Id:${this.stdId} Name:${this.stdName} Conctact:${this.stdContact} Physics:${this.phy} Chemistry:${this.chem} Math:${this.maths} TotalMarks:${this.total()}`;
    }
}
// let resultObj = new Result(21,"wagh",65143,654,3564,9456);
// console.log(resultObj.studentDetails());
