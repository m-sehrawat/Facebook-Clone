const {Schema, model}= require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")

const userSchema= new Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    

},
{
    versionKey:false,
    timestamps:true
}



);


// userSchema.pre("save",function (next){
//     if(!this.isModified("password")) return next();
    
//     bcrypt.hash(this.password,10,(err,hash)=>{

//         this.password=hash;
//         return next()

//     });
    
    


// });


// userSchema.methods.checkPassword=function (password){
   

//     return new Promise((resolve,reject)=>{


//         bcrypt.compare(password,this.password,function(err,res){

//             if(err) return reject(err);


//             return resolve(res)

//         });


//     })



   


// }


module.exports=model('user',userSchema)