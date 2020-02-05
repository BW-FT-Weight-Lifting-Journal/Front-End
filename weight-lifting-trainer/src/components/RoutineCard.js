import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import RoutineContext from "../contexts/RoutineContext";
export default function RoutineCard(props) {
  return (
    <div className="card">
      <p>{props.name}</p>
      <p>{props.workoutName}</p>
      <p>{props.date}</p>
      <Link to={{ pathname: "/workouts/new" }}>create a new workout</Link>
    </div>
  );
}
