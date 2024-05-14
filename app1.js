const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send(`<h1>Lets Chat</h1>
    <form id="loginForm" action="/" method="POST">
        <input type="text" name="username" id="username">
        <button type="submit">Add Username</button>
    </form>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            localStorage.setItem('username', document.getElementById('username').value);
        });
    </script>`)
})

app.post('/',(req,res,next)=>{
    // localStorage.setItem("username",req.body.username);
    console.log(req.body);
    const username =req.body.username;
    res.send(`<form action='/send-message' method='POST'><input type='hidden' name='username' value='${username}'><input type='text' name='message'><button type='submit'>Send</button></form>`)
})
app.post('/send-message', (req, res) => {
    
    const username =req.body.username;
    const message = req.body.message;

    // const dir=path.join(__dirname,"upload")

    fs.writeFileSync("./upload/text.txt",username);
    res.send(fs.readFileSync("./upload/text.txt","utf-8"));
    
    // console.log("Prattellllllllllllllllllllllllllllllllllllll",dir);

    // console.log("Username:", username);
    // console.log("Message:", message);
    // res.send(`${username}:${message}`);
});

app.listen(3000);
