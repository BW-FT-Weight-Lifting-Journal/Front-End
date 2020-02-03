import React, {useState} from 'react';
import styled from 'styled-components';
//local
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'reactstrap';


export default function Login(){
    
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
         
    return (
        <section>
            <div>
                <h1>Lift Tracker</h1>
                <p>The Weightlifting Journal</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="Email" name="email" ref={register({
                    required: true, pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })} />
                {errors.email && errors.email.message}

                <input type="password" placeholder="Password" name="password" ref={register({ required: true, min: 4})} />
                {errors.password && errors.password.message}
                <Button type="submit" color="success">SUBMIT</Button>
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