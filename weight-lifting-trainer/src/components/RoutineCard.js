import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";


//Function Comp - const id = this.props.match.params.id no work
export default function RoutineCard(props){
  // console.log(props, "can you see me?");
  // const { routines, setRoutines } = props;
  
  // const handleDelete = e => {
  //   // const id = this.props.match.param.id; //trying this to dynamic id
  //   e.preventDefault();
  //   axiosWithAuth.delete(`api/workouts/1`).then(res => {
  //     const newRoutines = routines.filter(routine => {
  //       return routine.id !== id;
  //     });
  //     setRoutines(newRoutines);
  //   });
  // };

  return (
    <>
    {/* <RHeader>Workout Routines</RHeader>
    <RCard className="card">
      <RPTag>{props.name}</RPTag>
      <RPTag>{props.workoutName}</RPTag>
      <RPTag>{props.date}</RPTag> */}
      {/* <button><RLink to="/workouts/new">create a new workout</RLink></button>
      <button ><RLink to="/workouts/edit">Edit Workout Routines</RLink></button>
      <button onClick={e => handleDelete(e)}>Delete</button> */}
    {/* </RCard> */}
    </>
  );
}
 // const handleEdit = e =>{
//     // const id = this.props.match.param.id;
//     e.preventDefault();
//     axiosWithAuth.put(`api/workouts/1`, routineToEdit)
//     .then(res => {
//       console.log(res.data);
//       axiosWithAuth()
//         .get(`routines`)
//         .then(response => updateRoutines(response.data));
//     })
//     .catch(err => console.error(err));
// };
  
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