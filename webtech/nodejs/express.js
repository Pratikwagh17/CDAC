const express=require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const publicpath=path.join(__dirname,"/public/");
// console.log(publicpath);

app.use(express.static(publicpath));  

app.get("/",(req,res,next)=>{
    res.send("simple get request");
    
});

app.get("/home",(req,res,next)=>{
    // res.send("simple get request for home");
    res.sendFile(__dirname+"/home.html");
    
});

app.get("/detail",(req,res,next)=>{
    // res.send("simple get request for detail");
    res.sendFile(__dirname+"/form.html");
    
});

app.get("/contact",(req,res,next)=>{
    // res.send("simple get request for contact");
    res.sendFile(__dirname+"/contact.html");
    
});

app.get("/about",(req,res,next)=>{
    res.send("simple get request for about");
    
});
app.listen(5050,()=>{
    console.log("this is an output for server running");
})  
