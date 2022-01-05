"use strict";

const counter = document.querySelector("input#counter");
const output = document.querySelector("section#history");

const addHistory = (current, change, newValue) => {
    const newHistory= document.createElement("p");
    if (change ===0){
        newHistory.innerText=0
    } else {
        newHistory.innerText = `${current} ${change} = ${newValue}` ;
    }
    output.appendChild(newHistory);
}

const minusFive = () => {
    const current = counter.value;
    console.log("CURRENT:", current);

    const newValue = Number.parseInt(current) - 5;
    console.log("NEW:", newValue);

    counter.value = newValue;
    addHistory(current, -5, newValue);

}

const minusOne = () => {
    const current = counter.value;
    console.log("CURRENT:", current);

    const newValue = Number.parseInt(current) - 1;
    console.log("NEW:", newValue);

    counter.value = newValue;
    addHistory(current, -1, newValue);
}

const reset = () => {
    const current = counter.value;
    console.log("CURRENT:", current);

    const newValue = 0;
    console.log("NEW:", newValue);

    counter.value = newValue;
    addHistory(current, 0, newValue);
}

const addOne = () => {
    const current = counter.value;
    console.log("CURRENT:", current);

    const newValue = Number.parseInt(current) + 1;
    console.log("NEW:", newValue);

    counter.value = newValue;

    addHistory(current, 1, newValue);
}

const addFive = () => {
    const current = counter.value;
    console.log("CURRENT:", current);

    const newValue = Number.parseInt(current) + 5;
    console.log("NEW:", newValue);

    counter.value = newValue;

    addHistory(current, 5, newValue);
}
