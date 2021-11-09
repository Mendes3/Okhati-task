import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/navbar';
import Login from './components/Login/login'
import Register from './components/Register/register';
import Home from './components/Home/home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route exact path='/register'>
          <Register/>
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
