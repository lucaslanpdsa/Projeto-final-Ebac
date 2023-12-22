import Header from '../../components/Header'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import { HomeStyle } from './style'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <HomeStyle>
      <Header></Header>
      <div className="container">
        <ListaDeRestaurantes ></ListaDeRestaurantes>
      </div>
      <Footer></Footer>
    </HomeStyle>
  )
}

export default Home