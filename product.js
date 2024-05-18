const path=require('path');
exports.getAddProduct=(req,res,next)=>{
    console.log("Add Product Page");
    res.sendFile(path.join(__dirname,"../views/add-product.html"));
    // const dir=path.join(__dirname,"views");
    // console.log(dir+"/add-product.html");
}

exports.getContactPage=(req,res,next)=>{
    console.log("contact Page");
   res.sendFile(path.join("views","contact.html"))
    // next();
}