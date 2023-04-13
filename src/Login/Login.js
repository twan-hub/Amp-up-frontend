import './Login.css';
import { useState } from 'react';
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        crossDomain:true,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let res = await fetch("http://localhost:8080/login", {
    //             crossDomain: true,
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 username: username,
    //                 password: password,
    //             }),
    //         });


    //         let responseJson = await res.json();
    //         if (res.status === 200) {
    //             setUsername("");
    //             setPassword("");
    //             console.log(responseJson.body);
    //             setToken(responseJson.body)
    //             console.log("what")
    //         } else {
    //             console.log(responseJson);
    //             setMessage("Some error occured");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
