const asyncHandler = require("express-async-handler")
const User = require("../models/User")


const getUser = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const user = await User.findOne({id}).populate("role")
    user  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(user)
})

const addUser = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const user = await User.create({
            id : req.body.id,
            nom:req.body.nom,
            email:req.body.email,
            tel : req.body.tel,
            login:req.body.login,
            password:req.body.password,
            role:req.body.role
        })
        res.status(201).json(user)}
        catch (erreur){
            switch(erreur.code){
                case 11000 :
                    res.status(500).json({"message" : "id maybe be duplicated","erreur":erreur.message})
                    break;
                default:
                    res.status(500).json({"message":"somting went wrong","erruer":erreur.message})
            }
        }
    }else{
        res.status(400).json({"message":"required a body "}) 
    }
})
const getAllUsers = asyncHandler(async (req,res)=>{
    const users = await User.find().populate("client")
    res.status(200).json(users)
})
const updateUser = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const user = await User.findOneAndUpdate({id},req.body)
    res.status(200).json(user)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteUser = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const user = await User.findOneAndDelete({id})
    if(!user){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllUsers,getUser,updateUser,deleteUser,addUser
}