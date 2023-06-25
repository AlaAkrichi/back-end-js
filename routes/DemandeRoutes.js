const express = require("express")
const router = express.Router()
const {getAllDemande,getDemande,updateDemande,deleteDemande,addDemande} = require("../controller/DemandeControllers")

router.get("/",(req,res)=>{
    getAllDemande(req,res)
})


router.get("/:id",(req,res)=>{
    getDemande(req,res)
})

router.post("/",(req,res)=>{
    addDemande(req,res)
})

router.patch("/:id",(req,res)=>{
    updateDemande(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteDemande(req,res)
})



module.exports = router