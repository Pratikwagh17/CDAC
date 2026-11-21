
class Employee {

    private empId: number;
    private empName: string;
    private empPost: string;
    private empSalary: number;

    constructor(_id: number, _name: string, _post: string, _salary: number) {
        this.empId = _id;
        this.empName = _name;
        this.empPost = _post;
        this.empSalary = _salary;
    }
    get _getId() {
        return this.empId;
    }
    set _setId(_id: number) {
        this.empId = _id;
    }

    employeeDetails() {
        return `Id:${this.empId} Name:${this.empName} Post:${this.empPost} Salary:${this.empSalary}`;
    }
}
let empObj1 = new Employee(101, "Panchashil", "Developer", 95000);
let empObj2 = new Employee(102, "Amol", "manager", 95000);
let empObj3 = new Employee(103, "Vishal", "CEO", 95000);
console.log(empObj1.employeeDetails());
console.log(empObj2.employeeDetails());
console.log(empObj3.employeeDetails());
empObj1._setId=333;
console.log(empObj1._getId);
