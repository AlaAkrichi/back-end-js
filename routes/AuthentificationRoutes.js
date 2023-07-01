const express = require("express")
const router = express.Router()
const {login} = require("../controller/LoginController")
const { model } = require("mongoose")


router.post("/",(res,req)=>{
    login(res,req)
})
module.exports = router