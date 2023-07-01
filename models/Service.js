const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var serviceSchema = new mongoose.Schema({
    id : {
        type:String,
        required:true, 
        index: true,
        unique:true
    },
    libelle:{
        type:String,
        required:true
    },    
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"client"
    }
});

//Export the model
module.exports = mongoose.model('Service', serviceSchema);