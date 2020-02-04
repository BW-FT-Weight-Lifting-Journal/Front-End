import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <>
      <Navigate>
      <NavLink exact to='/'>Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink> 
      <NavLink to = '/addworkform'>New Work Out</NavLink>
      <NavLink to='/workouts'>Work Outs</NavLink>
      </Navigate>
    </>
  );
}

export default Nav;

//styles
const NavLink = styled(Link)`
color:white;
text-decoration: none;
font-size: 20px;
font-weight: bold;
`
const Navigate = styled.div`
background-color: #00A35E; 
padding: 1.25%;
display: flex;
justify-content: space-evenly;
position: fixed; 
top: 0; 
width: 100%; 
`