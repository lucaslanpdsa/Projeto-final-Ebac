import { useDispatch, useSelector } from "react-redux"
import { Button, CarrinhoContainer, Form, FundoPreto, NumeroECEP } from "./style"
import { abreCarrinho, fechaEntrega } from "../../store/reducers/carrinho"
import { RootReducer } from "../../store"

const Carrinho = () => {
  const Dispatch = useDispatch()

  const closeEntrega = () => {
    Dispatch(fechaEntrega())
  }

  const opencarrinho = () => {
    Dispatch(abreCarrinho())
  }

  const { items } = useSelector((state: RootReducer) => state.carrinho)
  console.log(items.map((item) => { item.nome }))

  console.log(items)

  return (
    < CarrinhoContainer className="carr" >
      <FundoPreto onClick={() => { closeEntrega() }}></FundoPreto>
      <aside>
        <h3>Entrega</h3>
        <Form>
          <div>
            <label htmlFor="">Quem irá receber</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Endereço</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Cidade</label>
            <input type="text" />
          </div>
          <NumeroECEP>
            <div>
              <label htmlFor="" >CEP</label>
              <input type="text" />
            </div>
            <div >
              <label htmlFor="" >Número</label>
              <input type="text" />
            </div>
          </NumeroECEP>
          <div>
            <label htmlFor="">Complemento (opcional)</label>
            <input type="text" />
          </div>
        </Form>
        <Button >Continuar com o pagamento</Button>
        <Button onClick={() => { opencarrinho() }}>Voltar para o carrinho</Button>
      </aside>
    </CarrinhoContainer >
  )
}

export default Carrinho