import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { RoutineContext } from "../../contexts/RoutineContext";
import { useForm } from "react-hook-form";
import { Button, InputGroup, Input } from "reactstrap";
import * as yup from "yup";
import { axiosWithAuth } from "../axiosWithAuth";

const schema = yup.object().shape({
  routine: yup.string().required("Give it a cool name"),

  muscle: yup.string().required("What areas of the body does this target?")
});

export default function AddRoutineForm() {
  // const { routine } = useContext(RoutineContext)
  const history = useHistory();
  const [newRoutine, setNewRoutine] = useState({
    workoutName: ""
  });

  // console.log("addRoutine in addroutineform", addRoutine);

  const handleChanges = event => {
    const routine = event.target.name;
    console.log("e.targ.name", routine);
    console.log(newRoutine, "newroutine");
    setNewRoutine({
      ...newRoutine,
      [routine]: event.target.value
    });

    function handleSubmit(event) {
      event.preventDefault();
      const payload = {
        workoutName: routine.workoutName
      };

      axiosWithAuth()
        .post("/api/users/2/workouts", payload)
        .then(() => history.push("/workouts"))
        .catch(error => console.log(`error: ${error}`));
      console.log("payload", payload);

      const { register, errors } = useForm({
        validationSchema: schema
      });
    }
    return (
      <section>
        <div>
          <h2>Add Routine</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Name Your Routine"
              name="routine"
              ref={register}
              onChange={handleChanges}
              value={newRoutine.name}
            />
            {errors.routine && <p>{errors.routine.message}</p>}

            <Input
              type="text"
              placeholder="Target Muscles"
              name="muscle"
              ref={register}
              onChange={handleChanges}
              value={routine.workoutName}
            />
            {errors.muscle && <p>{errors.muscle.message}</p>}
            {/* onClick={handleSubmit} */}
            <Button type="submit" color="success">
              SUBMIT
            </Button>
          </InputGroup>
        </form>
        <div>
          <Button outline color="secondary">
            Delete
          </Button>
          <Button outline color="secondary">
            Copy
          </Button>
          <Button color="success">Save</Button>
        </div>
      </section>
    );
  };
}

//styles

const StyledButton = styled.button`
  background-color: #00a35e;
  color: white;
  padding: 0.5%;
  font-weight: bold;
  font-family: Roboto;
  font-size: 16px;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  color: white;
  :hover & {
    text-decoration: none;
  `;
