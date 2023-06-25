const asyncHandler = require("express-async-handler")
const Facture = require("../models/Facture")


const getFacture = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const facture = await Facture.findOne({id}).populate("client")
    facture  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(facture)
})

const addFacture= asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const facture = await Facture.create({
            id : req.body.id,
            dateCreation:req.body.dateCreation,
            datePaiement:req.body.datePaiement,
            etatPaiement : req.body.etatPaiement,
            montant:parseFloat(req.body.montant),
            client:req.body.client
        })
        res.status(201).json(facture)}
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
const getAllFacture = asyncHandler(async (req,res)=>{
    const factures = await Facture.find().populate("client")
    res.status(200).json(factures)
})
const updateFacture = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const facture = await Facture.findOneAndUpdate({id},req.body)
    res.status(200).json(facture)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteFacture = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const facture = await Facture.findOneAndDelete({id})
    if(!facture){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllFacture,getFacture,updateFacture,deleteFacture,addFacture
}