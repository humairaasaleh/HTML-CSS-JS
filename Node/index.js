// const {greetingString, greetingPrint} = require("./greeting");
// console.log(greetingString);
// greetingPrint();

const snakeNames= require('snake-names');

console.log(snakeNames.random());

const { getCatAgeObject, getCatAgeString } = require('cat-age-calculator/src');
console.log(getCatAgeObject(12));

console.log(getCatAgeString(22));