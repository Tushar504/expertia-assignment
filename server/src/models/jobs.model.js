const mongoose=require("mongoose")

const jobsSchema=new mongoose.Schema({
    profile:{type:String,required:true},
    location:{type:String,required:true}
})

const Jobs=mongoose.model('job',jobsSchema)

module.exports=Jobs
