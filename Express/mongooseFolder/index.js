const express = require('express');
const cors = require('cors');
const bmwRoutes=require('./routes/bmwRoutes.js');
const mongoose= require('mongoose');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//database connection
//mongodb URI - mongodb://localhost:27017/<db_name>
mongoose.connect('mongodb://localhost:27017/cars', {useNewUrlParser: true},
(error)=>{
    if(error){
        console.log("Cant connect to database");
    } else if (!error){
        console.log("connected to database");
    }
});

app.use('/bmw', bmwRoutes);

const server = app.listen(5015, () => {
    console.log("server started");
});