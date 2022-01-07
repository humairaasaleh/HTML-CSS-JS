const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("first piece of middleware");
    next();
});

// app.use((req, res, next) => {
//     let currentDate = new Date();
//     console.log(Date());
//     next();
// });

// app.use((req, res, next) => {
//     let num= Math.random();
//     console.log(num);
//     next();
// });

//nested middleware
const logger=(req,res,next)=>{
    console.log(new Date());
    next();
};

const nested=(req,res,next)=>{
    console.log("nested stuff");
    next()
}

//request with nested middleware
app.get(`/nested`,logger,nested,(req,res)=>{
    res.send("nested middleware fired");
})

//requests

app.get('/getDate', (req, res) => {
    res.send("site accessed!");
})

app.post('/post', (req, res) => {
    res.send("Posted data");
})

const server = app.listen(5015, () => {
    console.log("starting server on port 5015");
});