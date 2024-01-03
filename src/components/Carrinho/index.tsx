import PratoNoCarrinho from "../PratoNoCarrinho"
import { Button, CarrinhoContainer, FundoPreto, Valor } from "./style"

const Carrinho = () => {
  return (
    <CarrinhoContainer className="carr">
      <FundoPreto></FundoPreto>
      <aside>
        <PratoNoCarrinho />
        <Valor>
          <p>valor total</p>
          <span>189$</span>
        </Valor>
        <Button>Continuar com a entrega</Button>
      </aside>
    </CarrinhoContainer>
  )
}

export default Carrinho