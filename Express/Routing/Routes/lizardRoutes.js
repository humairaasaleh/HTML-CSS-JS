const { Router } = require('express');

const router = require('express').Router();


router.get("/readAll", (req,res)=>{
    console.log("read all accessed");
    res.status(202).send("read all accessed");
})

//export router
module.exports= router;