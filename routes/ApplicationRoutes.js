const {getAllApplications,getApplication,addApplication,updateApplication,deleteApplication}= require("../controller/ApplicationController")
const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    getAllApplications(req,res)
})


router.get("/:id",(req,res)=>{
    getApplication(req,res)
})

router.post("/",(req,res)=>{
    addApplication(req,res)
})

router.patch("/:id",(req,res)=>{
    updateApplication(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteApplication(req,res)
})



module.exports = router