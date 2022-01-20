

const mongoose = require("mongoose")


const coverpicSchema= mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   

img:{type:String,required:true}


}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('coverpic',coverpicSchema)