const mongoose=require("mongoose")

const CartSchema=new mongoose.Schema({
     jobID:{type:mongoose.Schema.Types.ObjectId,ref:"job",required:true},
     userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
})

const Cart=mongoose.model('cart',CartSchema)

module.exports=Cart
