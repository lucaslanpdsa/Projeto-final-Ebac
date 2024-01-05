import { useState } from 'react'
import { FechaModal, Pratocard, PratocardExpandido, ButtonAdicionarAoCarrinho, ButtonFechar } from './style'
import { useDispatch } from 'react-redux'
import { abreCarrinho } from "../../store/reducers/carrinho"
import { adicionar } from '../../store/reducers/carrinho'
import { Prato } from '../../routes/PaginaDoRestaurante'

type Props = {
  cardapio: []
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  id: number
}

const Card = ({ foto, nome, descricao, porcao, preco, cardapio, id }: Props) => {
  const Dispatch = useDispatch()

  const prato: Prato = {
    cardapio,
    foto,
    nome,
    descricao,
    porcao,
    preco,
    id,
  }

  const addCarrinho = () => {
    Dispatch(abreCarrinho())
    Dispatch(adicionar(prato))
    setexpandido(!expandido)
  }

  const [expandido, setexpandido] = useState(true)

  return (
    <>
      {expandido == true ?
        <Pratocard>
          <img src={foto} />
          <h3>{nome}</h3>
          <p className='descricaoCard'>{descricao}</p>
          <button onClick={() => { setexpandido(!expandido) }}>Adicionar ao carrinho</button>
        </Pratocard> :
        <>
          <FechaModal onClick={() => { setexpandido(!expandido) }}></FechaModal>
          <Pratocard>
            <img src={foto} />
            <h3>{nome}</h3>
            <p className='descricaoCard'>{descricao}</p>
            <button>Mais detalhes</button>
          </Pratocard>
          <PratocardExpandido>
            <img src={foto} />
            <div>
              <h3>{nome}</h3>
              <div className="descricao">
                <p>{descricao}</p> <br />
                <p>Serve: {porcao}</p>
              </div>
              <ButtonAdicionarAoCarrinho onClick={addCarrinho}>Adicionar ao carrinho - R${preco.toFixed(2).toString().replace(".", ",")}</ButtonAdicionarAoCarrinho>
              <ButtonFechar className='btnfechar' onClick={() => { setexpandido(!expandido) }}>X</ButtonFechar>
            </div>
          </PratocardExpandido>
        </>
      }
    </>
  )
}

export default Card