const express = require('express')
const mysql=require("mysql");
const cors  = require("cors");
const app= express();

app.use(express.json());
app,use(express.static(path.join(__dirname+"/public")));
app.use(cors());

const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database:"music" 
    });

app.post("/register", (req,res) => {

    const username =req.body.username
    const passw =req.body.passw

    db.query("INSERT INTO signup (username,passw) VALUES (?,?)" ,[username,passw] , (err,result) => {
        console.log(err);
    }
    );});

app.post("/login", (req,res) => {

    const username =req.body.username
    const passw =req.body.passw

    db.query("SELECT *  FROM signup WHERE username=? AND passw =?" ,
    [username,passw] , 
    (err,result) => {
        if (err){
          
        res.send({err :err})  //if there is error it will be sent to front end
    }
        if (result.length>0){
            res.send({message :"hello welcom"});
   

        }
        else {
            res.send({message :"wrong pass"});
          
          
        }
    });
});





app.listen(3001, () => {
  console.log("running server");
})