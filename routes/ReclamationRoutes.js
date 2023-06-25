const express = require("express")
const router = express.Router()
const {getAllReclamations,getReclamtion, addReclamation,updateReclamation,deletReclamation}= require("../controller/ReclamationController")

router.get("/",(req,res)=>{
    getAllReclamations(req,res)
})


router.get("/:id",(req,res)=>{
    getReclamtion(req,res)
})

router.post("/",(req,res)=>{
    addReclamation(req,res)
})

router.patch("/:id",(req,res)=>{
    updateReclamation(req,res)
})

router.delete("/:id",(req,res)=>{
    deletReclamation(req,res)
})



module.exports = router