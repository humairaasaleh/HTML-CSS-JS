const router = require('express').Router();


router.get("/readAll", (req,res)=>{
    console.log("read all volkswagens");
    res.status(202).send("read all volkwagens");
});

router.post('/newVolkswagen',(req,res)=>{
    const body= req.body;
    console.log(body);
    res.status(201).send("volkswagen has been created");
});

router.put('/updateVolkswagen/:id', (req,res)=>{
    const body= req.body;
    console.log(req.params);
    console.log(body);
    res.status(202).send("Volkswagen has been updated");
});

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params);
    res.status(202).send(`Volkswagen has been deleted`);
});


//export router
module.exports= router;