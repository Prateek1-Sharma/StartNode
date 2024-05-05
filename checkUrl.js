const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    res.setHeader('Content-Type', 'text/plain');
    if(url==="/home"){
    res.write("welcome to my home");
    }
    if(url=="/about"){
        res.write("welcome to my aboutBio");
    }
    if(url=="/node"){
        res.write("welcome to my Node");
    }
    res.end();

})

server.listen(4000);
