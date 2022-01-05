const increase = (num) =>{
    alert(`The new value is ${num+10}`);
}

const callback =(value)=>{
    let num = parseInt(prompt('Please enter a number'));
    value(num);
}


callback(increase);

