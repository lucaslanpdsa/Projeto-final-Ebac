import RestaurantCard from '../../components/RestaurantCard'
import { Lista } from './styles'

type Props = {
  restaurants?: Restaurante[]
}

export type Restaurante = {
  cardapio: any
  id: number
  titulo: string
  avaliacao: number
  destacado: Boolean
  tipo: string
  descricao: string
  capa: string
}

function ListaDeRestaurantes({ restaurants }: Props) {
  return (
    <Lista>
      {restaurants && restaurants.map((restaurant) => {
        return (<li key={restaurant.id}>
          <RestaurantCard id={restaurant.id} titulo={restaurant.titulo} destacado={restaurant.destacado} tipo={restaurant.tipo} avaliacao={restaurant.avaliacao} capa={restaurant.capa} descricao={restaurant.descricao} />
        </li>)
      })
      }
    </Lista>
  )
}

export default ListaDeRestaurantes