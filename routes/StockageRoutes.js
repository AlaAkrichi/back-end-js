const express = require("express")
const router = express.Router()
const {getstockage,
    getAllstockages,
    addstockage,
    updatestockage,
    deletestockage}= require("../controller/StockegeController")


router.get("/",(req,res)=>{
    getAllstockages(req,res)
})


router.get("/:id",(req,res)=>{
    getstockage(req,res)
})

router.post("/",(req,res)=>{
    addstockage(req,res)
})

router.patch("/:id",(req,res)=>{
    updatestockage(req,res)
})

router.delete("/:id",(req,res)=>{
    deletestockage(req,res)
})



module.exports = router