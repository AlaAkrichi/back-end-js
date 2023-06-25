const mongoose = require('mongoose'); // Erase if already required
const Service = require("./Service")
// Declare the Schema of the Mongo model
var machineSchema = new mongoose.Schema({
    os:{
        type:String,
        required:true
    },
    ip:{
        type:String,
        required:true
    },
});

//Export the model
module.exports = Service.discriminator('Machine', machineSchema);