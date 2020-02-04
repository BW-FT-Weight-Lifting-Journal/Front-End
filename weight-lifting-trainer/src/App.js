import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
//local
import './App.css';
import {UserContext} from './contexts/UserContext';
import PrivateRoute from './PrivateRoute';
//components
import Signup from "./authForms/Signup";
import Login from "./authForms/Login";
import Nav from './components/Nav'
import WorkoutList from './components/WorkoutList'
//GlobalStyles
import GlobalStyle from './GlobalStyles'


function App() {
  return (
    <div className="App">
       <UserContext.Provider >{/* value={}> */}
      <header className="App-header">
        <GlobalStyle />
        <Nav />
        {/* <Link className='link' exact to="/">
          Home
        </Link>
        <Link className='link' exact to="/Signup">
          Signup
        </Link>
        <Link className='link' exact to="/Login">
          Login
        </Link> */}
        <Switch>
        <Route exact path="/Signup" >
          <Signup />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <PrivateRoute path="/workouts" component={WorkoutList}/>
        
        </Switch>
      </header>
        </UserContext.Provider>
        </div>
  )
}


export default App;






