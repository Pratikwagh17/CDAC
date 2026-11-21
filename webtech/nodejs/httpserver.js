const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("this is simple request");
        res.end();
        }
        else if(req.url=="/home"){
            res.end();           

        }
        else if(req.url=="/gallery"){
            res.write("this is gallery");
            res.end();           

        }
        else if(req.url=="/about"){
            res.write("this is about request");
            res.end();           

        }
         
        else if(req.url=="/contact"){
            res.write("this is contact");
            res.end();           

        }
});
server.listen(6060,()=>{
    console.log("server is started...");
})