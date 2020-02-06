import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
export default function RoutineCard(props) {
  console.log(props, "can you see me?");
  return (
    <RCard className="card">
      <p>{props.name}</p>
      <p>{props.workoutName}</p>
      <p>{props.date}</p>
      <Link to="/workouts/new">create a new workout</Link>
    </RCard>
  );
}

//STYLES
const RCard = styled.div`
  background-color: #00a35e;
  color: white;
  font-family: Roboto;
`;
