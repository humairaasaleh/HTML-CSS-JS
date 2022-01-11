const express = require('express');
const cors = require('cors');
const beerRoutes = require('./routes/beerRoutes.js');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send(err.message);
    next(err);
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send(err.message);
    next(err);
})

mongoose.connect('mongodb://localhost:27017/beerCollection', {useNewUrlParser: true}, 
(error) => {
    if (error) {
        console.log('cannot connect to db');
    } else if (!error) {
        console.log('connected to the db');
    }
});

app.use('/beer', beerRoutes);


app.use((err,req,res,next)=>{
    console.log(err.message);
})

const server = app.listen(5015, () => {
    console.log('server started');
});

module.exports=server;