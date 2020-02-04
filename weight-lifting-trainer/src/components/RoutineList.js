import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth';
import { UserContext } from '../contexts/UserContext';

export default function RoutineList() {
    const {routineList, refreshRoutineList} = useContext(UserContext);
    useEffect(() => {
        refreshRoutineList()
    }, [])
    return (
    <>  
        <h1>Workout Routines:</h1>
    
        <Link to="/workouts/new" className="btn">Create a new workout routine</Link>
        {routineList.map(item => {
            return (
                <div className="card" key={item.id}>
                    <Link to={{pathname: `workout/${item.id}`, state: {status: `${item.name}`}}}>
                    <img className="card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFPG_ds9_sUzu4zWnsoyGyEtOq3iRB4BVAvNf1zXfcKhVkx7xQw&s" alt="dumbbell" />
                    </Link>
                </div>
                
                
            )
            
        })}
    </> 
    )
    
}