const User=require("../models/user.model")




const login=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"email id not registered"})

        }
        const match=user.checkpassword(req.body.password)
 
        if(match){
         

           return res.status(200).send({user,message:"success"})
        }

  return res.status(400).send({message:"incorrect password"})
        
    
} 
    catch (error) {
        return res.status(400).send(error.message)
    }
}



module.exports={login}