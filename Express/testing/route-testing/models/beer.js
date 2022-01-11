const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const beerSchema = new Schema({
    beerName: {
        type: String,
        required: true
    },
    description: String,
    abv: {
        type: Number,
        required: true
    },
});

const Beer = model('Beer', beerSchema);

module.exports = {'Beer' : Beer};