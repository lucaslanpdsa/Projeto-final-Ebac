import styles from 'styled-components'

export const Card = styles.a`
  margin-bottom: 48px;
  position: relative;
  font-weight: 700;
`

export const Capa = styles.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Button = styles.a`
    color: rgba(255, 235, 217, 1);
    background-color: rgba(230, 103, 103, 1);
    padding: 4px 6px;
    display: inline-block;
    font-size: 16px;
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
  font-size: 12px;
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

    h2{
      font-size: 18px;
      line-height: 21px;
    }

    span{
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

export const Descricao = styles.p`
  margin: 16px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
