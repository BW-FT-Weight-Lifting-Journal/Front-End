import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import * as yup from "yup";
import axios from "axios";

import { Button, InputGroup, Input } from "reactstrap";
//local

const schema = yup.object().shape({
  // username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  name: yup.string(),
  avatar: yup.string()
});

const CreateAccount = props => {
  const [userCredentials, setUserCredentials] = useState({});
  const { register, handleSubmit } = useForm({ validationSchema: schema });
  const onSubmit = async data => {
    if (data.password === data.confirmPassword) {
      setUserCredentials({
        email: data.email,
        password: data.password,
        name: data.name,
        avatarURL: data.avatar
      });
      console.log(userCredentials);
      console.log("props", props);
    }
  };
  useEffect(() => {
    // axiosWithAuth()
    axios
      .post("/api/auth/register", userCredentials)

      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        // setUserCredentials.history.push('/login')
      })
      .catch(error => console.log("ERROR", error));
  }, [userCredentials]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <div className="formGroup">
      
        <StyledGroup>
        <Input
          type="text"
          id="name"
          placeholder="Full name"
          name="name"
          ref={register({ maxLength: 30 })}
        />
        </StyledGroup>
        {/* <input type="text" id="username" placeholder="Username" name="username" ref={register({required: true, maxLength: 15})}/> */}
        {/* {errors.username && 'A username is required'} */}
        
        <StyledGroup>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true, minLength: 4 })}
         />
        </StyledGroup>
        
        <StyledGroup>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          name="confirmPassword"
          ref={register({ required: true, minLength: 4 })}
          />
        </StyledGroup>
        
        <StyledGroup>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
            message: "An email address is required"
          })}
         />
        </StyledGroup>
        
        <StyledGroup>
        <Input 
          type="text"
          id="avatar"
          placeholder="Profile Picture"
          name="avatar"
          ref={register}
        />
        </StyledGroup>
      
      </div>
      <StyledButton type="submit">Create Account</StyledButton>

      <h3> Already have an account?</h3>
      <h3>
        {" "}
        <Link exact to="/">
          <SignUp>Login</SignUp>
        </Link>
      </h3>

    </form>
  );
};

//styles
const SignUp = styled.button`
  background-color: white;
  color: #00a35e;
  padding: 0.5%;
  font-weight: bold;
  font-family: Roboto;
  font-size: 16px;
  border-radius: 5px;
`;
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

const StyledGroup = styled(InputGroup)`
  margin: 2%;
`;
export default CreateAccount;
