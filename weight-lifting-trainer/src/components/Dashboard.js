import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const handleDelete = e => {
    console.log(e.target.id);
    axiosWithAuth()
      .delete(`/api/exercises/${e.target.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    axiosWithAuth()
      .get(`/api/users/${props.userid}/workouts`)
      .then(res => {
        console.log(res.data);
        props.setWorkouts(res.data);
        props.setUserid(props.userid);
      })
      .catch(err => console.log(err));
  };

  const handleEdit = e => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.getAttribute("name") === "userdata") {
      props.history.push(`/updateuserinfo/${e.target.id}`);
    } else if (e.target.getAttribute("name") === "exercisedata") {
      props.history.push(`/updateworkout/${e.target.id}`);
    } else return;
  };

  return (
    <div>
      <div className="adduser-container">
        <Link to={`/addinfo`}>Add Body Weight Entry</Link>
      </div>
      <div className="body-weight-entry">
        <h1>Body Weight Entries</h1>
        {props.userData.map(entry => (
          <div key={entry.id}>
            <h1>{entry.created_at.slice(0, 10)}</h1>
            <h2>{entry.user_weight}</h2>
            <label name="userdata" id={entry.id} onClick={handleEdit}>
              Edit
            </label>
          </div>
        ))}
      </div>
      <div className="exercise-entry">
        <h1>Exercise Entries</h1>
      </div>
      {props.workouts.map(exercise => (
        // <Workout workouts={workouts} />
        <div className="workout-container" key={exercise.id}>
          <div className="workout-card">
            <div className="workout-items">
              <p>
                <span>Exercise: </span>
                {exercise.workout}
              </p>
              <p>
                <span>Target Muscles: </span>
                {exercise.body_region}
              </p>
              <p>
                <span>Weight: </span>
                {exercise.weight}
              </p>
              <p>
                <span>Reps: </span>
                {exercise.reps}
              </p>
              <p>
                <span>Sets: </span>
                {exercise.sets}
              </p>
              <p>
                <span>Notes: </span>
                {exercise.notes}
              </p>
              <p>{exercise.created_at.slice(0, 10)}</p>
            </div>
            <div className="button-container">
              <button
                name="exercisedata"
                className="far fa-edit"
                id={exercise.id}
                onClick={handleEdit}
              />
              <button
                className="fas fa-trash-alt"
                id={exercise.id}
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
