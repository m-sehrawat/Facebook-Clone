const express=require('express');


const app=express()
app.use(express.json())
const {register,login}=require("./controllers/auth.controller")
const albumcontroller=require("./controllers/album.controller")
const searchcontroller=require("./controllers/search.controller")
const storycontroller=require("./controllers/story.controller")
const usercontroller=require("./controllers/user.controller")
const postcontroller=require("./controllers/post.controller")
const workcontroller=require("./controllers/work.controller")


app.post("/register",register)
app.use("/search",searchcontroller)
app.use("/album",albumcontroller)
app.use("/story",storycontroller)
app.use("/user",usercontroller)
app.use("/post",postcontroller)
app.use("/work",workcontroller)
app.post("/login",login)
module.exports=app;