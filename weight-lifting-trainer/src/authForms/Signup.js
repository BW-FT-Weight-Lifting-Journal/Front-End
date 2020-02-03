import React, {useContext} from 'react';
import { useForm  } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//local

export default function Signup(){
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
        <input type="text" placeholder="Full name" name="name" ref={register} />
        <input type="text" placeholder="Username" name="username" ref={register} required/>
        <input type="text" placeholder="Password" name="password" ref={register} required/>
        <input type="email" placeholder="Email" name="email" ref={register} required/>
        <input type="text" placeholder="Profile Picture" name="avatar" ref={register} />
  
        <button className='reverseBtn'>Sign up</button>

        <h3> Already have  an account?</h3>
        <h3> <Link exact to="/Signup">
          Signup
        </Link></h3>
      </form>
    );
  }


//styles
const SignUp = styled.button`  
    background-color: white;
    color: #00A35E; 
    padding: 0.5%;
    font-weight: bold;
    font-family: Roboto;
    font-size: 16px;
    border-radius: 5px;
`