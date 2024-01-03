import { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import { Lista } from './styles'

export type restaurants = {
  id: number
  titulo: string
  avaliacao: number
  destacado: Boolean
  tipo: string
  descricao: string
  capa: string
}

function ListaDeRestaurantes() {
  const [restaurants, setrestaurants] = useState<restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setrestaurants(res))
  }, [])

  return (
    <Lista>
      {restaurants.map((restaurant) =>
        <li key={restaurant.id}>
          <RestaurantCard id={restaurant.id} titulo={restaurant.titulo} destacado={restaurant.destacado} tipo={restaurant.tipo} avaliacao={restaurant.avaliacao} capa={restaurant.capa} descricao={restaurant.descricao} />
        </li>)}
    </Lista>
  )
}

export default ListaDeRestaurantes