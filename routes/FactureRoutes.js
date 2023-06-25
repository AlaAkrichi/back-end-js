const express = require("express")
const router = express.Router()
const {getAllFacture,getFacture,updateFacture,deleteFacture,addFacture }= require("../controller/FactureControllers")

router.get("/",(req,res)=>{
    getAllFacture(req,res)
})


router.get("/:id",(req,res)=>{
    getFacture(req,res)
})

router.post("/",(req,res)=>{
    addFacture(req,res)
})

router.patch("/:id",(req,res)=>{
    updateFacture(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteFacture(req,res)
})



module.exports = router