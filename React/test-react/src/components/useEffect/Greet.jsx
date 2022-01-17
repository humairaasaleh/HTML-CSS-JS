import { useEffect, useState } from 'react';
import GreetChild from './GreetChild';

const Greet = () => {;

    const [name, setName]= useState("");

useEffect(() => {
    document.title = `Greetings to ${name}`; 
}, [name]);

return <div>

    <GreetChild setName={setName} name={name}/>
    </div>;
}

export default Greet;