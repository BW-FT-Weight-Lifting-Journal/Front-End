import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
import axios from "axios";
import RoutineCard from "./RoutineCard";

export default function RoutineList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://weight-lifting-journal-web25.herokuapp.com/api/users/2/workouts")
      .then(res => setData(res.data[0]))
      .catch(err => console.log(err));
  }, []);
  console.log(data, "DATA");
  return (
  
    <Link to="/workouts/exercises">
      <RoutineCard
      name={data.name}
      workoutName={data.workoutName}
        date={data.date}
        routine={data}
        key={data.id}
        routines={props.routines}
        setRoutines={props.setRoutines}
      />
      {/* {console.log("routine in routineList", routine)} */}
    </Link>
    // <button><Link to="/workouts/edit">Edit Workout Routines</Link></button>
    //Link to Edit/Delete Form on a button

  );
}
{
  /* </div> */
}

// <div className="listOfRoutines">
{
  /* {routine.map(routine => { */
}
{
  /* return ( */
}
