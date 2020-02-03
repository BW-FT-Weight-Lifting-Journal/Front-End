import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth';
import { UserContext } from '../context/UserContext';

export default function WorkoutList() {
    const {workoutlists, refreshWorkoutLists} = useContext(UserContext);
    useEffect(() => {
        refreshWorkoutLists()
    }, [])
    return (
        <>
        <h1>Workouts:</h1>
        <Link to="/workouts/new" className="btn">Create a new workout</Link>
        </>
    )
}