const http=require('http');
const fs=require('fs');
// const Path=require('path');
const server=http.createServer((req,res)=>{
    const body=[];
    const url=req.url;
    const method=req.method;
    res.setHeader('Content-Type', 'text/html');
    if(url==="/a"){
      
        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
    
            console.log("hi");
            res.write("<html>")
            res.write("<head><title>Enter a Message</title></head>")
            res.write(`<body>${data}</body>`)
            res.write("<body><form action='/mess' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>")
            res.write("</html>");
       
          return res.end();
      })
    }
    if(url==="/mess" && method=="POST"){
    req.on("data",(chunk)=>{
        body.push(chunk);

    })


    return req.on("end",()=>{
        const bufferedBody=Buffer.concat(body).toString();
        const message=bufferedBody.split("=")[1];
        fs.writeFile("message.txt",message,(err)=>{
            if(err){
                console.log(err);
            }
            res.statusCode = 302;
            res.setHeader('Location', '/a');
            return res.end();
        })
   
    })
    }
})

server.listen(3000);
