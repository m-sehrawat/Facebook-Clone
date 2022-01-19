

const mongoose = require("mongoose")


const schoolSchema= mongoose.Schema({
user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
school:{type:String,required:true},
description:{type:String,required:false},
timeperiod:{type:String,required:false},




}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('school',schoolSchema)