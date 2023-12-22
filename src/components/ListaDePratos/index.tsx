import prato1 from '../../assets/Prato1.png'
import { Background, Lista } from './styles'

const ListaDePratos = () => {

  return (
    <Background className='background'>
      <Lista className='container'>
        <div className='pratoCard'>
          <img src={prato1} />
          <h3>Pizza Marguerita</h3>
          <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className='pratoCard'>
          <img src={prato1} />
          <h3>Pizza Marguerita</h3>
          <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className='pratoCard'>
          <img src={prato1} />
          <h3>Pizza Marguerita</h3>
          <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className='pratoCard'>
          <img src={prato1} />
          <h3>Pizza Marguerita</h3>
          <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className='pratoCard'>
          <img src={prato1} />
          <h3>Pizza Marguerita</h3>
          <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className='pratoCard'>
          <img src={prato1} />
          <h3>Pizza Marguerita</h3>
          <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </Lista>
    </Background>
  )
}

export default ListaDePratos