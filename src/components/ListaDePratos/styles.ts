import styles from 'styled-components'

export const Background = styles.div`
  background-color: rgba(255, 248, 242, 1);
`

export const Lista = styles.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  padding: 56px 0 120px;

  div{
    padding: 8px;
    background-color: rgba(230, 103, 103, 1);
    color:rgba(255, 235, 217, 1);

    p{
      margin: 8px 0;
    }
  }

  button{
    background-color:rgba(255, 235, 217, 1);
    color: rgba(230, 103, 103, 1);
    border: none;
    padding: 4px 0;
    width: 100%;
  }
`
