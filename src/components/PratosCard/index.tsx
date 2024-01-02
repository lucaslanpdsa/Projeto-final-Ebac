import { useState } from 'react'
import { FechaModal, Pratocard, PratocardExpandido, ButtonAdicionarAoCarrinho, ButtonFechar } from './style'

type Props = {
  img: string
  nomeDoPrato: string
  descricao: string
  descricaoCompleta: string
  serveQuantasPessoas: string
  preço: number
}

const Card = ({ img, nomeDoPrato, descricao, preço, descricaoCompleta, serveQuantasPessoas }: Props) => {

  const [expandido, setexpandido] = useState(true)


  return (
    <>
      {expandido == true ?
        <Pratocard>
          <img src={img} />
          <h3>{nomeDoPrato}</h3>
          <p className='descricaoCard'>{descricao}</p>
          <button onClick={() => { setexpandido(!expandido) }}>Adicionar ao carrinho</button>
        </Pratocard> :
        <>
          <FechaModal onClick={() => { setexpandido(!expandido) }}></FechaModal>
          <Pratocard>
            <img src={img} />
            <h3>{nomeDoPrato}</h3>
            <p className='descricaoCard'>{descricao}</p>
            <button>Mais detalhes</button>
          </Pratocard>
          <PratocardExpandido>
            <img src={img} />
            <div>
              <h3>{nomeDoPrato}</h3>
              <div className="descricao">
                <p>{descricaoCompleta}</p> <br />
                <p>Serve: {serveQuantasPessoas}</p>
              </div>
              <ButtonAdicionarAoCarrinho>Adicionar ao carrinho - R${preço.toFixed(2).toString().replace(".", ",")}</ButtonAdicionarAoCarrinho>
              <ButtonFechar className='btnfechar' onClick={() => { setexpandido(!expandido) }}>X</ButtonFechar>
            </div>
          </PratocardExpandido>
        </>
      }
    </>
  )
}

export default Card