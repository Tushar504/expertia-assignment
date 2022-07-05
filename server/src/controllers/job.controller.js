const Jobs=require("../models/jobs.model")
const express=require('express')
const router=express.Router()


router.get("/jobs",async(req,res)=>{
    try {   
        let page=req.query.page ||1
        let pagesize=req.query.pagesize||5
        const skip=(page-1)*pagesize
            const jobs=await Jobs.find().skip(skip).limit(pagesize).lean().exec()
            const total_pages=Math.ceil((await Jobs.find().countDocuments())/pagesize)
            return res.status(200).send({jobs,total_pages})
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }
})

router.get("/jobs/:text",async(req,res)=>{
        try {
            let page=req.query.page ||1
            let pagesize=req.query.pagesize||5
            const skip=(page-1)*pagesize
                const jobs=await Jobs.find({location:{$eq:req.params.text}}).skip(skip).limit(pagesize).lean().exec()
                const total_pages=Math.ceil((await Jobs.find({location:{$eq:req.params.text}}).countDocuments())/pagesize)
                return res.status(200).send({jobs,total_pages})
        } 
        catch (error) {
            return res.status(400).send(error.message)
        }
      
})


module.exports=router