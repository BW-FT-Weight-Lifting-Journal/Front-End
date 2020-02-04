import React, {useState, useEffect, useContext} from "react";
import {useParams, useHistory} from "react-router-dom";
import  {axiosWithAuth} from "../axiosWithAuth";
import Styled from "styled-components";
import {Link} from "react-router-dom";

import EditExerciseForm from "./exerciseForms/EditExerciseForm";
import ExercisesContext from "./contexts/ExercisesContext";

export default function ExerciseCard() {
    const [ShowText, setShowText] = useState(true);
    const params = useParams();
    const history = useHistory();
    const {refreshExercises} = useContext()Exercises
 text 
    const {register, handleSubmit, setValue, error} = useForm();  // /anpi/workouts/:id/exercises
 
    const onSubmit = data => {
        const payload = {
            exerciseName: data.exerciseName,
            musclesName: data.musclesName
        };
        axiosWithAuth()
        .put(`/api/workouts/:id/exercises/${params.id}`, payload)
        .then(() => {
            refreshExercises();
            history.push(`/api/workouts/${params.workoutID}`)
        }
        )
    }   return (
        <div className="card">
            
        </div>
    )
}