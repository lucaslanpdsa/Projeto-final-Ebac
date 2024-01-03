import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 235, 217, 1);
  color: rgba(230, 103, 103, 1);
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  display: flex;
  position: relative;
`

export const ImgDoPrato = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 8px;  
`
export const NomeEPreco = styled.div`
  h3{
    margin-bottom: 16px
  }
`
export const Lixeira = styled.img`
  position: absolute;
  right: 8px;
  bottom: 8px; 
  cursor: pointer; 
`