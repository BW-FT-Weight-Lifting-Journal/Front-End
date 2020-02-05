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
import axios from "axios";

function App() {
	const [routineList, setRoutine] = useState([]);
	const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")));
	const routine = useContext(RoutineContext);
	// const user = useContext(UserContext)
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://weight-lifting-journal-web25.herokuapp.com/api/users/2/workouts"
			)
			.then(response => {
				setData(response.data);
				console.log('RES', response)
				console.log('RES.Dat', response.data)
				return(data)			
			});
	}, []);
	const refreshRoutine = () => {
		axios
			.get(`https://weight-lifting-journal-web25.herokuapp.com/api/users/2/workouts`)
			//remember to put in ${id} once login works
			.then(res => {
				setRoutine(res.data);
				console.log("this is the res.data in app", res.data);
			})
			.catch(err => console.log("error fetching", err.message));
	};

	const getCurrentEmail = email => {
		axios
			.get("https://weight-lifting-journal-web25.herokuapp.com/api/users/")
			.then(res => {
				const email = res.data.user.find(account => account.email === email);
				console.log(res);
				localStorage.setItem("email", JSON.stringify(email));
				setEmail(email);
			})
			.catch(err => console.log("error on fetch email info:", err.message));
	};
	return (
		<div className="App">
			<UserContext.Provider value={data}>
				{console.log(data)}
 data", 				<RoutineContext.Provider
					value={(routineList, refreshRoutine, getCurrentEmail, email)}
				>
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
							<PrivateRoute path="/workouts" component={RoutineList} />
						</Switch>
					</header>
				</RoutineContext.Provider>
			</UserContext.Provider>
		</div>
	);
}
export default App;
