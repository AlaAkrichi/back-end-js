const asyncHandler = require("express-async-handler")
const Machine = require("../models/Machine")


const getmachine = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const machine = await Machine.findOne({id}).populate("client")
    machine  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(machine)
})

const addmachine= asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const machine = await Machine.create({
            id : req.body.id,
            libelle : req.body.libelle,
            os:req.body.os,
            ip:req.body.ip,
            client:req.body.client
            })
        res.status(201).json(machine)}
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
const getAllmachine = asyncHandler(async (req,res)=>{
    const machines = await Machine.find().populate("client")
    res.status(200).json(machines)
})
const updatemachine = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const machine = await Machine.findOneAndUpdate({id},req.body)
    res.status(200).json(machine)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deletemachine= asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const machine = await Machine.findOneAndDelete({id})
    if(!machine){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllmachine,getmachine,updatemachine,deletemachine,addmachine
}