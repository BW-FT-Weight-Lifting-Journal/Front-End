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
import RoutineList from "./components/RoutineList";
import AddRoutineForm from "./components/workoutForms/AddRoutineForm";
//GlobalStyles
import GlobalStyle from "./GlobalStyles";
//context
import { RoutineContext } from "./contexts/RoutineContext";

function App() {
  // [hasError, setErrors] = useState(false);
//   const {routine, setRoutine} = useContext(RoutineContext)
//   useEffect(() => {
//       fetch("/api/users/:userID/workouts")
              //.then(res => res.json())
              //.then(res => this.setState({routine: res}))
              //.catch(() => ({hasErrors: true}))
// }, [routine])
  	return (
		<div className="App">
			<UserContext.Provider>
			{/* <RoutineContext.Provider > */}
      {/* value={{ routine }} */}
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

						<Route  path="/Signup">
							<Signup />
						</Route>

						<Route  path="/AddRoutineForm">
							<AddRoutineForm />
						</Route>
						<PrivateRoute path="/workouts" component={RoutineList} />
					</Switch>
				</header>
				{/* </RoutineContext.Provider> */}
			</UserContext.Provider>
		</div>
	);
}

export default App;
