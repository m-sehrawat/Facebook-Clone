const express=require('express');
const {register,login}=require("./controllers/auth.controller")
const app=express()
const albumcontroller=require("./controllers/album.controller")

app.use(express.json())

app.post("/register",register)

app.use("/album",albumcontroller)
app.post("/login",login)
module.exports=app;