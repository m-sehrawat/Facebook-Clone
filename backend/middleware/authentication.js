const jwt=require("jsonwebtoken")
require("dotenv").config();


const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_ACCESS_KEY)

        // if(err) return reject(err);
        return resolve(token);
    })
    
    
    
}


module.exports= async(req,res,next)=>{
   //if we receive the bearer token in header
   const bearerToken=req?.headers?.authorization
 
 
   // if not receive or token is not a bearer toekn 
if(!bearerToken || !bearerToken.startsWith('Bearer ')) return res.status(400).json({
    status:"failed",
    message:"Please provide valid token"
})

//else we will try to get the user from token
const token=bearerToken.split(" ")[1]
//if no user found then throuw err
let user;
try{
user= await verifyToken(token)
}
catch(e){
    return res.status(400).json({
        status:"failed",
        message:"Please valid token user"
    })

}
//else attach the user to the req
if(!user){
    return res.status(400).json({
        status:"failed",
        message:"Please valid token user"
    })

}


req.user=user
//return next
return next()
} 


