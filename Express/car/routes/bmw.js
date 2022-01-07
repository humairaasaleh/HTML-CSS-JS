const router = require('express').Router();

//import in nested middleware
const nestedExp=require('../middleware.js');

router.get('/readAll', nestedExp, (req,res)=>{
    console.log("read all bmws");
    res.status(202).send("read all bmws");
});

router.get('/get/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(202).send(`document of ${req.params.id} requested`);
});

router.post('/newBmw',(req,res)=>{
    const body= req.body;
    console.log(body);
    res.status(201).send("bmw has been created");
});

router.put('/updateBmw/:id', (req,res)=>{
    const body= req.body;
    console.log(req.params);
    console.log(body);
    res.status(201).send(`${req.params.id} has been updated`);
});

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params);
    res.status(202).send(`bmw has been deleted`);
});

//delete using query params
// delete?colour=red
router.delete('/delete',(req,res)=>{
    console.log(req.query);
    //204 doesnt return anything
    res.status(204);
});

//export router
module.exports= router;