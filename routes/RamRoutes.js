const  {    getram,
    getAllrams,
    addram,
    updateram,
    deleteram} = require("../controller/RamController")
    const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    getAllrams(req,res)
})


router.get("/:id",(req,res)=>{
    getram(req,res)
})

router.post("/",(req,res)=>{
    addram(req,res)
})

router.patch("/:id",(req,res)=>{
    updateram(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteram(req,res)
})



module.exports = router