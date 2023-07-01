const asyncHandler = require("express-async-handler")
const Demande = require("../models/Demande")


const getDemande = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const demande = await Demande.findOne({id}).populate("client")
    demande  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(demande)
})

const addDemande = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const demande = await Demande.create({
            id : req.body.id,
            dateCreation:req.body.dateCreation,
            dateTraitement:req.body.dateTraitement,
            etat : req.body.etat,
            client:req.body.client
        })
        res.status(201).json(demande)}
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
const getAllDemande = asyncHandler(async (req,res)=>{
    const demandes = await Demande.find().populate("client")
    res.status(200).json(demandes)
})
const updateDemande = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const demande = await Demande.findOneAndUpdate({id},req.body)
    res.status(200).json(demande)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteDemande = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const demande = await Demande.findOneAndDelete({id})
    if(!demande){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllDemande,getDemande,updateDemande,deleteDemande,addDemande
}