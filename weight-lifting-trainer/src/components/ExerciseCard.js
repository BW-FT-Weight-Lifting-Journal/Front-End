import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
export default function ExerciseCard(props) {
  return (
    <>
    <h2>Exercises</h2>
    <ECard className="card">
      <EPTag>{props.exerciseName}</EPTag>
      <EPTag>{props.musclesName}</EPTag>
      <ELink to={{ pathname: "/workouts" }}>workouts</ELink>
    </ECard>
    </>
  );
}

//STYLES
const ECard = styled.div`
  border: 5px solid #00a35e !important;
  background-color: white !important;
`;
const EPTag = styled.p`
font-family: Roboto !important;
color: #00a35e !important;
`

const ELink = styled(Link)`
color: black;
text-decoration: none;
font-weight: bold;
`
