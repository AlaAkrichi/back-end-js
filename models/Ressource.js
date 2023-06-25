const mongoose = require("mongoose")

const ressourceSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    libelle:{
        type : String,
        required : true
    },
    machine : { type: mongoose.Schema.Types.ObjectId, ref: 'Machine'}
});

//Export the model
module.exports = mongoose.model('Ressources', ressourceSchema);