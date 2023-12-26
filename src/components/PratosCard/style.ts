import styles from "styled-components";

export const Pratocard = styles.div`
  padding: 8px;
  background-color: rgba(230, 103, 103, 1);
  color:rgba(255, 235, 217, 1);

  p{
    margin: 8px 0;
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
  color:rgba(255, 235, 217, 1);
  z-index: 1;
  display: flex;
  position: absolute;
  gap: 24px;
  padding: 32px;
  width: 1024px;
  height: 344px;
  top: calc(50% - 140px);

  img{
    max-width: 280px
  };

  p{
    margin: 16px 0;
  }

  button {
    background-color: rgba(255, 235, 217, 1);
    color: rgba(230, 103, 103, 1);
    border: none;
    padding: 4px 8px;
    cursor: pointer;
  }
`



