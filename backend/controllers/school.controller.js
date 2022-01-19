const express = require("express");
const School =require("../models/school.model")


const router = express.Router();





router.post("/:userid", async (req, res) => {
    try {
      const school = await School.create({
        user_id:req.params.userid,  
        school: req.body.school,
        description: req.body.description,
        timeperiod:req.body.timeperiod,
        
        
      });

     
  
      console.log(school);
      return res.status(201).send(school);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });




  router.delete("/:userid",async(req,res)=>{
    try{
      const school=await School.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(school);
     return res.status(201).send(school,"this has deleted");
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',async(req,res)=>{

    try{
      const school=await School.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(school)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

    // get work for a user
   router.get('/:userid',async(req,res)=>{

        try{
          const school=await School.findOne({user_id:req.params.userid}).lean().exec()
            res.status(201).send(school)
        }
        
        
        catch(e){
            res.status(500).json({message:e.message, status:"Failed"})
        }
        
        })    












module.exports = router;