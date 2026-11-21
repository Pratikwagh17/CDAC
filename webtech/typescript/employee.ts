class Employee{
    private empid:number=101;
    private empname:string="wagh";
    private emppost:string="manager";
    private empsalary:number=95000;

EmployeeDetails(){
    return`id:${this.empid} name:${this.empname} post:${this.emppost} salary:${this.empsalary}`
}
constructor(id:number,name:string,post:string,salary:number)
{
    this.empid=id;
    this.empname=name;
    this.emppost=post;
    this.empsalary=salary;
}
get _getid(){
    return this.empid;
}
get _getname(){
    return this.empname;
} 
get _getpost(){
    return this.emppost;
}
get _getsalary(){
    return this.empsalary;
}
set _setid(id:number){
    this.empid=id;
}
set _setname(name:string){
    this.empname=name;
}
set _setpost(post:string){
    this.emppost=post;
}
set _setsalary(salary:number){
    this.empsalary=salary;
}
}

let emp = new Employee(1,"Pratik","Manager",50000);
let emp1 = new Employee(2,"sudu","TL",50000);
let emp2 = new Employee(3  ,"atharva","PH",50000);

emp._setid=333;
console.log(emp._getid);

// emp1._setid=334;
// console.log(emp1._getid);

// emp2._setid=384;
// console.log(emp2._getid);

console.log(emp.EmployeeDetails());
console.log(emp1.EmployeeDetails());
console.log(emp2.EmployeeDetails());



