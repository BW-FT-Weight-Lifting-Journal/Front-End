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
        </>
    )

        }
    )
}