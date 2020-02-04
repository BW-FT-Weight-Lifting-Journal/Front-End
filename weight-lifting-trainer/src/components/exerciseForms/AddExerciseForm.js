import React, { useState, useEffect } from 'react';
import { useForm  } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { axiosWithAuth } from '../axiosWithAuth';
import axios from 'axios';
import * as yup from 'yup';
import { Button } from 'reactstrap';

const schema = yup.object().shape({
    workoutName: yup.string().required(),
    muscleGroup: yup.string().required()

 });

export default function AddWorkoutForm() {
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" name="workoutName" ref={register} />
        <p>What is your exercise called?</p>
        <input type="text" placeholder="Muscle Group" name="muscleGroup" ref={register} />
        <p>Muscle group this targets</p>
        <StyledButton type="submit">Save</StyledButton>
      </form>
    );
  }

  //styles

const StyledButton = styled.button`
background-color: #00A35E; 
color:white;
padding: 0.5%;
font-weight: bold;
font-family: Roboto;
font-size: 16px;
border-radius: 5px;
`

const StyledLink = styled(Link)`
color:white;
:hover & {
    text-decoration:none;
}
`;