const express=require('express');

require("dotenv").config();

const User= require("../models/user.model")
 

const jwt=require("jsonwebtoken")


const newToken=(user)=>{

    return jwt.sign({user:user},process.env.JWT_ACCESS_KEY)

};



const register=async(req,res)=>{

   

try{

 //check if the email address alredy exist

 let user = await User.findOne({email:req.body.email}).lean().exec()
 //if it already exist then throw err

 if(user) 
    return res.status(400).json({status:"failed",message:"This email already exist Please login or get a new email"})
 //else we will create the user
        
     user = await User.create(req.body)
 //we will hash the password
    

 //we will create the token
   const token=newToken(user)
 //return the user and the token


  return  res.status(201).json({user,token})

}

catch(e){
    return res.status(500).json({message:e.message,status:"Failed"})
}
}









const login=async(req,res)=>{

    

try{

  //check if email wxist

  let user= await User.findOne({email:req.body.email})
  let pass= user.password;
 if(!user)
    return res.status(400).json({
        status:"failed",
        message:"Please provide correct cred"
    })

 //else math then password

 function checkPassword(pass,password){
   if(pass===password){return true}

   return false
 }
 
 
 //if password not match then throw error
 const match=checkPassword(pass,req.body.password)
 
 
 //if it matched then create the toke 

 if(!match)
 return res.status(400).json({
     status:"failed",
     message:"Please provide correct email id"
 })

const token =newToken(user);

 // return the user and the token
 return res.status(201).json({user,token})
}

catch(e){
    return res.status(500).json({message:e.message,status:"Failed"})
}
}


module.exports={register,login, newToken}