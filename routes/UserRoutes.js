const express = require("express")
const router = express.Router()
const {getAllUsers,getUser, addUser,updateUser,deleteUser}= require("../controller/UserController")

router.get("/",(req,res)=>{
    getAllUsers(req,res)
})


router.get("/:id",(req,res)=>{
    getUser(req,res)
})

router.post("/",(req,res)=>{
    addUser(req,res)
})

router.patch("/:id",(req,res)=>{
    updateUser(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteUser(req,res)
})



module.exports = router