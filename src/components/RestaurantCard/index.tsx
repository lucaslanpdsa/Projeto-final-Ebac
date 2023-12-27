import estrela from '../../assets/estrela.png'
import { Card, Descricao, Tag, Tags, Texto } from './styles'
import { Button } from './styles'

type Props = {
  titulo: string
  destacado: Boolean
  tipo: string
  avaliação: number
  descrição: string
  capa: string
  id: number
}

const RestaurantCard = ({ titulo, destacado, tipo, avaliação, descrição, capa }: Props) => {
  const rota = `/${titulo}`
  return (
    <Card href='/restaurante'>
      <div>
        <img src={capa} />
        <Tags>
          {destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{tipo}</Tag>
        </Tags>
      </div>
      <Texto>
        <div>
          <h2>{titulo}</h2>
          <span>{avaliação} <img src={estrela} /></span>
        </div>
        <Descricao>{descrição}</Descricao>
        <Button href='/restaurante/:id'>Saiba mais</Button>
      </Texto>
    </Card >
  )
}

export default RestaurantCard