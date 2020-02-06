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

// const schema = yup.object().shape({
//   // username: yup.string().required(),
//   password: yup.string().required(),
//   email: yup.string().required(),
//   name: yup.string(),
//   avatar: yup.string()
// });

export const CreateAccount = () => {
  const { dispatch } = React.useContext(AuthContext);
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
    <div className="signup-container">
      <div className="card">
        <div className="container">
          <h1>Sign Up</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">
              Full name
              <input
                type="text"
                value={data.name}
                onChange={handleInputChange}
                name="name"
                id="name"
              />
            </label>
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
            <label htmlFor="avatarURL">
              Profile Picture ( direct URL only)
              <input
                type="text"
                value={data.avatarUrl}
                onChange={handleInputChange}
                name="avatarURL"
                id="avatarURL"
              />
            </label>
            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}
            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "loading" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
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
