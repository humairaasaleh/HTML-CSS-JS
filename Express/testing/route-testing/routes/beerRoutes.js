const router = require('express').Router();
const { Beer } = require('../models/beer.js');

router.get('/test', (req, res) => {
    res.status(201).send("Test path successful");
})

//create
router.post('/create', (req, res, next) => {
    console.log(req.body);
    const beer = new Beer(req.body);
    beer.save().then((result) => {
        res.status(201).send(`${result.beerName} has been added to the database`);
    })
        .catch((error) => {
            const errorColour = "red";
            let err;
            if (errorColour == "red") {
                err = new Error(`Error with code red`);
            } else {
                err = new Error(`Error with code blue`);
            }
            // const err=new Error(`Object requires beer name to be entered`);
            next(err);
        })
});

//read all
router.get('/readAll', (req, res) => {
    Beer.find((error, beers) => {
        res.status(200).send(beers);
    });
});

//read id
router.get('/read/:id', (req, res) => {
    Beer.findById(req.params.id, (error, beer) => {
        res.status(200).send(beer);
    });
});

//update
router.put('/update/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    // console.log(req.params.id);
    const beer = new Beer(body);
    Beer.findByIdAndUpdate(id, body, (error) => {
        res.status(201).send("has been updated");
    });

});

//delete
router.delete('/delete/:id', (req, res) => {
    Beer.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("deleted");
    });
});

module.exports = router;