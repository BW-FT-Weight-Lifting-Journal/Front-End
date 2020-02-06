import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { RoutineContext } from "../../contexts/RoutineContext";
import { useForm } from "react-hook-form";
import { Button, InputGroup, Input } from "reactstrap";
import * as yup from "yup";
import axios from "axios"
import {axiosWithAuth} from '../../axiosWithAuth'
// const schema = yup.object().shape({
//   routine: yup.string().required("Give it a cool name"),

//   muscle: yup.string().required("What areas of the body does this target?")
// });

// export default function AddRoutineForm(props) {
//   const [routine, setRoutine] = useState({
//     workoutName: ""
//   })

//   const handleChanges = (e) => {
//     let value = e.target.value;
//     setRoutine({
//       ...routine,
//       [e.target.name]: value
//     })
//   }
  
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(routine)
// }

  

//   axios.post("/api/users/:id/workouts", routine)
//   .then(res => {
//     console.log(res)
//     props.history.push('/workouts');
//     axios.get("/api/users/2/workouts").then(res => {
//       console.log(res)
//       // props.setRoutines(res.data) <-- remember to put back in once setRoutines is defined with props
//     }).catch(err => console.log(err))
//   })
//   .catch(error => {
//     props.history.push('/workouts')
//   })
//   .catch(err => console.log("error in addroutineform", err))

//   setRoutine({
//     ...routine,
//     workoutName: ''
//   });

//   // const { routine } = useContext(RoutineContext)
//   // const history = useHistory();
//   // const [newRoutine, setNewRoutine] = useState({
//   //   workoutName: ""
//   // });
 
//   // const handleChanges = (event, props) => {
//   //   const routine = event.target.name;
//   //   console.log("e.targ.name", routine);
//   //   console.log(newRoutine, "newroutine");
//   //   setNewRoutine({
//   //     ...newRoutine,
//   //     [routine]: event.target.value      
//   //   });
    
//   //   const handleSubmit = (event, props) => {
//   //     event.preventDefault();
//   //     const payload = {
//   //       workoutName: routine.props.workoutName
//   //     }
    
//   //     axiosWithAuth()
//   //       .post("/api/users/2/workouts", payload)
//   //       .then(() => history.push("/workouts"))
//   //       .catch(error => console.log(`error: ${error}`));
//   //     console.log("payload", payload);
//   //     console.log("routine.props", routine.props);
//   //     // const { register, errors } = useForm({
//   //     //   validationSchema: schema
//   //     // });
//   //   }
  
//   return (
//     <>
//     <section>
//       <div>
//         <h2>Add Routine</h2>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <InputGroup>
//           <Input
//             type="text"
//             placeholder="Name Your Routine"
//             name="routine"
//             onChange={handleChanges}
//             value={routine.workoutName}
//           />
//           {/* {errors.routine && <p>{errors.routine.message}</p>} */}
//           {/* {errors.muscle && <p>{errors.muscle.message}</p>} */}
//           <Button type="submit" color="success">
//             SUBMIT
//           </Button>
//         </InputGroup>
//       </form>
//       <div>
//         <Button outline color="secondary">
//           Delete
//         </Button>
//         <Button outline color="secondary">
//           Copy
//         </Button>
//         <Button color="success">Save</Button>
//       </div>
//     </section>
//     </>
//   );
    
// }
//styles

const AddUserData = props => {
  const [userInfo, setUserInfo] = useState({
    user_age: "",
    user_height: "",
    user_weight: ""
  });

  const handleChange = e => {
    e.persist()
    let value = e.target.value
    if(e.target.name === 'user_age'){
      value = parseInt(value, 10)
    }

    setUserInfo({
      ...userInfo,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo)
    console.log(props.userid)
    let tempID = props.userId
    axiosWithAuth()
      .post(`/users/${props.userid}/info`, userInfo)
      .then(res => {
        console.log(res)
        props.setUserid(0)
        props.setUserid(tempID)
        props.history.push('/dashboard')
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="user-container">
      <h1>Update Your Info</h1>
      <div className="user-form-container">  
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Age:</label>
        <input
          type="number"
          name="user_age"
          placeholder="Age.."
          onChange={handleChange}
          required
        />
        <label>Height:</label>
        <input
          type="text"
          name="user_height"
          placeholder="Height.."
          onChange={handleChange}
          required
        />
        <label>Weight:</label>
        <input
          type="text"
          name="user_weight"
          placeholder="Weight.."
          onChange={handleChange}
          required
        />
        <button className="user-button" type="submit">Submit</button>
      </form>
      </div>  
    </div>
  );
};

export default AddUserData;
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
