

const mongoose = require("mongoose")


const universitySchema= mongoose.Schema({
user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
school:{type:String,required:true},
description:{type:String,required:true},
course:{type:String,required:true},
degree:{type:String,required:true},



}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('university',universitySchema)