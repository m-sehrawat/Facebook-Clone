const app=require("./index")

const connect=require('./configs/db');


app.listen(12456,async()=>{
    await connect()
    console.log("listening to port 123456")
})