const express = require ("express");
const app = express();

app.use(express.json());

const users = [];

function GeneratorToken(){
    let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let token = " ";
    for(let i = 0 ; i < 32 ; i++){
        token += users[Math.floor(Math.random()*options.length)]
    }
    return token ;
}

app.post("/signup",(req,res) =>{
    const username = req.body.username();
    const password = req.body.password();

    users.push({
        username : username ,
        password : password ,
    });

    res({
        message:"You have signed in succesfully"
    })


});

app.post("/signup",(req,res)=>{
    const username = req.body.username();
    const password = req.body.password();
    //abit of changes here ->>>
    if(username && password){
        const token = GeneratorToken();
        users.push({
            username : username , 
            password : password ,
            token : token 
        })
    }
    else{
        res.status(404).send({
            message : "Please enter username and password",
        });
    }
});

app.listen(3000);