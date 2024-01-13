import { useDispatch, useSelector } from "react-redux"
import { Button, CarrinhoContainer, FundoPreto, ImgDoPrato, Lixeira, NomeEPreco, PratoNoCarrinho, Valor } from "./style"
import { fechaCarrinho, abreEntrega } from "../../store/reducers/carrinho"
import { RootReducer } from "../../store"
import lixeira from '../../assets/lixeira.png'
import { remover } from "../../store/reducers/carrinho"

const Carrinho = () => {
  const Dispatch = useDispatch()

  const closeCarrinho = () => {
    Dispatch(fechaCarrinho())
  }

  const RemoveDoCarrinho = (id: number) => {
    Dispatch(remover(id))
  }

  const abrirEntrega = () => { Dispatch(abreEntrega()) }

  const { items, entregaOpen } = useSelector((state: RootReducer) => state.carrinho)

  let valorTotal: number = 0

  const getValorTotal = (preco: number) => {
    valorTotal += preco
  }

  return (
    < CarrinhoContainer className="carr" >
      <FundoPreto onClick={() => { closeCarrinho() }}></FundoPreto>
      <aside>
        <ul>
          {items.map((item, index) => {
            getValorTotal(item.preco)
            return (
              <PratoNoCarrinho key={index}>
                <ImgDoPrato src={item.foto} />
                <NomeEPreco >
                  <h3>{item.nome}</h3>
                  <p>R${item.preco.toFixed(2).toString().replace(".", ",")}</p>
                </NomeEPreco>
                <Lixeira onClick={() => { RemoveDoCarrinho(item.id) }} src={lixeira} />
              </PratoNoCarrinho>
            )
          })}
        </ul>
        <Valor>
          <p>Valor total</p>
          <span>R$ {valorTotal.toFixed(2).toString().replace(".", ",")}</span>
        </Valor>
        <Button onClick={() => { abrirEntrega() }}>Continuar com a entrega</Button>
      </aside>
    </CarrinhoContainer >
  )
}

export default Carrinho