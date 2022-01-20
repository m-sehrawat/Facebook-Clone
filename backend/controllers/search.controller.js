const User= require("../models/user.model")

const express=require('express');
const { syncIndexes } = require("../models/user.model");

const router=express.Router();



router.get("/:name",async(req,res)=>{

    try{

       
       
        let user = await User.find({firstName:req.params.name}).lean().exec()
       
       
         return  res.status(201).json(user)
       
       }
       
       catch(e){
           return res.status(500).json({message:e.message,status:"Failed"})
       }



})

module.exports=router