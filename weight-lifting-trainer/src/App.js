import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./authForms/Login";
import Signup from "./authForms/Signup";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import AddWorkout from "./components/AddWorkout";
import AddUserData from "./components/AddUserData";
import PrivateRoute from "./components/PrivateRoute";
import UpdateWorkout from "./components/UpdateWorkout";
import UpdateUserData from "./components/UpdateUserData";
import SignUp from "./components/SignUp";
export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

function App() {
  const [state, dispatch] = React.useReducer(initialState);
  const [userid, setUserid] = useState(0);
  const [workouts, setWorkouts] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log(userid);
    setUserid(localStorage.getItem("userid"));
    if (localStorage.getItem("token")) {
      axiosWithAuth()
        .get(`/api/users/${userid}/workouts`)
        .then(res => {
          console.log("workout data", res.data);
          setWorkouts(res.data);
        })
        .catch(err => console.log(err));
      axiosWithAuth()
        .get(`/api/users/${userid}/workouts`)
        .then(res => {
          console.log("this is the users data", res.data);
          setUserData(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [userid]);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    setUserid(0);
  };
  if (!userData) return null;
  else if (userData) {
    return (
      <div className="App">
        <AuthContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          <nav className="nav">
            <div className="header">
              <span className="fas fa-dumbbell"></span>
            </div>
            <div className="nav-links">
              {!localStorage.getItem("token") && (
                <Link to="/signin/">Sign In</Link>
              )}
              {!localStorage.getItem("token") && (
                <Link to="/signup/">Sign Up</Link>
              )}
              {localStorage.getItem("token") && (
                <Link to="/dashboard">Dashboard</Link>
              )}
              {localStorage.getItem("token") && (
                <Link to="/addworkout/">Add Workout</Link>
              )}
              {localStorage.getItem("token") && (
                <Link to="/signin/" onClick={signOut}>
                  Sign Out
                </Link>
              )}
            </div>
          </nav>
          <Route
            exact
            path="/"
            render={props => <Signup {...props} setUserid={setUserid} />}
          />
          <Route
            path="/addworkout/"
            component={props => (
              <AddWorkout
                userid={userid}
                setUserid={setUserid}
                setWorkouts={setWorkouts}
                {...props}
              />
            )}
          />
          <PrivateRoute
            path="/dashboard"
            component={props => (
              <Dashboard
                userid={userid}
                setUserid={setUserid}
                setWorkouts={setWorkouts}
                workouts={workouts}
                userData={userData}
                setUserData={setUserData}
                {...props}
              />
            )}
          />
          <Route
            path="/addinfo"
            render={props => (
              <AddUserData {...props} userid={userid} setUserid={setUserid} />
            )}
          />
          <Route
            path="/signin/"
            render={props => <Login {...props} setUserid={setUserid} />}
          />
          <Route path="/signup/" render={props => <Signup {...props} />} />
          <Route
            path="/updateworkout/:id"
            render={props => (
              <UpdateWorkout
                workouts={workouts}
                userid={userid}
                setUserid={setUserid}
                {...props}
              />
            )}
          />
          <Route
            path="/updateuserinfo/:id"
            render={props => (
              <UpdateUserData
                {...props}
                userData={userData}
                userid={userid}
                setUserid={setUserid}
              />
            )}
          />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
