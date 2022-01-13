import { useState } from 'react';

const MilesAhead = () => {
    const [steps, setSteps] = useState(0);
    const increment = () => {
        setSteps(prev => prev + 1);
    }
    return (
        <div>
            <p>Today you've taken {steps} steps!</p>
            <br />
            <button onClick={increment}>I took another step </button>
        </div>
    );
}

export default MilesAhead;