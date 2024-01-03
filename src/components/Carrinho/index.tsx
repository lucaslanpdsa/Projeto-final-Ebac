import { useDispatch } from "react-redux"
import PratoNoCarrinho from "../PratoNoCarrinho"
import { Button, CarrinhoContainer, FundoPreto, Valor } from "./style"
import { toogle } from "../../store/reducers/carrinho"

const Carrinho = () => {
  const Dispatch = useDispatch()

  const opencarrinho = () => {
    Dispatch(toogle())
  }


  return (
    <CarrinhoContainer className="carr">
      <FundoPreto onClick={opencarrinho}></FundoPreto>
      <aside>
        <PratoNoCarrinho />
        <Valor>
          <p>valor total</p>
          <span>189$</span>
        </Valor>
        <Button >Continuar com a entrega</Button>
      </aside>
    </CarrinhoContainer>
  )
}

export default Carrinho