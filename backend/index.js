const express=require('express');


const app=express()
app.use(express.json())
const profpiccontroller=require("./controllers/profilepic.controler")
const coverpiccontroller=require("./controllers/coverpic.controller")
const {register,login}=require("./controllers/auth.controller")
const albumcontroller=require("./controllers/album.controller")
const searchcontroller=require("./controllers/search.controller")
const storycontroller=require("./controllers/story.controller")
const usercontroller=require("./controllers/user.controller")
const postcontroller=require("./controllers/post.controller")
const workcontroller=require("./controllers/work.controller")
const universityconstroller=require("./controllers/university.controller")
const schoolcontroller=require("./controllers/school.controller")
const addresscontroller=require("./controllers/address.controller")
const placecontroller=require("./controllers/placelived.controller")
const commentcontroller=require("./controllers/comment.controller")


app.post("/register",register)
app.use("/profpic",profpiccontroller)

app.use("/coverpic",coverpiccontroller)
app.use("/place",placecontroller)
app.use("/comment",commentcontroller)
app.use("/search",searchcontroller)
app.use("/address",addresscontroller)
app.use("/university",universityconstroller)
app.use("/school",schoolcontroller)
app.use("/album",albumcontroller)
app.use("/story",storycontroller)
app.use("/user",usercontroller)
app.use("/post",postcontroller)
app.use("/work",workcontroller)
app.post("/login",login)
module.exports=app;