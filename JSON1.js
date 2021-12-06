"use strict"

const output = document.querySelector("section#superhero");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const superhero = response.data;
        console.log("RES:", response);

        const squadName = document.createElement("h2");
        squadName.innerText = superhero.squadName;
        output.appendChild(squadName);

        const info = document.createElement("p");
        info.innerText += `Hometown: ${superhero.homeTown}\n`;
        info.innerText += `Formed: ${superhero.formed}\n`;
        info.innerText += `Secret Base: ${superhero.secretBase}\n`;
        info.innerText += `Active: ${superhero.active}\n`;
        output.appendChild(info);

        // const powerHeading = doccument.createElement("h2");
        // powerHeading.innerText = "Powers:";
        // heroContainer.appendChild(powerHeading);

        const hero = superhero.members[0];
        const powers = document.createElement("ul");
        for (let power of hero.powers) {
            const powerItem = document.createElement("li");
            powerItem.innerText = power;
            powers.appendChild(powerItem);
        }
        output.appendChild(powers);
    })