import { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import { Lista } from './styles'

export type restaurants = {
  id: number
  titulo: string
  destacado: Boolean
  tipo: string
  avaliação: number
  descrição: string
  capa: string
  cardapio: [{}]
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
      {restaurants.map((restaurant) => <RestaurantCard id={restaurant.id} titulo={restaurant.titulo} destacado={restaurant.destacado} tipo={restaurant.tipo} avaliação={restaurant.avaliação} capa={restaurant.capa} descrição={restaurant.descrição} />)}
    </Lista>
  )
}

export default ListaDeRestaurantes