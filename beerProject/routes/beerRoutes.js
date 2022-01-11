const router = require('express').Router();

const res = require('express/lib/response');
// const { request } = require('express');
const { Beer } = require('../model/beer.js');

//create
router.post('/create', (request, response,next) => {
    console.log(request.body);
    const beer = new Beer(request.body);
    beer.save().then((result) => {
        response.status(201).send(`${result.beerName} has been added to the database`);
    })
    .catch((error)=>{
        const errorColour="red";
        let err;
        if (errorColour == "red"){
            err = new Error(`Error with code red`);
        } else{
            err=new Error(`Error with code blue`);
        }
        // const err=new Error(`Object requires beer name to be entered`);
        next(err);
    })
});

//read all
router.get('/readAll', (request, response) => {
    Beer.find((error, beers) => {
        response.status(200).send(beers);
    });
});

//read id
router.get('/read/:id', (request, response) => {
    Beer.findById(request.params.id, (error, beer) => {
        response.status(200).send(beer);
    });
});

//update
router.put('/update/:id', (request, response) => {
    const body = request.body;
    const id = request.params.id;
    console.log(request.params.id);
    const beer = new Beer(body);
    Beer.findByIdAndUpdate(id, body, (error) => {
        response.status(201).send("has been updated");
    });   

});

//delete
router.delete('/delete/:id', (request, response) => {
    Beer.findByIdAndDelete(request.params.id, (error) => {
        response.status(202).send("deleted");
    });
});

module.exports = router;