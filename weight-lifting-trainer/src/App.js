import React, { useState, useEffect, useContext } from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
//local
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import PrivateRoute from "./PrivateRoute";
import { axiosWithAuth } from "./axiosWithAuth";
//components
import Signup from "./authForms/Signup";
import Login from "./authForms/Login";
import Nav from "./components/Nav";
import RoutineCard from "./components/RoutineCard";
import RoutineList from "./components/RoutineList";
import AddRoutineForm from "./components/workoutForms/AddRoutineForm";
import ExerciseList from "./components/ExerciseList";
//GlobalStyles
import GlobalStyle from "./GlobalStyles";
//context
import RoutineContext from "./contexts/RoutineContext";
import axios from "axios";
//local storage
import ls from "local-storage";
function App() {
  const [routineList, setRoutine] = useState([]);
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")));
  // const user = useContext(UserContext)

  return (
    <div className="App">
      {/* <RoutineContext.Provider value={{ props }}> */}
      {/* <UserContext.Provider value={data}>
        {console.log(data)}
        data",{" "} */}
      {/* <RoutineContext.Provider value={data}> */}
      {/* <RoutineContext.P  {/* value={{ routine }} */}
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
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/Signup">
            <Signup />
          </Route>

          <Route path="/AddRoutineForm">
            <AddRoutineForm />
          </Route>
          <PrivateRoute exact path="/workouts" component={RoutineList} />
          <PrivateRoute path="/workouts/exercises" component={ExerciseList} />
        </Switch>
      </header>
      {/* </RoutineContext.Provider> */}
      {/* </UserContext.Provider> */}
      {/* </RoutineContext.Provider> */}
    </div>
  );
}
export default App;
