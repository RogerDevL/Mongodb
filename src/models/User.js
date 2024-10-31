const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    idade:{
        type:Number,
        required: true
    }
}, {timestamps: true});

// criando modelo user dentro do mongodb
module.exports = mongoose.model('User', userSchema);