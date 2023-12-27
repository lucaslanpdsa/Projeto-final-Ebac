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
          <p>{descricao}</p>
          <button onClick={() => { setexpandido(!expandido); console.log(expandido) }}>Mais detalhes</button>
        </Pratocard> :
        <>
          <FechaModal onClick={() => { setexpandido(!expandido) }}></FechaModal>
          <PratocardExpandido>
            <img src={img} />
            <div>
              <h3>{nomeDoPrato}</h3>
              <div className="descricao">
                <p>{descricaoCompleta}</p> <br />
                <p>Serve: {serveQuantasPessoas} - R${preço.toFixed(2).toString().replace(".", ",")}</p>
              </div>
              <ButtonAdicionarAoCarrinho>Adicionar ao carrinho</ButtonAdicionarAoCarrinho>
              <ButtonFechar className='btnfechar' onClick={() => { setexpandido(!expandido) }}>X</ButtonFechar>
            </div>
          </PratocardExpandido>
        </>
      }
    </>
  )
}

export default Card