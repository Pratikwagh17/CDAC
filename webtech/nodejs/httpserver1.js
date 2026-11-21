require('dotenv').config();
const http=require("http")
const fs=require("fs")
const port =process.env.PORT;
const host =process.env.HOST;

const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        // res.write("this is simple request");
        // res.end();

        res.writeHead(200,{"content-type":"text.html"});
        let myreader=fstat.createReadstream(__dirname="/index.html","utf8");
        myreader.pipe(res);
        } 
        // else if(req.url=="/home"){
        //     // res.end(); 
        //     res.writeHead(200,{"content-type":"text.html"});
        // let myreader=fstat.createReadstream(__dirname="/index.html","utf8");
        // myreader.pipe(res);           

        // }
        // else if(req.url=="/gallery"){
        //     // res.write("this is gallery");
        //     // res.end();   
        //     res.writeHead(200,{"content-type":"text.html"});
        // let myreader=fstat.createReadstream(__dirname="/index.html","utf8");
        // myreader.pipe(res);        

        // }
        // else if(req.url=="/about"){
        //     // res.write("this is about request");
        //     // res.end();  
        //     res.writeHead(200,{"content-type":"text.html"});
        // let myreader=fstat.createReadstream(__dirname="/index.html","utf8");
        // myreader.pipe(res);         

        // }
         
        // else if(req.url=="/contact"){
        //     // res.write("this is contact");
        //     // res.end();  
        //     res.writeHead(200,{"content-type":"text.html"});
        // let myreader=fstat.createReadstream(__dirname="/index.html","utf8");
        // myreader.pipe(res);         

        // }
});
server.listen(port,()=>{
    console.log(`server is started on ${host}:${port}`);
})