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

  return (
    <ul>
      {items.map((item) => {
        return (
          < CarrinhoContainer className="carr" >
            <FundoPreto onClick={opencarrinho}></FundoPreto>
            <aside>
              <PratoNoCarrinho>
                <ImgDoPrato src={item.foto} />
                <NomeEPreco >
                  <h3>{item.nome}</h3>
                  <p>{item.preco}</p>
                </NomeEPreco>
                <Lixeira src={lixeira} />
              </PratoNoCarrinho>
              <Valor>
                <p>valor total</p>
                <span></span>
              </Valor>
              <Button >Continuar com a entrega</Button>
            </aside>
          </CarrinhoContainer >
        )
      })}
    </ul>
  )
}

export default Carrinho