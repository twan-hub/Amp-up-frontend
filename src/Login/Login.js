import './Login.css';
import { useState } from 'react';
import { ReactPropTypes } from 'react';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/login", {
                crossDomain: true,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            

            let responseJson = await res.json();
            if (res.status === 200) {
                setUsername("");
                setPassword("");
                console.log(responseJson);
                console.log("what")
            } else {
                console.log(responseJson);
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <body>
                <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)} required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit">Login</button>
                </div>

                <div className="container" style={{ backgroundColor: 'grey' }}>
                    <button type=" button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
            </body>
            
        </div>

    );
}

export default Login;
