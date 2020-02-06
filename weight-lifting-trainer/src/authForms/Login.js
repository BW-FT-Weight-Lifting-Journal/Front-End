import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//local
import { Link, useHistory } from "react-router-dom";
import { Button, InputGroup, Input } from "reactstrap";
import * as yup from "yup";
// import { useForm } from 'react-hook-form';

import { AuthContext } from "../App";


const schema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
    
  password: yup.string().min(4, "Must be 4 characters or longer").required("Password is required")
});


export const Login = () => {
  // const history = useHistory();

  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: "",
    password: ""
  };

  // const { register, handleSubmit, errors } = useForm({validationSchema: schema});

  const [data, setData] = React.useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
   
  const handleFormSubmit = event => {
    //YUP validation
    schema.validate(data)
    //   .catch(function (err) {
    //   err.name;
    //   err.errors; 
    // });
   
    event.preventDefault();
    axios
      .post(
        "https://weight-lifting-journal-web25.herokuapp.com/api/auth/login",
        {
          email: data.email,
          password: data.password
        }
      )
      .then(res => {
        console.log("resJson token", res);

        localStorage.setItem("token", res.data.token);
        // history.push("/workouts");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <StyledSection>
      <div>
        <h1>Lift Tracker</h1>
        <p>-The Weightlifting Journal-</p>
      </div>
      <StyledForm onSubmit={handleFormSubmit}>
        {/* form validaion onSubmit={handleSubmit(handleFormSubmit)} */}
        <StyledGroup>
          <Input
            type="text"
            placeholder="Email"
            value={data.email}
            name="email"
            id="email"
            onChange={handleInputChange}
            required
            // ref={register({required: true, pattern: /^\S+@\S+$/i})}
          />
        </StyledGroup>
        {/* {errors.email && <p>{errors.email.message}</p>} */}
        <StyledGroup>
          <Input
            type="password"
            placeholder="Password"
            value={data.password}
            name="password"
            id="password"
            onChange={handleInputChange}
            required
            // ref={{ required: true, minLength: 4 }}
          />
        </StyledGroup>
        {/* {errors.password && <p>{errors.password.message}</p>} */}

        <StyledButton block type="submit" color="success">
          Login
        </StyledButton>
      </StyledForm>
      <Footer>
        <p>Don't have an account?</p>
        <Link className="botBtn" to="/Signup">
          <Button block outline color="success">
            Sign up
          </Button>
        </Link>
      </Footer>
    </StyledSection>
  );
};

//Styles

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 25%;
`;

const StyledForm = styled.form`
  margin-bottom: 20%;
  margin-top: 15%;
`;

const StyledButton = styled(Button)`
  background-color: #00a35e;
  margin-top: 8%;
`;

// const StyledLink = styled(Link)`
//   color: white;

//   :hover & {
//     text-decoration: none;
//   }
// `;

const StyledGroup = styled(InputGroup)`
  margin-bottom: 2%;
`;

const Footer = styled.div``;

export default Login;

//   return (
//     <div className="login-container">
//       <div className="card">
//         <div className="container">
//           <h1>Login</h1>
//           <form onSubmit={handleFormSubmit}>
//             <label htmlFor="email">
//               Email Address
//               <input
//                 type="text"
//                 value={data.email}
//                 onChange={handleInputChange}
//                 name="email"
//                 id="email"
//               />
//             </label>

//             <label htmlFor="password">
//               Password
//               <input
//                 type="password"
//                 value={data.password}
//                 onChange={handleInputChange}
//                 name="password"
//                 id="password"
//               />
//             </label>
//             <button type="submit">submit</button>
//             {/* {data.errorMessage && (
//               <span className="form-error">{data.errorMessage}</span>
//             )}
//             <button disabled={data.isSubmitting}>
//               {data.isSubmitting ? "loading" : "Login"}
//             </button> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

//  const schema = yup.object().shape({
//    email: yup.string().required(),
		// .email("Invalid email"),
		// .required("Email is required"),

// 	password: yup.string().required()
//         // .min(4, "Password must be at least 4 characters long")
// 		// .required("Password is required"),
// });
