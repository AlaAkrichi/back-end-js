const express = require("express")
const router = express.Router()
const {
    getAllAbonnement,getAbonnement,updateAbonnement,deleteAbonnement,addAbonnemet
    } = require("../controller/AbonnementController")

router.get("/",(req,res)=>{
    getAllAbonnement(req,res)
})


router.get("/:id",(req,res)=>{
    getAbonnement(req,res)
})

router.post("/",(req,res)=>{
    addAbonnemet(req,res)
})

router.patch("/:id",(req,res)=>{
    updateAbonnement(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteAbonnement(req,res)
})



module.exports = router