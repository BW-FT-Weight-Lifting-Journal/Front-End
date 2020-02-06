import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
export default function RoutineCard(props) {
  console.log(props, "can you see me?");
  return (
    <>
    <RHeader>Workout Routines</RHeader>
    <RCard className="card">
      <RPTag>{props.name}</RPTag>
      <RPTag>{props.workoutName}</RPTag>
      <RPTag>{props.date}</RPTag>
      <RLink to="/workouts/new">create a new workout</RLink>
    </RCard>
    </>
  );
}

//STYLES
const RCard = styled.div`
  border: 5px solid #00a35e !important;
  background-color: white !important;
`;

const RPTag = styled.p`
font-family: Roboto !important;
color: #00a35e !important;
`

const RLink = styled(Link)`
color: black;
text-decoration: none;
font-weight: bold;
`
const RHeader = styled.h2`
color: black;
text-decoration: none;
font-weight: bold;
`