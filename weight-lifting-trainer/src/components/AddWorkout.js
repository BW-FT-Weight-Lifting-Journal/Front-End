import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddWorkout = props => {
  const [workout, setWorkout] = useState({
    exerciseName: "",
    musclesName: ""
  });

  const handleChanges = e => {
    let value = e.target.value;
    if (e.target.name === "exerciseName" || e.target.name === "musclesName") {
      value = parseInt(value, 10);
    }
    setWorkout({
      ...workout,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(workout);
    console.log(props.userid);
    axiosWithAuth()
      .post(`/api/users/${props.userid}/workouts`, workout)
      .then(response => {
        console.log(response);
        props.history.push("/dashboard");
        axiosWithAuth()
          .get(`/api/users/${props.userid}/workouts`)
          .then(res => {
            console.log(res);
            props.setWorkouts(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(error => {
        console.log("Data not returned AddWorkout.js", error);
        props.history.push("/dashboard");
      });
    props.setUserid(props.userid);

    setWorkout({
      ...workout,
      exerciseName: "",
      musclesName: ""
    });
  };

  return (
    <div className="add-container">
      <h1>Add Exercise</h1>
      <div className="add-form-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            className="workout-input"
            placeholder="Workout Name"
            name="workout"
            type="text"
            value={workout.exerciseName}
            onChange={handleChanges}
            required
          />
          <input
            className="workout-input"
            placeholder="Body Region"
            name="body_region"
            type="text"
            value={workout.musclesName}
            onChange={handleChanges}
            required
          />
          <button className="add-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
