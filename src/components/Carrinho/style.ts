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
  }
`

export const Valor = styled.div`
  color:rgba(255, 235, 217, 1);
  margin-bottom: 16px;
      display:flex;
    justify-content: space-between;
`
export const Button = styled.button`
  width: 100%;
  color:rgba(230, 103, 103, 1);
  padding: 4px 0;
  background-color: rgba(255, 235, 217, 1);
  border: none;
  cursor: pointer;
`


export const FundoPreto = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
`