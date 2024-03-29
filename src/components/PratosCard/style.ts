import styles from "styled-components";

export const Pratocard = styles.div`
  padding: 8px;
  background-color: rgba(230, 103, 103, 1);
  color:rgba(255, 235, 217, 1);

  img{
    width:100%;
    height: 217px;
    object-fit: cover;
  }

  h3{
    margin: 8px 0;
    font-weight: 900;
  }

  p{
    margin: 8px 0;
  }

  .descricaoCard{
    font-size: 14px;
    height: 135px;

  }

  button{
    background-color: rgba(255, 235, 217, 1);
    color: rgba(230, 103, 103, 1);
    border: none;
    padding: 4px 0;
    width: 100%;
    cursor: pointer;
  }
`

export const FechaModal = styles.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  opacity: 85%;    
`

export const PratocardExpandido = styles.div`
  background-color: rgba(230, 103, 103, 1);
  color: rgba(255, 255, 255, 1);
  z-index: 1;
  display: flex;
  position: fixed;
  gap: 24px;
  padding: 32px;
  width: 1024px;
  height: 344px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  @media screen and (max-width: 480px) {
    display: block;
    width: auto;
    height: auto; 
    max-height: 80vh; 
  }

  @media screen and (max-width: 1024px) {
    width: auto;
    height: fit-content;
    max-width: 95%;
    flex-wrap:wrap;
  }

  .descricao{
    color:rgba(255, 255, 255, 1);
    margin: 16px 0;

    p{
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`
export const ButtonAdicionarAoCarrinho = styles.button`
  background-color: rgba(255, 235, 217, 1);
  color: rgba(230, 103, 103, 1);
  border: none;
  padding: 4px 8px;
  cursor: pointer;
`

export const ButtonFechar = styles.button`
  color:rgba(255, 255, 255, 1);
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: inherit;
  border: none;
  font-size: 30px;
  cursor: pointer;
`




