

const mongoose = require("mongoose")


const postSchema= mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
title:{type:String,required:true},
img:{type:String,required:false},


    likes:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: false}
    ]

}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('album',postSchema)