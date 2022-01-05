"use strict"
//  ALWAYS USE STRICT MODE IN JS

// console.log("Here is some JavaScript");

// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

// function add() {
//     let x = 4;
//     let y = 3;
//     console.log(x + y);
//     return;
// }

// function sayHello() {
//     console.log("someone say hello")
//     return;
// }

// ITERATION
// let age = 10;
// if (age >= 18 && age <= 65) {
//     console.log("Age is in range");
// } else if (age < 18) {
//     console.log("Underage");
// } else {
//     console.log("Catch all else");
// }


// let me = Array("Humairaa", 19, "Gloucester");

// let a = 100;
// while (a <= 200) {
//     if (a % 2 == 0) {
//         console.log("-");
//     } else {
//         console.log("*");
//     }
//     a++;
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(j);
//     }
// }

//  FUNCTIONS
// function subCalc(num1, num2) {
//     return num1 - num2;
// }

// console.log(subCalc(10, 1000));

// const welcome = function (name, age, gender) {
//     return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
// }

// welcome("Felix Cited", 20, "Male");

// const hello = () => {
//     return "Hello World!";
// }

// ARROW FUNCTIONS
// let powerUp = (n1, n2) => Math.pow(n1, n2);

// console.log(powerUp(3, 3));

// DESTRUCTURING
// let user = {
//     name: "John",
//     years: 30
// };

// let { name, years: age, isAdmin = false } = user;

// alert(name);
// alert(age);
// alert(isAdmin);

// CALLBACK
// const increase = (val) => {
//     alert(`The new value is ${val + 10}`);
// }
// const parent = (child) => {
//     let value = parseInt(prompt("Please enter a value"));
//     child(value);
// }
// parent(increase);

// HIGHEST ORDER FUNCTIONS

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]
let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));

let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestBoysGrade = maxGrade(getBoys(grades));
let lowestBoysGrade = minGrade(getBoys(grades));
let highestGirlsGrade = maxGrade(getGirls(grades));
let lowestGirlsGrade = minGrade(getGirls(grades));