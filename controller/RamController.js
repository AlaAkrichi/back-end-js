const asyncHandler = require("express-async-handler")
const Ram = require("../models/Ram")


const getram = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const ram = await Ram.findOne({id}).populate("machine")
    ram  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(ram)
})

const addram = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const ram = await Ram.create({
            id : req.body.id,
            libelle:req.body.libelle,
            type_ram:req.body.type_ram,
            capacite:parseInt(req.body.capacite),
            machine:req.body.machine
        })
        res.status(201).json(ram)}
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
const getAllrams = asyncHandler(async (req,res)=>{
    const rams = await Ram.find().populate("machine")
    res.status(200).json(rams)
})
const updateram = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const ram = await Ram.findOneAndUpdate({id},req.body)
    res.status(200).json(ram)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteram = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const ram = await Ram.findOneAndDelete({id})
    if(!ram){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
    getram,
    getAllrams,
    addram,
    updateram,
    deleteram
}