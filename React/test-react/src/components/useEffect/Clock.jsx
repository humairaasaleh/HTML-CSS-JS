
import { useEffect, useState } from "react";

const Clock = () => {

    //use state to store and set the current time
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [start, setStart] = useState(false);
    //use useEffect to console.log and run a function in 1 second
    useEffect(() => {
        setTimeout(tick, 1000);
    }, [start])
    // some function to set the current time
    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    // tick()
    return (
        <div>
            <h3>Clock</h3>
            <h4>Time is {time}</h4>
            <button type='button' onClick={() => setStart(!start)}>Click me to do timer</button>
        </div>
    );
}

export default Clock;