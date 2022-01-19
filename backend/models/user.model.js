const {Schema, model}= require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")

const userSchema= new Schema(
    {name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    album_ids : [{type: Schema.Types.ObjectId, 
        ref:"album",
        required: false}],
    stories_ids : [{type: Schema.Types.ObjectId, 
            ref:"story",
            required: false}],
    post_ids : [{type: Schema.Types.ObjectId, 
                ref:"post",
                required: false}],
    
    work_id:{type: Schema.Types.ObjectId, 
        ref:"work",
        required: false} ,
    university_id:{type: Schema.Types.ObjectId, 
        ref:"university",
        required: false},
    school_id:{type: Schema.Types.ObjectId, 
        ref:"school",
        required: false},
    place_id:{type: Schema.Types.ObjectId, 
        ref:"place",
        required: false},
    mobile:{type:String,required:false},
    address_id:{type: Schema.Types.ObjectId, 
        ref:"place",
        required: false},
    
    gender:    {type: String, required: true},
    birthdate:{type: String, required: true},
    birthyear:{type: String, required: true},
    interest:{type: String, required: false},
    language:[{type: String, required: false}],
    nicekname:{type: String, required: false},
    favrouritequotes:{type: String, required: false},
    aboutyou:{type: String, required: false},
    relationship:{type: String, required: false},
    prounounciation:{type: String, required: false},
    website:{type: String, required: false},
    sociallink:{type: String, required: false},
    hobbies : [{type: String, required: true}],

    friend_id:[{type: Schema.Types.ObjectId, 
        ref:"story",
        required: false}]

    ,
    friend_requests_ids:[{type: Schema.Types.ObjectId, 
        ref:"user",
        required: false}],

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