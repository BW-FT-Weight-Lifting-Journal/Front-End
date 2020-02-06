import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
import axios from "axios";
import RoutineCard from "./RoutineCard";

export default function Routine() {
  const { routine } = useContext(RoutineContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://weight-lifting-journal-web25.herokuapp.com/api/users/2/workouts"
      )
      .then(response => {
        console.log(response, "Routine List res");
        setData(response.data[0]);
        console.log("RoutineList response.data", response.data);

        //map with RoutineList either by importing RL or moving this to RL
      });
  }, []);
  console.log(data, "DATA");
  return (
    <Link to="/workouts/exercises">
      <RoutineCard
        key={routine.id}
        routine={routine}
        name={data.name}
        workoutName={data.workoutName}
        date={data.date}
      />
      {console.log("routine in routineList", routine)}
    </Link>
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
