import {createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

.card{
    width: 150px;
    height: 150px;
    background: white;
    border: 4px solid lightgrey;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .card:hover{
    border: 4px solid grey;
  }
`

export default GlobalStyle;