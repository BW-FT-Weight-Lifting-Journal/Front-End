import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth';
import { ExercisesContext } from '../context/ExercisesContext';

const ViewExercisesList = (props) => {
    const [Exercises, setExercises] = useState([]);
    const {ExercisesList, refreshExercisesLists} = useContext(ExercisesContext);
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        axiosWithAuth()
        .get("/api/workouts/:id/exercises")
        .then(res => {
            setExercises(res.data.filter(item => `${item.id}` === params.id))
        })
        .catch(err => console.log(err))
    }, [])

    const deleteExercise = e => {
        e.preventDefault

        axiosWithAuth()
        .delete(`/api/workout/:id/exercises/${params.id}`)
        .then(() => {
            refreshExercisesLists();
            history.push(`/api/users/:userID/workouts`)
        })
    }
}t