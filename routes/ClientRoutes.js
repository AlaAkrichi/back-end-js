const express = require("express")
const router = express.Router()
const {getClient,getAllClients,addClient,updateClient,deleteClient}= require("../controller/ClientContollers")


router.get("/",(req,res)=>{
    getAllClients(req,res)
})


router.get("/:id",(req,res)=>{
    getClient(req,res)
})

router.post("/",(req,res)=>{
    addClient(req,res)
})

router.patch("/:id",(req,res)=>{
    updateClient(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteClient(req,res)
})



module.exports = router