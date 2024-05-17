const express=require('express');
const path=require('path');
const router=express.Router();

const rootDir=require("../utils/path");

router.get("/add-product",(req,res,next)=>{
    console.log("Add Product Page");
    res.sendFile(path.join(rootDir,"views","add-product.html"));
    // next();
})

router.get("/contact-us",(req,res,next)=>{
    console.log("contact Page");
   res.sendFile(path.join(rootDir,"views","contact.html"))
    // next();
})



module.exports=router;