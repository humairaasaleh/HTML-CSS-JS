const express=require('express');
const app =express();

//needed to parse JSON data so express can read it
app.use(express.json());

// localhost:5015/hello
app.get("/hello", ()=> {
    return console.log("site accessed");
});

// localhost:5015/delete
app.delete("/delete", () =>{
    console.log("Deleted item");
});

// localhost:5015/create
app.post("/create", ()=> {
    return console.log("created item");
});

// localhost:5015/update
app.put("/update", ()=>{
    return console.log("updated item");
});

// requests

// localhost:5015/get/hum
// app.get('/get/:name', (req) =>{
//     // console.log(req);
//     console.log(req.params);
//     console.log(req.params.name);
// });

// localhost:5015/getCar?car=bmw
app.get('/getCar', (req,res)=>{
    console.log(req.query);
    console.log(req.query.car);
    res.status(202).send("this is okay");
});

// localhost:5015/newCar
app.post('/newCar', (req,res) =>{
    const body= req.body;
    console.log(body);
    res.status(201).send("has been created")
});

// localhost:5015/updateCar/1
app.put('/updateCar/:id', (req,res)=>{
    const body= req.body;
    console.log(req.params);
    console.log(body);
    res.status(202).send("has been updated")
});

// localhost:5015/deleteCar/1
app.delete('/deleteCar/:id', (req,res)=>{
    console.log(req.params.id);
    res.status(202).send("has been deleted")
});

// responses

// localhost:5015/helloThere/bob
app.get('/helloThere/:name',(req,res)=>{
    const name= req.params.name;
    res.status(202).send(`hi ${name} this is from the backend`);
});

// localhost:5015/error
app.get('/error', (req,res)=>{
    res.status(500).send("this is an error");
})

//listen port comes at end
const server = app.listen(5015, () => {
    console.log(`Hello world`);
});