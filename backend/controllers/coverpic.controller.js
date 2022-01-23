const express = require("express");
const Coverpic =require("../models/coverphoto.model")
const upload=require('../middleware/upload')

const router = express.Router();

const bodyParser = require('body-parser')


router.post("/:userid", upload.single("cpic"), async (req, res) => {


    try {
      const coverpic = await Coverpic.create({
        user_id:req.params.userid,  
        
        img:req.file.filename
      });
  
      console.log(coverpic)
      return res.status(201).send(coverpic);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });


  router.get("/:userid",async(req,res)=>{
      try{
        const covpic=await Coverpic.findOne({ user_id: req.params.userid}).lean().exec();
        console.log(covpic);
       return res.status(201).send(covpic);
      }

      catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
      }
     
  })

  router.delete("/:userid",async(req,res)=>{
    try{
      const covpic=await Coverpic.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(covpic);
     return res.status(201).send(covpic);
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',upload.single("cpic"),async(req,res)=>{

    try{
      const covpic=await Coverpic.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(covpic)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })












module.exports = router;