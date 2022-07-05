const Cart=require("../models/jobCart")
const express=require('express')
const router=express.Router()


router.get("/carts/:id",async(req,res)=>{
    try {   
        let page=req.query.page ||1
        let pagesize=req.query.pagesize||5
        
        const skip=(page-1)*pagesize
            const cart=await Cart.find({userID:{$eq:req.params.id}}).populate('jobID').skip(skip).limit(pagesize).lean().exec()
            const total_pages=Math.ceil((await Cart.find({userID:{$eq:req.params.id}}).countDocuments())/pagesize)
            return res.status(200).send({cart,total_pages})
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
})

router.post("/carts",async(req,res)=>{
    try {
           let cart=await Cart.findOne({jobID:{$eq:req.body.jobID}})
          
           if(!cart){
             let car=await Cart.create(req.body)
           
            return res.status(200).send({message:"Applied"})
           
            
           }
           else{
            return res.send({message:'you already applied'})
           }
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
})


module.exports=router