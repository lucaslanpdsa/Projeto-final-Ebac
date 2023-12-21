import RestaurantCard from '../../components/RestaurantCard'
import { cards } from '../../models/Card'
import { Lista } from './styles'

function ListaDeRestaurantes() {
  return (
    <Lista>
      {cards.map((restaurant) => <RestaurantCard img={restaurant.img} Edestaque={restaurant.Edestaque} tipoDeComida={restaurant.tipoDeComida} title={restaurant.title} nota={restaurant.nota} descricao={restaurant.descricao} />)}
    </Lista>
  )
}

export default ListaDeRestaurantes