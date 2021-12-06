"use strict";

const getOutput = document.querySelector("#getOutput");
const getOutput2 = document.querySelector("#getOutput2");

// CREATE USER

document.querySelector("#userJobForm").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("THIS:", this);

    const form = this; // purely to make it more obvious

    console.log("Name ", form.name);

    const data = {
        name: form.personName.value,
        job: form.personJob.value
    };

    console.log("DATA: ", data);

    axios
        .post("https://reqres.in/api/users", data)
        .then(res => {
            getUsers();
            form.reset(); // resets the form
            form.name.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));
});

// REGISTER SUCCESSFUL

document.querySelector("#loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("THIS:", this);

    const formLogin = this; // purely to make it more obvious

    console.log("Email ", formLogin.email);

    const data = {
        email: formLogin.userEmail.value,
        job: formLogin.userPassword.value
    };

    console.log("DATA: ", data);

    axios
        .post("https://reqres.in/api/register", data)
        .then(res => {
            formLogin.reset(); // resets the form
            formLogin.name.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));


});

// DELETE USER

document.querySelector("#deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const userId = form.userId.value;
    axios
        .delete(`https://reqres.in/api/users/2/${userId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.userId.focus();
            getUsers();
        })
        .catch(err => console.error(err));
});


// GET LIST OF USERS

const getUsers = () => {
    axios
        .get("https://reqres.in/api/users?page=2")
        .then(res => {
            console.log(res);
            const users = res.data.data;
            getOutput.innerHTML = "";

            for (let user of users) {
                // console.log(user);
                const userCol = document.createElement("div");
                userCol.classList.add("col");

                const userCard = document.createElement("div");
                userCard.classList.add("card");

                const userBody = document.createElement("div");
                userBody.classList.add("card-body");

                const userId = document.createElement("h5");
                userId.classList.add("card-title");
                userId.innerText = `ID: ${user.id}`;
                userBody.appendChild(userId);

                const userEmail = document.createElement("p");
                userEmail.classList.add("card-text");
                userEmail.innerText = `Email: ${user.email}`;
                userBody.appendChild(userEmail);

                const first_name = document.createElement("p");
                first_name.classList.add("card-text");
                first_name.innerText = `First Name: ${user.first_name}`;
                userBody.appendChild(first_name);

                const last_name = document.createElement("p");
                last_name.classList.add("card-text");
                last_name.innerText = `Last Name: ${user.last_name}`;
                userBody.appendChild(last_name);

                const avatar = document.createElement("p");
                avatar.classList.add("card-text");
                avatar.innerText = `Avatar: ${user.avatar}`;
                userBody.appendChild(avatar);

                const userDelete = document.createElement("button");
                userDelete.innerText="DELETE";
                userDelete.classList.add("btn", "btn-danger");
                userDelete.addEventListener("click", () => {
                    axios
                    .delete(`https://reqres.in/api/users/2/${userId}`)
                    .then(res => getUsers())
                    .catch(err => console.error(err))
                })

                userBody.appendChild(userDelete);
                userCard.appendChild(userBody);
                userCol.appendChild(userCard);
                getOutput.appendChild(userCol);


            }
        })
        .catch(err => console.error(err))
}
getUsers();

// GET USER BY ID 2

// const getUserId = () => {
//     axios
//         .get("https://reqres.in/api/users/2")
//         .then(res => {
//             console.log(res);
//             const users = res.data.data;
//             getOutput.innerHTML = "";

//             // for (let user of users) {
//                 // console.log(user);
//                 const userContainer = document.createElement("div");

//                 const userId = document.createElement("p");
//                 userId.innerText = `ID: ${users.id}`;
//                 userContainer.appendChild(userId);

//                 const userEmail = document.createElement("p");
//                 userEmail.innerText = `Email: ${users.email}`;
//                 userContainer.appendChild(userEmail);

//                 const first_name = document.createElement("p");
//                 first_name.innerText = `First Name: ${users.first_name}`;
//                 userContainer.appendChild(first_name);

//                 const last_name = document.createElement("p");
//                 last_name.innerText = `Last Name: ${users.last_name}`;
//                 userContainer.appendChild(last_name);

//                 const avatar = document.createElement("p");
//                 avatar.innerText = `Avatar: ${users.avatar}`;
//                 userContainer.appendChild(avatar);

//                 getOutput2.appendChild(userContainer);
//             // }
//         })
//         .catch(err => console.error(err))
// }
// getUserId();






