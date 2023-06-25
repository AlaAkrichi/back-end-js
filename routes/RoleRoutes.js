const express = require("express")
const router = express.Router()
const {getAllRoles,getRole, addRole,updateRole,deleteRole}= require("../controller/RoleController")

router.get("/",(req,res)=>{
    getAllRoles(req,res)
})


router.get("/:id",(req,res)=>{
    getRole(req,res)
})

router.post("/",(req,res)=>{
    addRole(req,res)
})

router.patch("/:id",(req,res)=>{
    updateRole(req,res)
})

router.delete("/:id",(req,res)=>{
    deleteRole(req,res)
})



module.exports = router