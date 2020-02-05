import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
p{
  color: black;
}
.card{
    width: 600px;
    height: 500px;
    color: black;
    background: lightgrey;
    border: 4px solid lightgrey;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .card:hover{
    border: 4px solid black;
    background: grey;
  }
  
`;

export default GlobalStyle;
