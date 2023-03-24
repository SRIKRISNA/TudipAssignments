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
const candidateM = mongoose.model('candidate', candidateSchema);
module.exports = candidateM;
