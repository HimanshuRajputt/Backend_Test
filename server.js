import express from "express"
import { ConnectDB } from "./config/db.js"

import { UserModel } from "./model/user.model.js"
import dotenv from "dotenv"
const app= express()

app.use(express.json())
 
dotenv.config()

app.get("/",(req,res)=>{
    res.status(200).json("Healthy")
})




//Pagianation 
app.get("/users", async (req, res) => {
    const {page_no,limit}= req.query
    // const limit= 3


  try {
    const users = await UserModel.find({},{name:1}).skip((page_no-1)*limit).limit(limit)
    res.status(200).json({users:users});
  } catch (error) {
    res.status(404).json({ message: "Users Not found...!" });
  }
});








app.get("/all-users", async (req,res)=>{

    try {
        const users = await UserModel.find() 
        res.status(200).json(users);  
    } catch (error) {
        res.status(404).json({message:'Users Not found...!'})
        
    }
})


app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`Server connect on Port No:${process.env.PORT}`);
})