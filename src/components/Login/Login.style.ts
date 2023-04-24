import styled from "styled-components"

export const LoginStyle = styled.div `
form{
    display: flex;
    flex-direction:column;
    align-items:start;
    label{
      margin-bottom: 30px;
      input{
        margin-bottom: 18px;
      }
      span{
        background: #F5F5F5;
      }
    }
    input{
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border: none;
      border-radius: 25px;
      width: 346px;
      padding: 12px 0 12px 21px;
      font-style: italic;
      font-size: 20px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.53);
    }
    button{
      background: #6F822A;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      padding: 10px 45px;
      max-width:200px;
      border: none;
      font-style: normal;
      font-weight: 700;
      font-size: 12.8px;
      line-height: 16px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: #FFFFFF;
      cursor: pointer;
      margin: 30px auto 30px auto;
    }
    input:focus {
    outline: none;
    }
  }
`
