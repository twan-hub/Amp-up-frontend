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

function App() {
  const [token,setToken] = useState();
  
  if (!token || token.token == "Password or Username") {
    console.log(token);
    return <Login setToken={setToken} />
  }
  console.log(token)

  return(
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
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
