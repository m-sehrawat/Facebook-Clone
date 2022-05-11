const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

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

const groupcontroller = require("./controllers/group.controller")

const commentcontroller = require("./controllers/comment.controller")

// profpic/
app.post("/register", register)
app.use("/profpic", profpiccontroller)

app.use("/coverpic", coverpiccontroller)

app.use("/comment", commentcontroller)
app.use("/search", searchcontroller)

app.use("/groups", groupcontroller)
app.use("/album", albumcontroller)
app.use("/story", storycontroller)
app.use("/user", usercontroller)
app.use("/post", postcontroller)

app.post("/login", login)


const connect = require('./configs/db');

const port = process.env.PORT || 3000

app.listen(1234, async () => {
  await connect()
  console.log(`Server running at port 1234`);
})