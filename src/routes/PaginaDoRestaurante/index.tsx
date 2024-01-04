import * as S from './styles'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PratosCard from '../../components/PratosCard'
import { AbreCarrinho, Prato, RenderPratos } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Carrinho from '../../components/Carrinho'
import { toogle } from '../../store/reducers/carrinho'

export type Prato = {
  cardapio: []
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  id: number
}

const PaginaDoRestaurante = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.carrinho)
  const { items } = useSelector((state: RootReducer) => state.carrinho)
  const Dispatch = useDispatch()

  const opencarrinho = () => {
    Dispatch(toogle())
  }

  const { id } = useParams()

  const [restaurante, setrestaurantes] = useState<Prato>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setrestaurantes(res))
  }, [])

  if (!restaurante) {
    return (
      <h3>Carregando...</h3>
    )
  }

  return (
    <>
      <S.Header>
        <div className="container">
          <a href="/"><p>restaurantes</p></a>
          <a href="/"><img src={logo} alt="" /></a>
          <AbreCarrinho onClick={opencarrinho}>{items.length} produto(s) no carrinho</AbreCarrinho>
        </div>
      </S.Header >
      <S.Banner>
        <div className="container">
          <p className='tipo'>Italiana</p>
          <p className='titulo'>La Dolce Vita Trattoria</p>
        </div>
      </S.Banner>
      <RenderPratos >
        <Prato className='container'>
          {restaurante.cardapio.map((prato: Prato) => <li key={prato.id}><PratosCard foto={prato.foto} nome={prato.nome} descricao={prato.descricao} porcao={prato.porcao} preco={prato.preco} cardapio={prato.cardapio} id={prato.id} /></li>)}
        </Prato>
      </RenderPratos>
      <Footer />
      {isOpen && <Carrinho />}
    </>
  )
}

export default PaginaDoRestaurante