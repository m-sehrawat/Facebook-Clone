const express=require('express');
const {register,login}=require("./controllers/auth.controller")
const app=express()
const albumcontroller=require("./controllers/album.controller")
const searchcontroller=require("./controllers/search.controller")
const storycontroller=require("./controllers/story.controller")
const usercontroller=require("./controllers/user.controller")
const postcontroller=require("./controllers/post.controller")
app.use(express.json())

app.post("/register",register)
app.use("/search",searchcontroller)
app.use("/album",albumcontroller)
app.use("/story",storycontroller)
app.use("/user",usercontroller)
app.use("/post",postcontroller)
app.post("/login",login)
module.exports=app;