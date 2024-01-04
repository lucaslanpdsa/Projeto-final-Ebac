import { useDispatch, useSelector } from "react-redux"
import { Button, CarrinhoContainer, FundoPreto, ImgDoPrato, Lixeira, NomeEPreco, PratoNoCarrinho, Valor } from "./style"
import { toogle } from "../../store/reducers/carrinho"
import { RootReducer } from "../../store"
import lixeira from '../../assets/lixeira.png'

const Carrinho = () => {
  const Dispatch = useDispatch()

  const opencarrinho = () => {
    Dispatch(toogle())
  }

  const { items } = useSelector((state: RootReducer) => state.carrinho)
  console.log(items.map((item) => { item.nome }))

  let valorTotal: number = 0

  function getValorTotal(preco: number) {
    valorTotal += preco
  }

  return (
    < CarrinhoContainer className="carr" >
      <FundoPreto onClick={opencarrinho}></FundoPreto>
      <aside>
        <ul>
          {items.map((item) => {
            getValorTotal(item.preco)
            return (
              <PratoNoCarrinho>
                <ImgDoPrato src={item.foto} />
                <NomeEPreco >
                  <h3>{item.nome}</h3>
                  <p>R${item.preco.toFixed(2).toString().replace(".", ",")}</p>
                </NomeEPreco>
                <Lixeira src={lixeira} />
              </PratoNoCarrinho>
            )
          })}
        </ul>
        <Valor>
          <p>valor total</p>
          <span>R${valorTotal.toFixed(2).toString().replace(".", ",")}</span>
        </Valor>
        <Button >Continuar com a entrega</Button>
      </aside>
    </CarrinhoContainer >
  )
}

export default Carrinho