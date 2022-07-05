const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://expertia:tush98@cluster0.xkn0n.mongodb.net/job-board?retryWrites=true&w=majority")
}
module.exports=connect