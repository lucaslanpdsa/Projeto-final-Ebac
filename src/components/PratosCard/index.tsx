import { useState } from 'react'
import { FechaModal, Pratocard, PratocardExpandido } from './style'

type Props = {
  img: string
  nomeDoPrato: string
  descricao: string
}

const Card = ({ img, nomeDoPrato, descricao }: Props) => {

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
              <p>{descricao}</p>
              <p>Serve: de 2 a 3 pessoas</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </PratocardExpandido>
        </>
      }
    </>
  )
}

export default Card