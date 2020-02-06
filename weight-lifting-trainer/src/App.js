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
import { RoutineContext } from "./contexts/RoutineContext";
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
  const [exercises, setExercises] = useState([]);
  const [routine, setRoutine] = useState([]);
  const addExercise = newExercise => {
    setExercises([...exercises, newExercise]);
  };
  const addRoutine = newRoutine => {
    setRoutine([...routine, newRoutine]);
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
        value={{
          state,
          dispatch,
          routine,
          addExercise,
          exercises,
          addRoutine
        }}
      >
        <RoutineContext.Provider
          value={{
            state,
            dispatch,
            routine,
            addExercise,
            exercises,
            addRoutine
          }}
        >
          {console.log("addRoutine in app and routine", routine)}
          <header className="App-header">
            <GlobalStyle />
            <Nav />
            <Switch>
              <Route exact path="/">
                {/* <RoutineList /> */}
                <Login />
              </Route>

              <Route path="/Signup">
                <Signup />
              </Route>

              {
                /* <Private*/ <Route
                  exact
                  path="/workouts"
                  component={RoutineList}
                />
              }
              {
                /* <Private*/ <Route
                  path="/workouts/exercises"
                  component={ExerciseList}
                />
              }
              {
                // /* <Private*/ <Route
                //   path="/workouts/new"
                //   component={AddRoutineForm}
                // />
              }
              <Route path="/workouts/new">
                <AddRoutineForm />
              </Route>
            </Switch>
          </header>
        </RoutineContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
