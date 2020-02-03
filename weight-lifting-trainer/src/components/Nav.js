import React from 'react';
import styled from 'styled-components'


const Nav = () => {

  return (
    <>
      <Navigate>
      <NavLink href="#">Log In</NavLink>
      <NavLink href="#">Sign Up</NavLink>
      <NavLink href="#">New Work Out</NavLink>
      <NavLink href="#">Work Outs</NavLink>
      </Navigate>
    </>
  );
}

export default Nav;

//styles
const NavLink = styled.a`
color:white;
text-decoration: none;
font-size: 20px;
font-weight: bold;
`
const Navigate = styled.nav`
background-color: #00A35E; 
padding: 1.25%;
display: flex;
justify-content: space-evenly;
position: fixed; 
top: 0; 
width: 100%; 
`