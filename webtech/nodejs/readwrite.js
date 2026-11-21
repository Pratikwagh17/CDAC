const fs = require('fs');
let readstream=fs.createReadStream(__dirname+'/write2.txt',"utf8");
let writestream=fs.createWriteStream(__dirname+'/write3.txt');
readstream.on("data",(chunk)=>{
    console.log(chunk);
    writestream.write(chunk);
});
