import styles from "styled-components";
import vector from '../../assets/vector.png'

export const Header = styles.header`
  width: 100%;
  background-image: url(${vector});
  text-align: center;
  padding: 40px 0;
`

export const Title = styles.h1`
  margin-top: 140px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
`