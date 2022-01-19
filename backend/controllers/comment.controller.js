const express = require("express");
const Comment =require("../models/comment.model")
const upload=require('../middleware/upload')

const router = express.Router();

const bodyParser = require('body-parser')





router.post("/:userid", async (req, res) => {
    try {
      const comment = await Comment.create({
        user_id:req.params.userid,  
        title: req.body.title,
        post_id:req.body.post_id
      });
  
      console.log(comment);
      return res.status(201).send(comment);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });




  router.delete("/:userid/:commentid",async(req,res)=>{
    try{
      const comment=await Comment.findByIdAndDelete(req.params.commentid).lean().exec();
      console.log(comment);
     return res.status(201).send(comment,"this has deleted");
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid/:commentid',async(req,res)=>{

    try{
      const comment=await Comment.findByIdAndUpdate(req.params.commentid,req.body,{new:true}).lean().exec()
        res.status(201).send(comment)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

    // get all the comment on a post
   router.get('/:post_id',async(req,res)=>{

        try{
          const comment=await Comment.find({post_id:req.params.post_id}).lean().exec()
            res.status(201).send(comment)
        }
        
        
        catch(e){
            res.status(500).json({message:e.message, status:"Failed"})
        }
        
        })    












module.exports = router;