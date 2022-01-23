

const mongoose = require("mongoose")


const coverpicSchema= mongoose.Schema({
    user_id:{type:String,required:true},
   

   img:{type:String,required:false}


}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('coverpic',coverpicSchema)