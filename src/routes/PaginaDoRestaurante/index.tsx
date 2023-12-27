import * as S from './styles'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PaginaDoRestaurante = () => {

  const [restaurants, setrestaurants] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setrestaurants(res))
  }, [])

  console.log(restaurants)

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
      <Footer />
    </>
  )
}

export default PaginaDoRestaurante