import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { axiosWithAuth } from '../axiosWithAuth';
import axios from "axios";
import * as yup from "yup";
import { Button } from "reactstrap";
import { AuthContext } from "../../contexts/AuthContext";

// const schema = yup.object().shape({
//   workoutName: yup.string().required(),
//   muscleGroup: yup.string().required()
// });

export default function AddWorkoutForm() {
  //
  const { addExercise } = useContext(AuthContext);

  const [newExercise, setNewExercise] = useState({
    name: "",
    musclesName: "",
    id: NaN
  });

  const handleSubmit = event => {
    event.preventDefault();
    addExercise(newExercise);
  };

  const handleChanges = event => {
    setNewExercise({
      ...newExercise,
      [event.target.name]: event.target.value,
      id: Date.now()
    });
  };
  //
  // const { register, errors } = useForm({
  //   validationSchema: schema
  // });
  const onSubmit = data => console.log(data);
  // console.log(errors);

  return (
    <section>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <p>What is your exercise called?</p> */}
        <input type="text" placeholder="Name of exercise" name="exerciseName" onChange={handleChanges} value={newExercise.exercisename}/>
        
      
        <input type="text" placeholder="Target Muscle Group" name="musclesName" onChange={handleChanges} value={newExercise.musclesName}/>
        {/* <p>Muscle group this targets</p> */}
      
        <StyledButton type="submit">Save</StyledButton>
        </form>
    </section>
  );
}

//styles

const StyledButton = styled.button`
  background-color: #00a35e;
  color: white;
  padding: 0.5%;
  font-weight: bold;
  font-family: Roboto;
  font-size: 16px;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  color: white;
  :hover & {
    text-decoration: none;
  }
`;
