import { Link } from "react-router-dom"
import styled from "styled-components"

export const DashboardStyle = styled.div `
margin-top: 55px;
.center{
  margin: 45px auto;
}
.btn{

  width: 210px;
  display: block;
  margin: 65px auto 0 auto;
  border: none;
  padding: 13px 73px;
  cursor: pointer;
  background: #6F822A;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: background-color 0.5s ease;
  :hover {
  background-color: #97AD3C;
  }
}
`
export const DashboardLink = styled(Link) `
height: 100px;
text-decoration: none;
color: #FFFFFF;
background: #0074A6;
width: 324px;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin: 0 auto;

img{
  background: #0074A6;
}

h3{
  background: #0074A6;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  max-width: 210px;
}

`
