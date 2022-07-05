const express=require("express")
const connect=require("./configs/db")
const app=express()
const { login } = require("./controllers/auth.controllers");
var cors = require('cors')
app.use(cors())
app.use(express.json())
const jobsController=require("./controllers/job.controller")
const CartController=require("./controllers/cart.controller");

app.get("/",async(req,res)=>{
  try {
      res.send("hello world")
  } 
  catch (error) {
      res.send(error)
  }
})

app.use("/getjobs",jobsController)
app.use('/getcart',CartController)
app.post( "/login",login);
app.listen(process.env.PORT||1200,async()=>{
    try {
        console.log("listening on port 1200")
        return connect()
    } catch (error) {
        console.log(error)
    }
})
module.exports=app