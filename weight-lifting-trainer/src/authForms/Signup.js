import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../axiosWithAuth";
import * as yup from "yup";
import axios from "axios";
import { AuthContext } from "../App";

import { Button, InputGroup, Input } from "reactstrap";
//local

const schema = yup.object().shape({
password: yup.string().required(),
email: yup.string().required(),
name: yup.string(),
avatar: yup.string()
 });

export const CreateAccount = () => {
  const { dispatch } = React.useContext(AuthContext);
  const { register, handleSubmit } = useForm({ validationSchema: schema });
  const initialState = {
    email: "",
    password: "",
    name: "",
    avatarURL: ""
  };

  const [data, setData] = React.useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    //YUP validation
    schema.validate(data);
    event.preventDefault();
    console.log({
      email: data.email,
      password: data.password,
      name: data.name,
      avatarURL: data.avatarURL
    });
    axios
      .post(
        "https://weight-lifting-journal-web25.herokuapp.com/api/auth/register",
        {
          email: data.email,
          password: data.password,
          name: data.name,
          avatarURL: data.avatarURL
        }
      )
      .then(res => {
        console.log("res USERID", res);

        //localStorage.setItem("token", res.data.token);
        // history.push("/workouts");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StyledSection>
      <h1>Sign Up</h1>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledGroup>
          {/* <label htmlFor="name">
              Full name */}
          <Input
            type="text"
            value={data.name}
            onChange={handleInputChange}
            name="name"
            id="name"
            placeholder="Name"
            //This field not required for backend
          />
          {/* </label> */}
        </StyledGroup>

        <StyledGroup>
          {/* <label htmlFor="email">
              Email Address */}
          <Input
            type="text"
            value={data.email}
            onChange={handleInputChange}
            name="email"
            id="email"
            placeholder="Email"
            required
            // ref={register({
            //   required: true,
            //   pattern: /^\S+@\S+$/i,
            //   message: "An email address is required"
            // })}
          />
          {/* </label> */}
        </StyledGroup>

        <StyledGroup>
          {/* <label htmlFor="password">
              Password */}
          <Input
            type="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
            id="password"
            placeholder="Password"
            required
            // ref={register({ required: true, minLength: 4 })}
          />
          {/* </label> */}
        </StyledGroup>

        <StyledGroup>
          {/* <label htmlFor="avatarURL">
              Profile Picture ( direct URL only) */}
          <Input
            type="text"
            value={data.avatarUrl}
            onChange={handleInputChange}
            name="avatarURL"
            id="avatarURL"
            placeholder="Profile Picture URL"
            //this field not required for Backend
          />
          {/* </label> */}
        </StyledGroup>

        <StyledButton block type="submit" color="success">
          Register
        </StyledButton>
        {/* {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}
            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "loading" : "Signup"}
            </button> */}
      </StyledForm>
      <Footer>
        <p>Already have an account?</p>
        <Link className="botBtn" to="/">
          <Button block outline color="success">
            Login
          </Button>
        </Link>
      </Footer>
    </StyledSection>
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
const StyledButton = styled(Button)`
  background-color: #00a35e;
  margin-top: 8%;
`;

const StyledGroup = styled(InputGroup)`
  margin-bottom: 2%;
`;

const StyledForm = styled.form`
  margin-top: 15%;
`;

const StyledSection = styled.section`
  width: 25%;
  margin-top: 5%;
`;

const Footer = styled.div`
  margin-top: 10%;
`;

export default CreateAccount;
