const { error } = require('console');
const fs= require('fs');

let writedata = fs.writeFileSync('./write1.txt',"hello guyssss!!!!!!");
let readdata = fs.readFileSync('./write1.txt',"utf8");

console.log(readdata);

fs.appendFileSync("./write1.txt","i am fine");

fs.writeFile("./write2.txt","hello shivaji here",(error,result)=>{

    console.log("file write succesfully")
});

fs.writeFile("./write2.txt","utf8",(error,result)=>{

    console.log("file read succesfully")
})
fs.appendFile("./write2.txt","utf8",(error,result)=>{

    console.log("file read succesfully")
})


