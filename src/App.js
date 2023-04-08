import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Login/Login'

function App() {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
  let res = await fetch("http://localhost:8080/login", {
    crossDomain:true,
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "username": username,
      "password": password,
    }),
  });
  let resJson = await res.json();
      if (res.status === 200) {
        setUsername("");
        setPassword("");
        console.log(resJson);
      } else {
        console.log(resJson);
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
      <div>
        <Login/>
      </div>
    );
}

export default App;
