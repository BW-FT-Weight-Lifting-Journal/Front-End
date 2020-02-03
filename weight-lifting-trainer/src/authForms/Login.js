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
                <input type="text" placeholder="Email" name="email" ref={register({required: true})} />
                <input type="password" placeholder="Password" name="password" ref={register({required: true, min: 4})} />

                <Button type="submit" color="success">Submit</Button>
            </form>
            <div>
                <p>Don't have an account?</p>
                <Button color="success"><Link to="/Signup">Sign Up</Link></Button>
            </div>
        </section>
    );
}


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