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

  type restaurants = {
    id: number
    titulo: string
    destacado: Boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio?: []
  }

  const [restaurantes, setrestaurantes] = useState<restaurants[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setrestaurantes(res))
  }, [id])

  console.log(restaurantes)

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
          {restaurantes.cardapio?.map((prato: any) => <PratosCard img={prato.foto} nomeDoPrato={prato.titulo} descricao={prato.descricao} descricaoCompleta={prato.descricao} serveQuantasPessoas={prato.porcao} preço={prato.preco} />)}
        </Prato>
      </RenderPratos>
      <Footer />
    </>
  )
}

export default PaginaDoRestaurante