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
import AddExerciseForm, {
  ExerciseContext
} from "./components/exerciseForms/AddExerciseForm";
//local storage
// import ls from "local-storage";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {
  const [Routine, setRoutine] = useState([]);
  const addRoutine = newRoutine => {
    setRoutine([...Routine, newRoutine]);
  };
  const [exercises, setExercises] = useState([]);
  const addExercise = newExercise => {
    setExercises([...exercises, newExercise]);
  };
  //const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")));
  // const user = useContext(UserContext)

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email") || null);
    const token = JSON.parse(localStorage.getItem("token") || null);

    if (email && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          email,
          token
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ state, dispatch, Routine, addRoutine, addExercise, exercises }}
      >
        <header className="App-header">
          <GlobalStyle />
          <Nav />
      

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/Signup">
              <Signup />
            </Route>

            <PrivateRoute exact path="/workouts" component={RoutineList} />
            <PrivateRoute path="/workouts/exercises" component={ExerciseList} />
            <PrivateRoute path="/workouts/new" component={AddRoutineForm} />
          </Switch>
        </header>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
