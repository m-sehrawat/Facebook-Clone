const express=require('express');
const {register,login}=require("./controllers/auth.controller")
const app=express()

app.use(express.json())

app.post("register",register)


app.post("/login",login)
module.exports=app;