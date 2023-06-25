const asyncHandler = require("express-async-handler")
const Cpu = require("../models/Cpu")


const getcpu = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const cpu = await Cpu.findOne({id}).populate("machine")
    cpu  ===null ? res.status(404).json({"message":"not found"}) :res.status(200).json(cpu)
})

const addcpu = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length>0){
        try{
        const cpu = await Cpu.create({
            id : req.body.id,
            libelle:req.body.libelle,
            architecture:req.body.architecture,
            nomber_cpu:req.body.nomber_cpu,
            machine:req.body.machine
        })
        res.status(201).json(cpu)}
        catch (erreur){
            switch(erreur.code){
                case 11000 :
                    res.status(500).json({"message" : "id maybe be duplicated","erreur":erreur.message})
                    break;
                default:
                    res.status(500).json({"message":"somting went wrong","erruer":erreur.message})
            }
        }
    }else{
        res.status(400).json({"message":"required a body "}) 
    }
})
const getAllcpus = asyncHandler(async (req,res)=>{
    const cpus = await Cpu.find().populate("machine")
    res.status(200).json(cpus)
})
const updatecpu = asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0){
    const id = parseInt(req.params.id)
    const cpu = await Cpu.findOneAndUpdate({id},req.body)
    res.status(200).json(cpu)
}else{
    res.status(400).json({"message":"required a body "}) 
}
})

const deletecpu = asyncHandler(async(req,res)=>{
    const id = parseInt(req.params.id)
    const cpu = await Cpu.findOneAndDelete({id})
    if(!cpu){
        res.status(400).json({"message":"user not found"})
    }
    res.status(200).json({"id":id})
})
module.exports = {
    getcpu,
    getAllcpus,
    addcpu,
    updatecpu,
    deletecpu
}