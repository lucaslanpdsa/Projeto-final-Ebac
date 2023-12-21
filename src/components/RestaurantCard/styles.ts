import styles from 'styled-components'

type Props = {
  img: string
}

export const Card = styles.div`
  margin-bottom: 48px;
  position: relative;
`

export const Button = styles.a`
    color: rgba(255, 235, 217, 1);
    background-color: rgba(230, 103, 103, 1);
    padding: 4px 6px;
    display: inline-block;
`

export const Tag = styles.span`
    color: rgba(255, 235, 217, 1);
    background-color: rgba(230, 103, 103, 1);
    padding: 6px 4px;
    margin-left: 8px;

`

export const Tags = styles.div`
  display-flex;
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Texto = styles.div`
  border: rgba(230, 103, 103, 1) solid 1px;
  border-top: 0px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 1);

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
      font-Weight: 700;
    }
  }
`

export const Descricao = styles.p`
    margin: 16px 0;
`
