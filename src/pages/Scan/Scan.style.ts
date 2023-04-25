import styled from "styled-components"

export const ScanStyle = styled.div `
margin-top: 5px;
color: #003D77;
padding: 0 2rem;
h3{
  text-align: center;
}
button{
  border: none;
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
  padding: 10px 24px;
}
.btns{
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}
.description{
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

}
.verify{
  background-color: #003D77;
  border-radius: 10px;
  padding: 0.5rem 0;

  h3{
    background-color: #003D77;

    color: #FFFFFF;
  }
  p{
    color: #FFFFFF;
    background-color: #003D77;
    padding-left: 5px;
    font-size: 12px;
  }
}
`
