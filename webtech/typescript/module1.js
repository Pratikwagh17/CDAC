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
        return `Id:${this.pid} name:${this.pname} contact:${this.pcontact} status:${this.pstatus}`;
    }
}
let TeacherObj = new Teachers(501, "wagh", 8562, "single");
console.log(TeacherObj.personDetails());
export {};
