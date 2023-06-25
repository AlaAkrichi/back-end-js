const {getAllPlatfroms,gePlatforme,addPlatform,updatePlatform,deletePlatform}= require("../controller/PlatformContoller")
const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    getAllPlatfroms(req,res)
})


router.get("/:id",(req,res)=>{
    gePlatforme(req,res)
})

router.post("/",(req,res)=>{
    addPlatform(req,res)
})

router.patch("/:id",(req,res)=>{
    updatePlatform(req,res)
})

router.delete("/:id",(req,res)=>{
    deletePlatform(req,res)
})



module.exports = router