const express = require("express");
const Post =require("../models/post.model")
const upload=require('../middleware/upload')

const router = express.Router();

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get("/",async(req,res)=>{
  try{
    const posts=await Post.find( ).lean().exec();
    console.log(posts);
   return res.status(201).send(posts);
  }

  catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
 
})



router.post("/:userid", upload.single("post_img"), async (req, res) => {

    try {
      const post = await Post.create({
        user_id:req.params.userid,  
        title: req.body.title,
        username:req.body.username,
        userimg:req.body.userimg,
        img:req.file.filename,
        likes:req.body.likes,
        comments:req.body.comments
        
      });
  
      console.log(post);
      return res.status(201).send(post);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

//get all post of a user
  router.get("/:userid",async(req,res)=>{
      try{
        const posts=await Post.find({ user_id: req.params.userid}).lean().exec();
        console.log(posts);
       return res.status(201).send(posts);
      }

      catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
      }
     
  })











  router.delete("/:userid/:postid",async(req,res)=>{
    try{
      const post=await Post.findByIdAndDelete(req.params.postid).lean().exec();
      console.log(post);
     return res.status(201).send(post);
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid/:postid',upload.single("post_img"),async(req,res)=>{

    try{
      const album=await Post.findByIdAndUpdate(req.params.postid,req.body,{new:true}).lean().exec()
        res.status(201).send(album)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })












module.exports = router;