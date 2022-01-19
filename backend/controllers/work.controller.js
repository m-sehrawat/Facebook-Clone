const express = require("express");
const Work =require("../models/work.model")


const router = express.Router();







router.post("/:userid", async (req, res) => {
    try {
      const work = await Work.create({
        user_id:req.params.userid,  
        company: req.body.company,
        position:req.body.position,
        city:req.body.position,
        description:req.body.description,
        timeperiod:req.body.timeperiod
      });
  
      console.log(work);
      return res.status(201).send(work);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });




  router.delete("/:userid",async(req,res)=>{
    try{
      const work=await Work.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(work);
     return res.status(201).send(work,"this has deleted");
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',async(req,res)=>{

    try{
      const work=await Work.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(work)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

    // get work for a user
   router.get('/:userid',async(req,res)=>{

        try{
          const work=await Work.findOne({user_id:req.params.userid}).lean().exec()
            res.status(201).send(work)
        }
        
        
        catch(e){
            res.status(500).json({message:e.message, status:"Failed"})
        }
        
        })    












module.exports = router;