import React from 'react';
import styled from 'styled-components'


const NavAuthed = () => {

  return (
    <>
      <Navigate>
      <NavLink exact to ="/Login">New Work Out</NavLink>
      <NavLink exact to="/Signup">Work Outs</NavLink>
      </Navigate>
    </>
  );
}

export default NavAuthed;

//styles
const NavLink = styled.link`
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