"use strict";
class Employee {
    stdid = 101;
    stdname = "wagh";
    stdpost = "manager";
    stdsalary = 95000;
    EmployeeDetails() {
        return `id:${this.stdid} name:${this.stdname} post:${this.stdpost} salary:${this.stdsalary}`;
    }
    constructor(id, name, post, salary) {
        this.stdid = id;
        this.stdname = name;
        this.stdpost = post;
        this.stdsalary = salary;
    }
    get _getid() {
        return this.stdid;
    }
    get _getname() {
        return this.stdname;
    }
    get _gepost() {
        return this.stdpost;
    }
    get _getsalary() {
        return this.stdsalary;
    }
    set _setid(id) {
        this.stdid = id;
    }
    set _setname(name) {
        this.stdname = name;
    }
    set _setpost(post) {
        this.stdpost = post;
    }
    set _setsalary(salary) {
        this.stdsalary = salary;
    }
}
let emp = new Employee(1, "Pratik", "Manager", 50000);
let emp1 = new Employee(2, "sudu", "TL", 50000);
let emp2 = new Employee(3, "atharva", "PH", 50000);
emp._setid = 333;
console.log(emp._getid);
// emp1._setid=334;
// console.log(emp1._getid);
// emp2._setid=384;
// console.log(emp2._getid);
console.log(emp.EmployeeDetails());
console.log(emp1.EmployeeDetails());
console.log(emp2.EmployeeDetails());
