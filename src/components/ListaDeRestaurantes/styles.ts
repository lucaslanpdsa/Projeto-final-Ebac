import styles from 'styled-components'

export const Lista = styles.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 80px 0 120px;
  column-gap: 80px;
  background-color: rgba(255, 248, 242, 1);

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`