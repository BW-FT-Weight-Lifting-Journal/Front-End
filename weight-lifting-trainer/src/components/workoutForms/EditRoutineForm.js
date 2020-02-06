import { axiosWithAuth }from '../../axiosWithAuth';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm  } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import { Button } from 'reactstrap';


export default function EditRoutineForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Workout name" name="workoutName" ref={register({required: true})} />
      

      <input type="submit" />
    </form>
  );
}