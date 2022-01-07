//importing packages
const express = require('express');
const cors = require('cors');

//initialising app as the express function
const app = express();

//common middleware
app.use(express.json());
app.use(cors());

//import the route into the server.js
const lizardRoutes = require('./routes/lizardRoutes.js');

//tell server to use this route- use middleware to do this
//if any requests begins with /lizard use lizard routes file
app.use('/lizard', lizardRoutes);

app.use((req,res,next)=>{
    console.log("this is middleware");
    next();
})

const server = app.listen(5015, () => {
    console.log("starting server on port 5015");
});