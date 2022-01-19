const express = require("express");
const Place =require("../models/placelived.model")


const router = express.Router();





router.post("/:userid", async (req, res) => {
    try {
      const place = await Place.create({
        user_id:req.params.userid,  
        placelived: req.body.placelived,
        currenttown: req.body.currenttown,
        movedon:req.body.city,
        
        
      });

     
  
      console.log(place);
      return res.status(201).send(place);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });




  router.delete("/:userid",async(req,res)=>{
    try{
      const place=await Place.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(place);
     return res.status(201).send(place,"this has deleted");
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',async(req,res)=>{

    try{
      const place=await Place.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(place)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

    // get work for a user
   router.get('/:userid',async(req,res)=>{

        try{
          const place=await Place.findOne({user_id:req.params.userid}).lean().exec()
            res.status(201).send(place)
        }
        
        
        catch(e){
            res.status(500).json({message:e.message, status:"Failed"})
        }
        
        })    












module.exports = router;