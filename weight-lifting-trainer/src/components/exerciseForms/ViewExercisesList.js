import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth';
import { UserContext } from '../context/UserContext';

export default function ExercisesList(){
    const [exercises, refreshExercises] = useContext(UserContext);
    useEffect(() => {
        refreshExercises()
    }, [])

    return(
        <>
    <h1>Exercises:</h1>
    
    <Link to="/workouts/new" className="btn">Add new exercise</Link>
    {exercises.map(item => {
        return (
            <div className="card" key={item.id}>
                <Link to={{pathname: `exercise/${item.id}`, state: {status: `${item.name}`}}}>
                <img className="card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFPG_ds9_sUzu4zWnsoyGyEtOq3iRB4BVAvNf1zXfcKhVkx7xQw&s" alt="dumbbell" />
                </Link>
            </div>
            
            
        )
        
    })}
        </>
    )
}