    const asyncHandler = require("express-async-handler")
const Platforme = require("../models/Platforme")


const gePlatforme = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const plat = await Platforme.findOne({id}).populate("client")
    plat  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(plat)
})

const addPlatform = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const plat = await Platforme.create({
            id : req.body.id,
            libelle : req.body.libelle,
            nom_logiciel:req.body.nom_logiciel,
            version:req.body.version,
            client:req.body.client
        })
        res.status(201).json(plat)}
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
const getAllPlatfroms = asyncHandler(async (req,res)=>{
    const plat = await Platforme.find().populate("client")
    res.status(200).json(plat)
})
const updatePlatform = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const plat = await Platforme.findOneAndUpdate({id},req.body)
    res.status(200).json(plat)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deletePlatform = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const plat = await Platforme.findOneAndDelete({id})
    if(!plat){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllPlatfroms,gePlatforme,addPlatform,updatePlatform,deletePlatform
}