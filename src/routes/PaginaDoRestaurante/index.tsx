import * as S from './styles'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PratosCard from '../../components/PratosCard'
import { Prato, RenderPratos } from './styles'

const PaginaDoRestaurante = () => {

  const { id } = useParams()

  type cardapio = {
    [x: string]: any
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }

  const [restaurante, setrestaurantes] = useState<cardapio>()

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
          <p>0 produto(s) no carrinho</p>
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
          {restaurante.cardapio.map((prato: any) => <li key={prato.id}><PratosCard img={prato.foto} nomeDoPrato={prato.titulo} descricao={prato.descricao} descricaoCompleta={prato.descricao} serveQuantasPessoas={prato.porcao} preço={prato.preco} /></li>)}
        </Prato>
      </RenderPratos>
      <Footer />
    </>
  )
}

export default PaginaDoRestaurante