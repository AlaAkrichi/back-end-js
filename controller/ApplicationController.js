const asyncHandler = require("express-async-handler")
const Application = require("../models/Application")


const getApplication = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const app = await Application.findOne({id}).populate("client")
    app  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(app)
})

const addApplication = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const app = await Application.create({
            id : req.body.id,
            libelle : req.body.libelle,
            nom_app:req.body.nom_app,
            version:req.body.version,
            client:req.body.client
        })
        res.status(201).json(app)}
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
const getAllApplications = asyncHandler(async (req,res)=>{
    const app = await Application.find().populate("client")
    res.status(200).json(app)
})
const updateApplication = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const app = await Application.findOneAndUpdate({id},req.body)
    res.status(200).json(app)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteApplication = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const app = await Application.findOneAndDelete({id})
    if(!app){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
getAllApplications,getApplication,addApplication,updateApplication,deleteApplication
}