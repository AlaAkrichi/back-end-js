const asyncHandler = require("express-async-handler")
const Role = require("../models/Role")


const getRole = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const role = await Role.findOne({id})
    role  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(role)
})

const addRole = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const role = await Role.create({
            id : req.body.id,
            libelle : req.body.libelle,
        })
        res.status(201).json(role)}
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
const getAllRoles = asyncHandler(async (req,res)=>{
    const roles = await Role.find()
    res.status(200).json(roles)
})
const updateRole = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const role = await Role.findOneAndUpdate({id},req.body)
    res.status(200).json(role)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteRole = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const role = await Role.findOneAndDelete({id})
    if(!role){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
    getRole,
    getAllRoles,
    addRole,
    updateRole,
    deleteRole
}