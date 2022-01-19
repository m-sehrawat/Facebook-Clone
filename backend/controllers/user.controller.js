const User= require("../models/user.model")

const express=require('express');


const router=express.Router();


//get user by id
router.get("/:id",async(req,res)=>{

    try{

        
       
        let user = await User.findById(req.params.id).lean().exec()
       
       
         return  res.status(201).json(user)
       
       }
       
       catch(e){
           return res.status(500).json({message:e.message,status:"Failed"})
       }



})

router.get("/",async(req,res)=>{

    try{

        
       
        let user = await User.find().lean().exec()
       
       
         return  res.status(201).json(user)
       
       }
       
       catch(e){
           return res.status(500).json({message:e.message,status:"Failed"})
       }



})

module.exports=router