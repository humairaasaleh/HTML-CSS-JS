import { useState } from 'react';
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2>entry form</h2>
            <label>Username:</label>
            <input type="text" name="username" value={username}
                onChange={(event) => {
                    console.log(username);
                    setUsername(event.target.value)
                }} />
                <label>Password:</label>
            <input type="password" name="password" value={password}
                onChange={(event) => {
                    console.log(password);
                    setPassword(event.target.value)
                }} />
            <button type="Submit" onClick={() => {
                console.log(username,password);
            }} />
        </div>
    );
}

export default Login;