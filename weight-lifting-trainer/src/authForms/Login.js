import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//local
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, InputGroup, Input } from "reactstrap";
import { axiosWithAuth } from "../axiosWithAuth";
import * as yup from "yup";

import { AuthContext } from "../App";

export const Login = () => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  const [data, setData] = React.useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    axios(
      "https://weight-lifting-journal-web25.herokuapp.com//api/auth/login",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: data.token
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(resJson => {
        dispatch({
          type: "LOGIN",
          payload: resJson
        });
      })
      .catch(error => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText
        });
      });
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>

            <label htmlFor="email">
              Email Address
              <input
                type="text"
                value={data.email}
                onChange={handleInputChange}
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>

            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "loading" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

//  const schema = yup.object().shape({
//    email: yup.string().required(),
// 		// .email("Invalid email"),
// 		// .required("Email is required"),

// 	password: yup.string().required()
//         // .min(4, "Password must be at least 4 characters long")
// 		// .required("Password is required"),
// });

// const Login = (props) => {
//     const [userCredentials, setUserCredentials] = useState({});
//     const { register, handleSubmit } = useForm({validationSchema: schema});
//     const onSubmit = (data, event) => {

//          setUserCredentials({
//             'email': data.email,
//             'password': data.password
//         })
//         axios
//             .post('api/auth/login', userCredentials)

//             .then(response => {
//                 console.log("Login", userCredentials, response.data);
//                 //localStorage.setItem('token', response.data.token)
//                 // SOMETHING.history.push('/workout)
//             })
//             .catch(error => console.log('ERROR',error));
//         console.log(userCredentials);
//         console.log('props', props)
//     }

// useEffect(() => {
//     // axiosWithAuth()
//     axios
//         .post('api/auth/login', userCredentials)

//         .then(response => {
//             console.log("Login", userCredentials, response.data);
//         })
//         .catch(error => console.log('ERROR',error));
// }, [userCredentials]);

//   return (
//     <section>
//       <div>
//         <h1>Lift Tracker</h1>
//         <p>The Weightlifting Journal</p>
//       </div>
//       <form onSubmit={handleFormSubmit}>
//         <InputGroup>
//           <Input
//             type="email"
//             placeholder="Email"
//             value={data.email}
//             name="email"
//             onChange={handleInputChange}
//             ref={{ required: true, pattern: /^\S+@\S+$/i }}
//           />
//           {/* ref={register({required: true, pattern: /^\S+@\S+$/i */}

//           {/* {errors.email && <p>{errors.email.message}</p>} */}

//           <Input
//             type="password"
//             placeholder="Password"
//             value={data.password}
//             name="password"
//             onChange={handleInputChange}
//             ref={{ required: true, minLength: 4 }}
//           />
//           {/* ref={register({required: true, minLength: 4})}                */}
//           {/* {errors.password && <p>{errors.password.message}</p>} */}

//           <Button type="submit" color="success">
//             SUBMIT
//           </Button>
//         </InputGroup>
//       </form>
//       <div>
//         <p>Don't have an account?</p>
//         <StyledLink to="/Signup">
//           <Button outline color="success">
//             Sign up
//           </Button>
//         </StyledLink>
//       </div>
//     </section>
//   );
// };

//Styles
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
  }
`;
export default Login;
