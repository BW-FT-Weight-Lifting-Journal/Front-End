import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
//local
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, InputGroup, Input  } from 'reactstrap';
import { axiosWithAuth } from '../axiosWithAuth';
import * as yup from "yup";


 const schema = yup.object().shape({
   email: yup.string().required(),
		// .email("Invalid email"),
		// .required("Email is required"),

	password: yup.string().required()
        // .min(4, "Password must be at least 4 characters long")
		// .required("Password is required"),
});

const Login = (props) => {
    const [userCredentials, setUserCredentials] = useState({});
    const { register, handleSubmit } = useForm({validationSchema: schema});
    const onSubmit = (data, event) => {

         setUserCredentials({
            'email': data.email,
            'password': data.password
        })
        axios
            .post('api/auth/login', userCredentials)
            
            .then(response => {
                console.log("Login", userCredentials, response.data); 
                //localStorage.setItem('token', response.data.token)
                // SOMETHING.history.push('/workout)
            })
            .catch(error => console.log('ERROR',error));
        console.log(userCredentials);
        console.log('props', props)
    }
   
    // useEffect(() => {
    //     // axiosWithAuth()
    //     axios
    //         .post('api/auth/login', userCredentials)
            
    //         .then(response => {
    //             console.log("Login", userCredentials, response.data); 
    //         })
    //         .catch(error => console.log('ERROR',error));
    // }, [userCredentials]);
            
    return (
        <section>
            <div>
                <h1>Lift Tracker</h1>
                <p>The Weightlifting Journal</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Input type="email" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                    {/* ref={register({required: true, pattern: /^\S+@\S+$/i */}

                    {/* {errors.email && <p>{errors.email.message}</p>} */}

                    <Input type="password" placeholder="Password" name="password" ref={register({required: true, minLength:4})} /> 
                    {/* ref={register({required: true, minLength: 4})}                */}
                    {/* {errors.password && <p>{errors.password.message}</p>} */}
                    
                    <Button type="submit" color="success">SUBMIT</Button>
                </InputGroup>
            </form>
            <div>
                <p>Don't have an account?</p>
                <StyledLink to="/Signup"><Button outline color="success">Sign up</Button></StyledLink>
            </div>
        </section>
    );
};

 //Styles
const StyledButton = styled.button`
    background-color: #00A35E; 
    color:white;
    padding: 0.5%;
    font-weight: bold;
    font-family: Roboto;
    font-size: 16px;
    border-radius: 5px;
   `

const StyledLink = styled(Link)`
   color:white;
    :hover & {
        text-decoration:none;
    }
`
export default Login;