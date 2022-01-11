const router = require('express').Router();
//import in the model
const {Bmw}= require('../persistance/models/bmw.js');

router.get('/getAll', (req,res)=>{
    Bmw.find((error, bmws)=>{
        res.status(200).send(bmws);
    });
});

router.get('/get/:id',(req,res)=>{
    console.log(req.params.id);
    Bmw.findById(req.params.id,(error, bmw)=>{
        res.status(200).send(bmw);
    });
});

router.post('/create',(req,res,next)=>{
    console.log(req.body);
    const bmw= new Bmw(req.body);
    bmw.save().then((result)=>{
        res.status(201).send(`${result.numberPlate} added to database`);
    })
    .catch((error)=>{
        //create an error oject for us to handle
        const err=new Error(`Object requires number plate to be entered`);
        //pass error to error handling middleware
        next(err);
    })
   
});

router.put('/updateBmw/:id', (req,res)=>{
    const body= req.body;
    const id = req.params.id;
    console.log(req.params);
    console.log(body);
    const bmw = new Bmw(body);
    Bmw.findByIdAndUpdate(id,body,(error)=>{
        response.status(201).send("has been updated");
    })
    
});

router.delete('/delete/:id',(req,res)=>{
    Bmw.findByIdAndDelete(req.params.id, (error)=>{
        res.status(202).send("bmw deleted");
    });
});


//export router
module.exports= router;