const asyncHandler = require("express-async-handler")
const Abonnement = require("../models/Abonnement")


const getAbonnement = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const abonnement = await Abonnement.findOne({id}).populate("client")
    abonnement  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(abonnement)
})

const addAbonnemet= asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const abonnement = await Abonnement.create({
            id : req.body.id,
            libelle:req.body.libelle,
            client:req.body.client
        })
        res.status(201).json(abonnement)}
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
const getAllAbonnement = asyncHandler(async (req,res)=>{
    const abonnements = await Abonnement.find().populate("client")
    res.status(200).json(abonnements)
})
const updateAbonnement = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const abonnement = await Abonnement.findOneAndUpdate({id},req.body)
    res.status(200).json(abonnement)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteAbonnement= asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const abonnement = await Abonnement.findOneAndDelete({id})
    if(!abonnement){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllAbonnement,getAbonnement,updateAbonnement,deleteAbonnement,addAbonnemet
}