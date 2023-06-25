const express = require("express")
const router = express.Router()
const {getAllmachine,getmachine,updatemachine,deletemachine,addmachine }= require("../controller/MachinesController")

router.get("/",(req,res)=>{
    getAllmachine(req,res)
})


router.get("/:id",(req,res)=>{
    getmachine(req,res)
})

router.post("/",(req,res)=>{
    addmachine(req,res)
})

router.patch("/:id",(req,res)=>{
    updatemachine(req,res)
})

router.delete("/:id",(req,res)=>{
    deletemachine(req,res)
})



module.exports = router