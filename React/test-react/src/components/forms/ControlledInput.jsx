import { useState } from 'react';
const ControlledInput = () => {

    const [username, setUsername] = useState("");
    let tempUser;
    return (
        <div>
            <h3>form</h3>
            <input type="text" name="username" 
                onChange={(event) => {
                    console.log(tempUser);
                    tempUser = event.target.value;
                    // setUsername(event.target.value)
                }} />
            <button type="button" onClick={() => {
                setUsername(tempUser);
            }} />
            <h3>Username: {username}</h3>
        </div>
    );
}

export default ControlledInput;