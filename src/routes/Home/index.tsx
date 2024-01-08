import Header from '../../components/Header'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import { HomeStyle } from './style'
import Footer from '../../components/Footer'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantesQuery()
  return (
    <HomeStyle>
      <Header></Header>
      <div className="container">
        <ListaDeRestaurantes restaurants={restaurants} />
      </div>
      <Footer></Footer>
    </HomeStyle>
  )
}

export default Home