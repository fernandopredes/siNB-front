import { Link } from "react-router-dom"
import styled from "styled-components"

export const RegisterStyle = styled.div `
  form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 100%;
    h2{
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 66px;
      color: #0074A6;
      margin: 55px 0 35px 0;
    }
    label{
      display: flex;
      flex-direction:column;
      span{
        margin-top: 18px;
        margin-bottom: 30px;
        text-align:center;
        color: #003D77;
      }
    }
    input{
      margin: 0px 0px 0px 0;
      background: #FFFFFF;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      width: 346px;
      border: none;
      padding: 15px 0 15px 15px
    }
    button{
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
      padding: 15px 45px;
      border: none;
      cursor: pointer;
      transition: background-color 0.5s ease;
      :disabled {
      background-color: gray;
      cursor: not-allowed;
      }
      :hover {
      background-color: #97AD3C;
      }
    }

    input:focus {
    outline: none;
    }

  }
  .buttons{
    display: flex;
    justify-content:space-between;
    width: 360px;
  }
`
export const BtnGoBack = styled(Link)`
  background: #6F822A;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  font-style: normal;
  font-weight: 700;
  font-size: 12.8px;
  line-height: 18px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 15px 45px;
  border: none;
  cursor: pointer;
  text-decoration:none;
  transition: background-color 0.5s ease;
  :hover {
  background-color: #97AD3C;
  }
`
