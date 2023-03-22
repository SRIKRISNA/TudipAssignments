const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({limit:'30mb', extended:true}));

//db connection
mongoose.connect(MONGO_DB, (req, res)=>{
    res.status(200).send('data base connected')
})
//server connection
app.listen(process.env.PORT, (req,res)=>{
    res.status(200).send('server running');
});

//fetch datal
app.get('/',(req,res)=>{
    res.status(200).json();
})