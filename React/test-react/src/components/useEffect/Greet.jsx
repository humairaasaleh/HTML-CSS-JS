import { useEffect, useState } from 'react';

const Greet = () => {;

    const [name, setName]= useState("");

useEffect(() => {
    document.title = `Greetings to ${name}`; 
}, [name]);

return <div>
    <input type="text" name="name" onChange={(event) => {
                    setName(event.target.value)
                }}/>
    <h3>Hello {name}</h3>
    </div>;
}

export default Greet;