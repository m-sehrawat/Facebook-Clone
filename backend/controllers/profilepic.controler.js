const express = require("express");
const Profilepic =require("../models/profilePic.model")
const upload=require('../middleware/upload')

const router = express.Router();

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post("/:userid", upload.single("album_img"), async (req, res) => {

    


    try {
      const profpic = await Profilepic.create({
        user_id:req.params.userid,  
        
        img:req.file[0]
      });
  
      console.log(profpic)
      return res.status(201).send(profpic);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });


  router.get("/:userid",async(req,res)=>{
      try{
        const profpic=await Profilepic.findOne({ user_id: req.params.userid}).lean().exec();
        console.log(profpic);
       return res.status(201).send(profpic);
      }

      catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
      }
     
  })

  router.delete("/:userid",async(req,res)=>{
    try{
      const profpic=await Profilepic.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(profpic);
     return res.status(201).send(profpic);
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',async(req,res)=>{

    try{
      const profpic=await Profilepic.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(profpic)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })












module.exports = router;