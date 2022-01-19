

const mongoose = require("mongoose")


const workSchema= mongoose.Schema({
user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
company:{type:String,required:true},
position:{type:String,required:true},
city:{type:String,required:true},
timeperiod:{type:String,required:true},



}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('work',workSchema)