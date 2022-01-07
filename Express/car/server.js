const express = require('express');
const cors = require('cors');

const app = express();

//common middleware
app.use(express.json());
app.use(cors());

//import the route into the server.js
const volkswagenRoutes = require('./routes/volkswagen.js');
const bmwRoutes = require('./routes/bmw.js');

app.use((req, res, next) => {
    console.log("this is some middleware");
    next();
});

app.use('/bmw', bmwRoutes);
app.use('/volkswagen', volkswagenRoutes);

const server = app.listen(5015, () => {
    console.log("starting server on port 5015");
});


