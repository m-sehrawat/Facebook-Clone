

const mongoose = require("mongoose")


const placeSchema= mongoose.Schema({
user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
placelived:{type:String,required:false},
currenttown:{type:String,required:true},
movedon:{type:String,required:false},




}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('place',placeSchema)