const http=require('http');
const fs=require('fs');

const express=require('express');

const app=express();

// const Path=require('path');
app.use((req,res,next)=>{
    console.log("in a middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("in another middleware");
    res.send("Hello from Express");
})

const server=http.createServer(app);
  

server.listen(3000);
