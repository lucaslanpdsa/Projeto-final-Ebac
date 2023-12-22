import logo from '../../assets/logo.png'
import { FooterStyle, ListaDeRedes } from './styles'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/Facebook.png'

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <img src={logo} alt="" />
        <ListaDeRedes>
          <li>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ListaDeRedes>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
      </div>
    </FooterStyle>
  )
}

export default Footer
