import Result from './oops.js';
import IPerson from './person.js';

class Teachers implements IPerson{
    pid:number;
    pname:string;
    pcontact:number;
    pstatus:string;
    constructor(_id:number,_name:string,_contact:number,_status:string){
        this.pid=_id;
        this.pname=_name;
        this.pcontact=_contact;  
        this.pstatus=_status;
    }
    personDetails() {
        return `Id:${this.pid} name:${this.pname} contact:${this.pcontact} status:${this.pstatus}`
    }
}


let TeacherObj=new Teachers(501,"wagh",8562,"single");
console.log(TeacherObj.personDetails());