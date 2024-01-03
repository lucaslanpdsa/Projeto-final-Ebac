import estrela from '../../assets/estrela.png'
import { Capa, Card, Descricao, Tag, Tags, Texto } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  titulo: string
  destacado: Boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  id: number
}

const RestaurantCard = ({ titulo, destacado, tipo, avaliacao, descricao, capa, id }: Props) => {

  return (
    <Card href='/restaurante'>
      <div>
        <Capa src={capa} />
        <Tags>
          {destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{tipo}</Tag>
        </Tags>
      </div>
      <Texto>
        <div>
          <h2>{titulo}</h2>
          <div>{avaliacao} <img src={estrela} /></div>
        </div>
        <Descricao>{descricao}</Descricao>
        <Link to={`/restaurante/${id}`} className='link'>Saiba mais</Link>
      </Texto>
    </Card >
  )
}

export default RestaurantCard