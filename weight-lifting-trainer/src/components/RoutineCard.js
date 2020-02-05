import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
export default function RoutineCard(props) {
  return (
    <div className="card">
      <p>{props.routine.name}</p>
      <p>{props.routine.workoutName}</p>
      <p>{props.routine.date}</p>
      <Link to="/workouts/new">create a new workout</Link>
    </div>
  );
}
