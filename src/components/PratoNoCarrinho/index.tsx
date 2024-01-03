import { Container, ImgDoPrato, Lixeira, NomeEPreco } from "./style"
import lixeira from '../../assets/lixeira.png'

const PratoNoCarrinho = () => {
  return (
    <Container>
      <ImgDoPrato src="" />
      <NomeEPreco >
        <h3>Pizza Marguerita</h3>
        <p>R$ 60,90</p>
      </NomeEPreco>
      <Lixeira src={lixeira} />
    </Container>
  )
}

export default PratoNoCarrinho