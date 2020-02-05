import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
export default function ExerciseCard(props) {
  return (
    <div className="card">
      <p>{props.exerciseName}</p>
      <p>{props.musclesName}</p>
      <Link to={{ pathname: "/workouts" }}>workouts</Link>
    </div>
  );
}
