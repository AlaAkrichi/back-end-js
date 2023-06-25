const asyncHandler = require("express-async-handler")
const Reclamation = require("../models/Reclamation")


const getReclamtion = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const reclamation = await Reclamation.findOne({id}).populate("client").populate("user")
    reclamation  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(reclamation)
})

const addReclamation= asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const reclamation = await Reclamation.create({
            id : req.body.id,
            titre:req.body.titre,
            text:req.body.text,
            dateCreation : req.body.dateCreation,
            dateTraitement:req.body.dateTraitement,
            etat:req.body.etat,
            client:req.body.client,
            user:req.body.user
        })
        res.status(201).json(reclamation)}
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
const getAllReclamations = asyncHandler(async (req,res)=>{
    const reclamations = await Reclamation.find().populate("client").populate("user")
    res.status(200).json(reclamations)
})
const updateReclamation = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const reclamation = await Reclamation.findOneAndUpdate({id},req.body)
    res.status(200).json(reclamation)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deletReclamation = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const reclamation = await Reclamation.findOneAndDelete({id})
    if(!reclamation){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllReclamations,getReclamtion,updateReclamation,deletReclamation,addReclamation
}