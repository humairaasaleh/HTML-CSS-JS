const router = require('express').Router();


router.get("/readAll", (req,res)=>{
    console.log("read all bmws");
    res.status(202).send("read all bmws");
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
    res.status(202).send("bmw has been updated");
});

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params);
    res.status(202).send(`bmw has been deleted`);
});

//export router
module.exports= router;