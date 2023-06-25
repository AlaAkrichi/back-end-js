const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var roleSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
        index:true,
    },
    libelle : {
        type:String,
        required:true,
    }   
});

//Export the model
module.exports = mongoose.model('Role', roleSchema);