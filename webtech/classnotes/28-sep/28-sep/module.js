// let resultObj = new Result(301, "Sanjay", 2222, 85, 90, 95);
// console.log(resultObj.studentDetails()); 
class Teachers {
    pid;
    pname;
    pcontact;
    pstatus;
    constructor(_id, _name, _contact, _status) {
        this.pid = _id;
        this.pname = _name;
        this.pcontact = _contact;
        this.pstatus = _status;
    }
    personDetails() {
        return `Id:${this.pid} nName:${this.pname} Contact:${this.pcontact} Status:${this.pstatus}`;
    }
}
let teacherObj = new Teachers(501, "Parag", 5842, "Married");
console.log(teacherObj.personDetails());
export {};
