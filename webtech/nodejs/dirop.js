const fs = require('fs');

fs.unlink("./write1.txt",(error,result)=>{
    console.log("file deleted")
});


fs.mkdir("./newdirdir1",(error,result)=>{
    console.log("new directory created");
});

fs.mkdir("./newdirdir2",(error,result)=>{
    fs.writeFile("./newdir2/newfile.txt","this is new file",(error,result)=>{
        console.log("new directory and file created");
    });
});

fs.mkdir("./newdirdir1",(error,result)=>{
    console.log("new directory deleted");
});


fs.mkdir("./newdirdir2",(error,result)=>{
    fs.writeFile("./newdir2/newfile.txt","this is new file",(error,result)=>{
        console.log("new directory and file created");
    });
 