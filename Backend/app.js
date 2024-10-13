const express=require("express")
const app=express()
require("dotenv").config()
require("./conn/conn")
//creating port
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
}) ;