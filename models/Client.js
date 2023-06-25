const mongoose= require("mongoose")

const clientSchema= mongoose.Schema({
    id : {
        type:Number,
        required:true, 
        index: true,
        unique:true
    },
    nom :{
        type:String,
        required:true
    },
    email:{
        type : String,
        required : true
    },
    tel:{
        type : String ,
        required : true
    },
    login :{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    societe : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model("client",clientSchema)