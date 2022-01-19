const mongoose =require('mongoose')


module.exports=()=>{
    return mongoose.connect("mongodb+srv://admin:admin@cluster0.q9ptl.mongodb.net/facebook")
}