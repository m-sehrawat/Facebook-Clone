

const mongoose = require("mongoose")


const storySchema= mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
title:{type:String,required:true},
img:{type:String,required:false},
textstory:{type:String,required:false}


}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('story',storySchema)