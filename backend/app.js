const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


const profpiccontroller = require("./controllers/profilepic.controler")
const coverpiccontroller = require("./controllers/coverpic.controller")
const { register, login } = require("./controllers/auth.controller")
const albumcontroller = require("./controllers/album.controller")
const searchcontroller = require("./controllers/search.controller")
const storycontroller = require("./controllers/story.controller")
const usercontroller = require("./controllers/user.controller")
const postcontroller = require("./controllers/post.controller")
const workcontroller = require("./controllers/work.controller")
const universityconstroller = require("./controllers/university.controller")
const groupcontroller = require("./controllers/group.controller")
const addresscontroller = require("./controllers/address.controller")
const placecontroller = require("./controllers/placelived.controller")
const commentcontroller = require("./controllers/comment.controller")

// profpic/
app.post("/register", register)
app.use("/profpic", profpiccontroller)

app.use("/coverpic", coverpiccontroller)
app.use("/place", placecontroller)
app.use("/comment", commentcontroller)
app.use("/search", searchcontroller)
app.use("/address", addresscontroller)
app.use("/university", universityconstroller)
app.use("/groups", groupcontroller)
app.use("/album", albumcontroller)
app.use("/story", storycontroller)
app.use("/user", usercontroller)
app.use("/post", postcontroller)
app.use("/work", workcontroller)
app.post("/login", login)


// module.exports = app;

const connect = require('./configs/db');

const port = process.env.PORT || 3000

app.listen(port, async () => {
  await connect()
  console.log(`Server running at port ` + port);
})