import { PratosCards } from '../../models/PratosCard'
import Card from '../PratosCard'
import { Background, Lista } from './styles'

const ListaDePratos = () => {
  return (
    <>
      < Background >
        <Lista className='container'>
          {PratosCards.map((Prato, i) => <Card key={i} img={Prato.img} nomeDoPrato={Prato.nomeDoPrato} descricao={Prato.descricao} />)}
        </Lista>
      </Background >
    </>
  )
}

export default ListaDePratos