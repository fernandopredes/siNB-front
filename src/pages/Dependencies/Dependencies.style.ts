import { Link } from "react-router-dom"
import styled from "styled-components"

export const DependenciesStyle = styled.div `
display: flex;
flex-direction: column;
align-items: center;

button{
  margin: 2rem 0;
  font-style: normal;
  font-weight: 700;
  font-size: 12.8px;
  line-height: 18px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  background: #6F822A;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  color: #FFFFFF;
  padding: 8px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  :hover {
  background-color: #97AD3C;
  }
}

`
export const DependenciesLink = styled(Link) `
text-decoration: none;
font-weight: 500;
color: white;
width: 80%;
background-color: #0057A0;
border-radius: 25px;
padding: 0.5rem 2rem;
margin: .5rem 0;
`
