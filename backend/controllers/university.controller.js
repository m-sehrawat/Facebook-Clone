const express = require("express");
const University =require("../models/university.model");



const router = express.Router();





router.post("/:userid", async (req, res) => {
    try {
      const uni = await University.create({
        user_id:req.params.userid,  
        school: req.body.school,
        description: req.body.description,
        course:req.body.course,
        degree:req.body.degree,
        
        
      });

     
  
      console.log(uni);
      return res.status(201).send(uni);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });




  router.delete("/:userid",async(req,res)=>{
    try{
      const uni=await University.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(uni);
     return res.status(201).send(uni,"this has deleted");
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',async(req,res)=>{

    try{
      const uni=await University.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(uni)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

    // get work for a user
   router.get('/:userid',async(req,res)=>{

        try{
          const uni=await University.findOne({user_id:req.params.userid}).lean().exec()
            res.status(201).send(uni)
        }
        
        
        catch(e){
            res.status(500).json({message:e.message, status:"Failed"})
        }
        
        })    












module.exports = router;