

const mongoose = require("mongoose")


const addressSchema= mongoose.Schema({
user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required: true},
   
address:{type:String,required:true},
city:{type:String,required:false},
postalcode:{type:String,required:false},
neighbour:{type:String,required:false},




}
,
{
    versionKey:false,
    timestamps:true
}

)

module.exports = mongoose.model('address',addressSchema)