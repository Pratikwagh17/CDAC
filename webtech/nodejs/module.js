const { substraction, multiplication, division } = require('./arithmetic');
const localmodule=require('./localmodule');

console.log(localmodule.myname);
console.log(localmodule.addition(300,400),substraction(500,200),multiplication(20,30),division(400,20));   