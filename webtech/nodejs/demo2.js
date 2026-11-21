function evennumber(num){
    return(num%2==0) ? `${num} is even no`:`${num} is odd no`;
}


// Microsoft Windows [Version 10.0.26200.9550]
// (c) Microsoft Corporation. All rights reserved.

// D:\DAC_lab\webtech\nodejs>node
// Welcome to Node.js v24.21.0.
// Type ".help" for more information.
// > let num1=100,num2=200;
// undefined
// > let add=num1+num2;
// undefined
// > add
// 300
// > let fname="wagh",lname="pratik";
// undefined
// > fname+lname
// 'waghpratik'
// > function welcome({
// | return "welcome you all"
// return "welcome you all"
//        ^^^^^^^^^^^^^^^^^

// Uncaught SyntaxError: Unexpected string
// > function welcome(){
// | return "welcome you all
// return "welcome you all
//        ^^^^^^^^^^^^^^^^

// Uncaught SyntaxError: Invalid or unexpected token
// > function welcome(){
// | return "welcome you all"
// | }
// undefined
// > welcome()
// 'welcome you all'
// > .save demo1.js
// Session saved to: demo1.js
// > load demo2.js
// load demo2.js
//      ^^^^^

// Uncaught SyntaxError: Unexpected identifier 'demo2'
// > 
// > .load demo2.js
// function evennumber(num){
//     return(num%==0)?`$(num) is even no`:`$(num) is odd no`;
// }
//     return(num%==0)?`$(num) is even no`:`$(num) is odd no`;
//                 ^

// Uncaught SyntaxError: Unexpected token '='
// > .load demo2.js
// function evennumber(num){
//     return(num%2==0)?`$(num) is even no`:`$(num) is odd no`;
// }
// undefined
// > evennumber(8)
// '$(num) is even no'
// > evennumber(9)
// '$(num) is odd no'
// > .load demo2.js
// function evennumber(num){
//     return(num%2==0) ? `${num} is even no`:`${num} is odd no`;
// }
// undefined
// > evennumber(9)
// '9 is odd no'
// > 