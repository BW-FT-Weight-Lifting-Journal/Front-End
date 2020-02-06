import React, { useState, useEffect } from 'react';
import { useForm  } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { axiosWithAuth } from '../axiosWithAuth';
import axios from 'axios';
import * as yup from 'yup';
import { Button } from 'reactstrap';


import React, { useState } from "react";
import axiosWithAuth from '../axiosWithAuth';

const initialWorkout = {
 workoutName: ''
};

export default function EditRoutineForm({ routines, updateRoutines }) {
  console.log(routines);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const [editing, setEditing] = useState(false);
  const [routineToEdit, setRoutineToEdit] = useState(initialColor);
  const [setRoutineToDelete] = useState();

  const editRoutine = routine => {
    setEditing(true);
    setRoutineToEdit(routine);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`workouts/${routineToEdit.id}`, routineToEdit)
      .then(res => {
        console.log(res.data);
        axiosWithAuth()
          .get(`routines`)
          .then(response => updateRoutines(response.data));
      })
      .catch(err => console.error(err));
  };

  const deleteRoutine = routine => {
    axiosWithAuth()
      .delete(`workouts/${routine.id}`)
      .then(res => {
        console.log(`delete: res: `, res);
        setRoutineToDelete(res);
        window.location.reload();
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="Workout name" name="workoutName" ref={register({required: true})} />
    <ul>
        {routines.map(routine => (
          <li key={routine.routine} onClick={() => editRoutine(routine)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteRoutine(routine)
                  }
                }>
                  x
              </span>{" "}
              {routine.routine}
            </span>
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Workout Routine</legend>
          <label>
            Workout Routine Name:
            <input
              onChange={e =>
                setRoutineToEdit({ ...routineToEdit, color: e.target.value })
              }
              value={routineToEdit.routine}
            />
          </label>
          <label>
            Workout Name:
            <input
              onChange={e =>
                setRoutineToEdit({
                  ...routineToEdit,
                  [e.target.name]: e.target.value                
                })
              }
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

    <input type="submit" />
  </form>



    <div className="colors-wrap">
      <h2>colors</h2>
      <ul>
        {routines.map(routine => (
          <li key={routine.routine} onClick={() => editRoutine(routine)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteRoutine(routine)
                  }
                }>
                  x
              </span>{" "}
              {routine.routine}
            </span>
            {/* <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            /> */}
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Workout Routine</legend>
          <label>
            Workout Routine Name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            Workout Name:
            <input
              onChange={e =>
                setRoutineToEdit({
                  ...routineToEdit,
                  [e.target.name]: e.target.value;
                //   code: { hex: e.target.value }
                })
              }
            //   value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
    </div>
  );
};


// export default function EditRoutineForm() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Workout name" name="workoutName" ref={register({required: true})} />
      

//       <input type="submit" />
//     </form>
//   );
// }