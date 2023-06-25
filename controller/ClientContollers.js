const asyncHandler = require("express-async-handler")
const Client = require("../models/Client")


const getClient = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const client = await Client.findOne({id})
    client  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(client)
})

const addClient = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const client = await Client.create({
            id : req.body.id,
            nom : req.body.nom,
            email:req.body.email,
            tel:req.body.tel,
            login:req.body.login,
            password:req.body.password,
            societe : req.body.societe,
            title : req.body.title
        })
        res.status(201).json(client)}
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
const getAllClients = asyncHandler(async (req,res)=>{
    const clients = await Client.find()
    res.status(200).json(clients)
})
const updateClient = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const client = await Client.findOneAndUpdate({id},req.body)
    res.status(200).json(client)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deleteClient = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const client = await Client.findOneAndDelete({id})
    if(!client){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
    getClient,
    getAllClients,
    addClient,
    updateClient,
    deleteClient
}