async function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Async function 1`);
            resolve();
        },3000);
    })
}
async function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Async function 2`);
            resolve();
        },2000);
    })
}
async function asyncfunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Async function 3`);
            resolve();
        },1000);
    })
}

async function doThings(){
   await asyncfunc1();
   await  asyncfunc2();
   await  asyncfunc3();
    return(`All done!`);
}

doThings().then(console.log);