const asyncHandler = require("express-async-handler")
const Users = require("../models/User")
const Client = require("../models/Client")

const login = asyncHandler(async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await Users.findOne({email}).populate("role")
        const client = await Client.findOne({email})
        if(!user && !client){
            return res.status(400).json({"message":"no user found"})
        }
        if(client){
            let passwordCorrect = password === client.password
            if(passwordCorrect){
                return res.status(200).json(client)
            }else{
                return res.status(400).json({"message":"no user found"})
            }
        }else if(user){
            let passwordCorrect = password === user.password
            if(passwordCorrect){
                return res.status(200).json(user)
            }else{
                return res.status(404).json({"message":"no user found"})
            }
        }
    }catch(exp){
        return  res.status(500).json({"message":"somthing went wrong" ,"erreeur":exp.message})
    }
    })
    

module.exports = {login}