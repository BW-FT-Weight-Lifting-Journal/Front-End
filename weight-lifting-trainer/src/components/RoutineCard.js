import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {axiosWithAuth} from '../axiosWithAuth';

export default function RoutineCard(props) {
    const [RoutineCardData, setRoutineCardData] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get("/api/users/:userID/workouts")
        .then (res => setRoutineCardData(res.data))
        .catch(err => console.log("error with useEffect in Routine Card!", err));
     , []

    
    function getRoutineCard(event) {
    event.preventDefault();
    axiosWithAuth()
        .get("/api/users/:userID/workouts")
        .then(res => console.log("response for getRoutineCard function", res))
        .catch((err => console.log("error with getRoutinecard", err)))
    }

    return (
        <>
        <h2>My Routine:</h2>
        <Link to="/routines/creact" className="btn">Create a routine</Link>
       {RoutineCardData.map(item => {
           return (
              <div key={item.workoutID}><
              <Link to={{pathname: `workout/${item.workoutID}`, state: {status: `${item.id}`}}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFPG_ds9_sUzu4zWnsoyGyEtOq3iRB4BVAvNf1zXfcKhVkx7xQw&s" alt="dumbbell" />
                   <h3>{item.workoutName}</h3></            div>
               
                </Link>
              )
       })}
        </>
    )

        }
    )
}