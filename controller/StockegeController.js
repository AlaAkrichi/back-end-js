const asyncHandler = require("express-async-handler")
const Stockage = require("../models/Stockage")


const getstockage = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const stockage = await Stockage.findOne({id}).populate("machine")
    stockage  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(stockage)
})

const addstockage = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const stockage = await Stockage.create({
            id : req.body.id,
            libelle:req.body.libelle,
            type_disque:req.body.type_disque,
            capacite:parseInt(req.body.capacite),
            machine:req.body.machine
        })
        res.status(201).json(stockage)}
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
const getAllstockages = asyncHandler(async (req,res)=>{
    const stockages = await Stockage.find().populate("machine")
    res.status(200).json(stockages)
})
const updatestockage = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const stockage = await Stockage.findOneAndUpdate({id},req.body)
    res.status(200).json(stockage)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deletestockage = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const stockage = await Stockage.findOneAndDelete({id})
    if(!stockage){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
    getstockage,
    getAllstockages,
    addstockage,
    updatestockage,
    deletestockage
}