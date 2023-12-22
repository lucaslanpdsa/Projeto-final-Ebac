import * as S from './styles'
import logo from '../../assets/logo.png'
import Footer from '../Footer'
import ListaDePratos from '../ListaDePratos'

const PaginaDoRestaurante = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <p>restaurantes</p>
          <img src={logo} alt="" />
          <p>0 produto(s) no carrinho</p>
        </div>
      </S.Header >
      <S.Banner>
        <div className="container">
          <p className='tipo'>Italiana</p>
          <p className='titulo'>La Dolce Vita Trattoria</p>
        </div>
      </S.Banner>
      <ListaDePratos />
      <Footer />
    </>
  )
}

export default PaginaDoRestaurante