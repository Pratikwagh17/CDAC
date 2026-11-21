
console.log("Welcome You All");
// data types in typescript 
//1.number
let num:number;
    num=12565;
//string 
let fname:string="Panchashil";
//boolean 
let cond:boolean=true;
//Array
let students:string[]=["Raja","Rahul","Rupesh"];
//tupple data type: it us to store multiple values with different data type in array
let emp:[number,string,boolean] = [101,"Namdeo",true];
//enum: it allows us to create variables with constant values
enum days{sun,mon,tue=101,wed,thus,fri,sat};
let data0 = days.sun;  
//union: it allows us to store multiple values with defferent datatype.
let mix:number|string | boolean = true;
//null
let emptyData=null;
//any
let data:any="hello"; 
