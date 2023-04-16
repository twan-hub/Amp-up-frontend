import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Login/Login';
import Dashboard from './Dashboard';
import Preferences from './Prefernces';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';
import useToken from './useToken';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, setToken } = useToken();
  
  if (!token || token !== "Successful Login") {
    console.log(token);
    return <Login setToken={setToken} />
  }
  console.log(token)

  return (
    <div className="wrapper">
      <h1>Application</h1>
      
      <BrowserRouter>
      <Redirect from="/" to="/dashboard" />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
