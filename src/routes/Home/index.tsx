import Header from '../../components/Header'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import { HomeStyle } from './style'

const Home = () => {
  return (
    <HomeStyle>

      <Header></Header>
      <div className="container">
        <ListaDeRestaurantes ></ListaDeRestaurantes>
      </div>
    </HomeStyle>
  )
}

export default Home