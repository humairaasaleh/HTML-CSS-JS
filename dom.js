"use strict";

let heading = document.createElement("h1");
let h1text = document.createTextNode("This is the heading");
heading.appendChild(h1text);
document.body.appendChild(heading);

let subheading = document.createElement("h2");
let h2text = document.createTextNode("Here is the subheading");
subheading.appendChild(h2text);
document.body.appendChild(subheading);

let btn = document.querySelector("button");
btn.addEventListener("click", button);