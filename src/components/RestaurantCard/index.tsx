import estrela from '../../assets/estrela.png'
import { Card, Descricao, Tag, Tags, Texto } from './styles'
import { Button } from './styles'

type Props = {
  img: string
  Edestaque: Boolean
  tipoDeComida: string
  title: string
  nota: number
  descricao: string
}

const RestaurantCard = ({ img, Edestaque, tipoDeComida, title, nota, descricao }: Props) => {
  return (
    <Card href='/restaurante'>
      <div>
        <img src={img} />
        <Tags>
          {Edestaque && <Tag>Destaque da semana</Tag>}
          <Tag>{tipoDeComida}</Tag>
        </Tags>
      </div>
      <Texto>
        <div>
          <h2>{title}</h2>
          <span>{nota} <img src={estrela} /></span>
        </div>
        <Descricao>{descricao}</Descricao>
        <Button href="">Saiba mais</Button>
      </Texto>
    </Card>
  )
}

export default RestaurantCard