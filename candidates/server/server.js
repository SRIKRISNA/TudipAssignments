const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyparser = require('body-parser');
const cors = require('cors');
const candidateM = require('./models/candidateM');

app.use(cors());
require('dotenv').config();

app.use(express.json({limit:'30mb', extended:true}));
app.use(express.urlencoded({extended:false}));

//db connection
mongoose.connect("mongodb+srv://krishna:spkrishna@krishnacluster.xjap0dj.mongodb.net/tudip?retryWrites=true&w=majority").then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})
//server connection
app.listen(process.env.PORT, ()=>{
    console.log('server running on ' + process.env.PORT);
});

//fetch data
app.get('/',(req,res)=>{
    candidateM.find().then((post)=>{
        res.status(200).send(post);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})
//POST DATA
app.post('/adduser',(req,res)=>{
    candidateM.create({
        name: req.body.name,
        mobile:req.body.mobile,
        email:req.body.email,
        address:req.body.address
    }).then(()=>{
        console.log("New user added...")
        res.status(200).send("New user added").end();
    }).catch((err)=>{
        res.status(400).send(err); 
    })
})