import styles from "styled-components";
import vector from '../../assets/Vector.png'
import imagemDeFundo from '../../assets/imagemDeFundo.png'

export const Header = styles.header`
  width: 100%;
  background-image: url(${vector});
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: rgba(230, 103, 103, 1);

  div{
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    align-items: center;
  }
`


export const AbreCarrinho = styles.button`
  cursor: pointer;
  border: none;
  background-color:inherit;
  color: rgba(230, 103, 103, 1);
  font-weight: 900;
`

interface BannerProps {
  capa: string; // Ou o tipo apropriado para a propriedade capa
}

export const Banner = styles.div<BannerProps>`
  background-image: url(${props => props.capa});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;

  div{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 32px;
    font-size: 32px;
    font-weight: 100;
    line-height: 38px;
    color:rgba(255, 255, 255, 1);

    .titulo{
      font-size: 32px;
      font-weight: 900;
      line-height: 38px;
    }
  }
`

export const RenderPratos = styles.div`
  background-color: rgba(255, 248, 242, 1);
  padding: 56px 0 120px;

  img{
    max-width: 100%;
  }
`

export const Prato = styles.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`