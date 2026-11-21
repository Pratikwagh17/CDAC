// const chalk =require('chalk');
// console.log("hello world");


import chalk from 'chalk';
import validator from 'validator';

const errormsg=chalk.blue.bold.italic.underline;
const successmsg=chalk.red.bold.italic.italic;
console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.blue.bgCyan('Hello world!'));
console.log(chalk.blue.bold.italic.underline('Hello tiger!'));
console.log(errormsg('Hello tiger!'));
console.log(successmsg('Hello tiger!'));



let msg="";
console.log(validator.isEmpty(msg));

// let mail="wagh.mail"
// console.log(validator.isEmpty(msg));
