const express=require('express');

const router=express.Router();

router.get("/add",(req,res,next)=>{
    console.log("Add Product Page");
    res.send("<h1>Hello from Express</h1><form action='/cart' method='POST'><input type='text' name='Product_title'><input type='number' name='Product_quantity'><button type='submit'>ADD Product</button> </form>");
    // next();
})

router.post("/cart",(req,res,next)=>{
    console.log("Cart Page");
    console.log(req.body);
    // next();
})


module.exports=router;