import * as S from './styles'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import PratosCard from '../../components/PratosCard'
import { AbreCarrinho, Prato, RenderPratos } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Carrinho from '../../components/Carrinho'
import { abreCarrinho } from '../../store/reducers/carrinho'
import Entrega from '../../components/Forms'
import { useGetRestauranteQuery } from '../../services/api'

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
  const { carrinhoOpen, entregaOpen, items } = useSelector((state: RootReducer) => state.carrinho)

  const Dispatch = useDispatch()

  const opencarrinho = () => {
    Dispatch(abreCarrinho())
  }

  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id)


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
      <S.Banner capa={restaurante.capa}>
        <div className="container">
          <p className='tipo'>{restaurante.tipo}</p>
          <p className='titulo'>{restaurante.titulo}</p>
        </div>
      </S.Banner >
      <RenderPratos >
        <Prato className='container'>
          {restaurante.cardapio.map((prato: Prato) => <li key={prato.id}><PratosCard foto={prato.foto} nome={prato.nome} descricao={prato.descricao} porcao={prato.porcao} preco={prato.preco} cardapio={prato.cardapio} id={prato.id} /></li>)}
        </Prato>
      </RenderPratos>
      <Footer />
      {carrinhoOpen && <Carrinho />}
      {entregaOpen && <Entrega />}
    </>
  )
}

export default PaginaDoRestaurante