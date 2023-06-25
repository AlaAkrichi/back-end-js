const express = require("express")
const router = express.Router()
const {getcpu,
    getAllcpus,
    addcpu,
    updatecpu,
    deletecpu}= require("../controller/CpuController")


router.get("/",(req,res)=>{
    getAllcpus(req,res)
})


router.get("/:id",(req,res)=>{
    getcpu(req,res)
})

router.post("/",(req,res)=>{
    addcpu(req,res)
})

router.patch("/:id",(req,res)=>{
    updatecpu(req,res)
})

router.delete("/:id",(req,res)=>{
    deletecpu(req,res)
})



module.exports = router