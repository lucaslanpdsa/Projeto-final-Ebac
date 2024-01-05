import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  height: 100%;

  aside{
    width: 26.35%;
    height: 100%;
    background-color: rgba(230, 103, 103, 1);
    top: 0;
    right: 0;
    position: absolute;
    padding: 32px 8px;
    color: rgba(255, 235, 217, 1);
    font-weight: 700;
  }
`

export const Button = styled.button`
width: 100%;
color: rgba(230, 103, 103, 1);
padding: 4px 0;
background-color: rgba(255, 235, 217, 1);
border: none;
cursor: pointer;
font-weight: 900;
margin-bottom: 8px;
`

export const FundoPreto = styled.a`
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.8);
height: 100 %;
width: 100 %;
opacity: 80 %;
`

export const Form = styled.form`
  margin: 16px 0;  
  input{
    display: block;
    width: 100%;
    background-color: rgba(255, 235, 217, 1);
    border: none;
    padding: 8px;
    margin: 8px 0;
  }

  label{
    color: rgba(255, 235, 217, 1);
  }
`

export const NumeroECEP = styled.div`
  display: flex ; 
  gap: 34px;

  div{
    width: 100%;
  }
`