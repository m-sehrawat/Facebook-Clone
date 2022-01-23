const express = require("express");
const Story =require("../models/story.model")
const upload=require('../middleware/upload')

const router = express.Router();


    


router.post("/:userid", upload.any("story_img"), async (req, res) => {

    try {
      const story = await Story.create({
        user_id:req.params.userid,  
        title: req.body.title,
        img:req.file.path
      });
  
      console.log(story);
      return res.status(201).send(story);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });


  router.get("/:userid",upload.any("story_img"),async(req,res)=>{
      try{
        const story=await Story.find({ user_id: req.params.userid}).lean().exec();
        console.log(story);
        res.render("index",{
            story,
        });
       return res.status(201).send(story);
      }

      catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
      }
     
  });

  router.get("/:userid/storyid",upload.any("story_img"),async(req,res)=>{
    try{
      const story=await Story.findById(req.params.storyid).lean().exec();
      console.log(story);
      res.render("index",{
        story,
       });
     return res.status(201).send(story);
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
});






  router.delete("/:userid/:storyid",async(req,res)=>{
    try{
      const story=await Story.findByIdAndDelete(req.params.storyid).lean().exec();
      console.log(story);
     return res.status(201).send(story);
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
});

router.patch('/:userid/:storyid',async(req,res)=>{

    try{
      const story=await Story.findByIdAndUpdate(req.params.storyid,req.body,{new:true}).lean().exec()
        res.status(201).send(story)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

   










module.exports = router;