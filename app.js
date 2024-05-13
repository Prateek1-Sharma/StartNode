const http=require('http');
const fs=require('fs');

const bodyParser=require('body-parser');

const express=require('express');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));



app.use("/add",(req,res,next)=>{
    console.log("Add Product Page");
    res.send("<h1>Hello from Express</h1><form action='/cart' method='POST'><input type='text' name='Product_title'><input type='number' name='Product_quantity'><button type='submit'>ADD Product</button> </form>");
    // next();
    // res.end();
    // console.log;("hello");
  
})

app.use("/cart",(req,res,next)=>{
    console.log("Cart Page");
    console.log(req.body);
    next();
})

app.use("/",(req,res,next)=>{
    console.log("Always Executes");
    next();
})

app.listen(4000);
// const server=http.createServer(app);
  

// server.listen(4000);