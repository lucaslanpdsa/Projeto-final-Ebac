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
            <label htmlFor="recebedor">Quem irá receber</label>
            <input type="text" id="recebedor" required max={30} />
          </div>
          <div>
            <label htmlFor="Endereço">Endereço</label>
            <input type="text" id="Endereço" required max={30} />
          </div>
          <div>
            <label htmlFor="Cidade">Cidade</label>
            <input type="text" id="Cidade" required max={30} />
          </div>
          <NumeroECEP>
            <div>
              <label htmlFor="CEP" >CEP</label>
              <input type="number" id="CEP" required max={15} />
            </div>
            <div >
              <label htmlFor="Número" >Número</label>
              <input type="number" id="Número" required max={20} />
            </div>
          </NumeroECEP>
          <div>
            <label htmlFor="Complemento">Complemento (opcional)</label>
            <input type="text" id="Complemento" max={30} />
          </div>
        </Form>
        <Button type="submit">Continuar com o pagamento</Button>
        <Button onClick={() => { opencarrinho() }}>Voltar para o carrinho</Button>
      </aside>
    </CarrinhoContainer >
  )
}

export default Carrinho