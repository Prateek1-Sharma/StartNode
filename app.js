const path=require('path');

const adminRoutes=require('./Routes/admin');
const shopRoutes=require('./Routes/shop');

const bodyParser=require('body-parser');

const express=require('express');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);
app.use('/success',(req,res)=>{
    res.send("<h1>SUCCESSFULL</h1>")
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
    })
app.listen(4000);
