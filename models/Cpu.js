const mongoose = require('mongoose'); // Erase if already required
const Ressource = require("./Ressource")
// Declare the Schema of the Mongo model
var cpuSchema = new mongoose.Schema({
    architecture:{
        type:String,
        required:true
    },
    nomber_cpu:{
        type:Number,
        required:true
    }
});

//Export the model
module.exports = Ressource.discriminator('Cpu', cpuSchema);