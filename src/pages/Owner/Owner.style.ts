import styled from "styled-components"

export const OwnerStyle = styled.div`
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
      padding: 5px 10px;
      border: none;
      cursor: pointer;
      transition: background-color 0.5s ease;
      :hover {
      background-color: #97AD3C;
      }
      :disabled {
      background-color: gray;
      cursor: not-allowed;
      }
    }
  form {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;

    label {
      margin-right: 8px;
    }

    input {
      border-radius: 25px;
      padding: 10px 25px;
      margin-right: 8px;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-weight: 500;
    color: #003D77;

    th, td {
      border: 2px solid #003D77;
      padding: 8px;
      text-align: center;
      background-color: #DAEB96;
    }

    th {
      background-color: #97AD3C;
      color: #003D77;
      font-weight: bold;
    }

    tbody tr:hover {
      background-color: #f0f0f0;
    }

    img {
      height: 16px;
      margin-left: 4px;
      vertical-align: middle;
      background-color: #DAEB96;
    }

    button {
      margin: 8px;
      padding: 8px;
    }

    div {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
    span{
      background-color: #DAEB96;
    }
  }
  .top{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bottom {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  }
`;
