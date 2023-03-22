const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name:String,
    mobile:{
        type:String,
        unique:true
    },
    email:String,
    address:String
})

module.exports = mongoose.model('candidate', candidateSchema);
