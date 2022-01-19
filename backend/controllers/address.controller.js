const express = require("express");
const Address =require("../models/address.model")


const router = express.Router();







router.post("/:userid", async (req, res) => {
    try {
      const address = await Address.create({
        user_id:req.params.userid,  
        address: req.body.address,
        city:req.body.city,
        postalcode:req.body.postalcode,
        neighbour:req.body.neighbour,
        
      });

     
  
      console.log(address);
      return res.status(201).send(address);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });




  router.delete("/:userid",async(req,res)=>{
    try{
      const address=await Address.findOneAndDelete({user_id:req.params.userid}).lean().exec();
      console.log(address);
     return res.status(201).send(address,"this has deleted");
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid',async(req,res)=>{

    try{
      const address=await Address.findOneAndUpdate({user_id:req.params.userid},req.body,{new:true}).lean().exec()
        res.status(201).send(address)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })

    // get work for a user
   router.get('/:userid',async(req,res)=>{

        try{
          const address=await Address.findOne({user_id:req.params.userid}).lean().exec()
            res.status(201).send(address)
        }
        
        
        catch(e){
            res.status(500).json({message:e.message, status:"Failed"})
        }
        
        })    












module.exports = router;