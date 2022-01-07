const mongoose = require('mongoose');

//deconstructing mongoose
const {Schema, model}=mongoose;

// schema for array
const prevOwnerSchema= new Schema({
    firstName:String,
    surname:String
});

//create schema
const bmwSchema= new Schema({
    numberPlate:{
        type: String,
        required:true,
        minlength:6,
        max: 9
    },
    // colour: String,
    // doors:Number,
    // isAuto:Boolean,
    // miles:Number,
    //array of embedded documents
    prevOwner:[prevOwnerSchema],
    //embedded document
    MOT:{
        year:Number,
        pass: {
            type:Boolean,
            required:true
        }
    }
});

//todo array of numbers
//favNumbers:[Number]

//creating bmw model
const Bmw=model('Bmw', bmwSchema);

//export model
module.exports={'Bmw':Bmw};