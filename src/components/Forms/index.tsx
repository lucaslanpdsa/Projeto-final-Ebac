import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonConcluir, Container, Form, FundoPreto, NumeroECEP } from "./style"
import { abreCarrinho, fechaEntrega } from "../../store/reducers/carrinho"
import { RootReducer } from "../../store"
import { useState } from "react"
import { useFormik } from "formik"

const Carrinho = () => {
  const Dispatch = useDispatch()

  const closeEntrega = () => {
    Dispatch(fechaEntrega())
  }

  const opencarrinho = () => {
    Dispatch(abreCarrinho())
  }

  const { items } = useSelector((state: RootReducer) => state.carrinho)

  const [paginaDeEntrega, setPaginaDeEntrega] = useState(true)
  const [paginaDePagamento, setPaginaDePagamento] = useState(false)
  const [paginaDePedidoRealizado, setPaginaDePedidoRealizado] = useState(false)

  function somaArrayDeObjetos(arr: any[], key: string) {
    return arr.reduce((a, b) => a + (b[key] || 0), 0);
  }

  const nomeDosPratos = [...new Set(items.map(item => item.nome))];

  const precoTotal = somaArrayDeObjetos(items, "preco")

  const form = useFormik({
    initialValues: {
      pratos: [
        {
          "id": nomeDosPratos,
          "price": precoTotal
        }
      ],
      delivery: {
        destinatario: '',
        endereço: {
          Endereço: '',
          cidade: '',
          cep: '',
          numero: '',
          complemento: ''
        }
      },
      pagamento: {
        cartao: {
          nome: '',
          numero: '',
          CVV: '',
          vencimentos: {
            mes: '',
            ano: ''
          }
        }
      }
    }, onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      {paginaDePedidoRealizado ?
        < Container >
          <FundoPreto onClick={() => { closeEntrega() }}></FundoPreto>
          <aside >
            <h3>Pedido realizado - </h3>
            <p className="ordemRealizada">
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <ButtonConcluir onClick={() => {
              setPaginaDePagamento(false)
              setPaginaDeEntrega(false)
              setPaginaDePedidoRealizado(false)
            }}>Concluir</ButtonConcluir>
          </aside>
        </Container >
        :
        <form onSubmit={form.handleSubmit}>
          {
            paginaDeEntrega &&
            <Container>
              < FundoPreto onClick={() => { closeEntrega() }}></FundoPreto >
              <aside>
                <h3>Entrega</h3>
                <Form>
                  <div>
                    <label htmlFor="recebedor">Quem irá receber</label>
                    <input type="text" id="destinatario" name="destinatario" value={form.values.delivery.destinatario} onChange={form.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="Endereço">Endereço</label>
                    <input type="text" id="Endereço" name="Endereço" value={form.values.delivery.endereço.Endereço} onChange={form.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" id="Cidade" name="cidade" value={form.values.delivery.endereço.cidade} onChange={form.handleChange} />
                  </div>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="CEP" >CEP</label>
                      <input type="number" id="CEP" name="cep" value={form.values.delivery.endereço.cep} onChange={form.handleChange} />
                    </div>
                    <div >
                      <label htmlFor="Número" >Número</label>
                      <input type="number" id="Número" name="numero" value={form.values.delivery.endereço.numero} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <div>
                    <label htmlFor="Complemento">Complemento (opcional)</label>
                    <input type="text" id="Complemento" name="complemento" value={form.values.delivery.endereço.complemento} onChange={form.handleChange} />
                  </div>
                  <Button onClick={() => {
                    setPaginaDePagamento(true)
                    setPaginaDeEntrega(false)
                    setPaginaDePedidoRealizado(false)
                  }} >Continuar com o pagamento</Button>
                  <Button onClick={() => { opencarrinho() }}>Voltar para o carrinho</Button>
                </Form>
              </aside>
            </Container >
          }
          {paginaDePagamento &&
            < Container>
              <FundoPreto onClick={() => { closeEntrega() }}></FundoPreto>
              <aside>
                <h3>Pagamento - Valor a pagar R$ {precoTotal.toFixed(2).toString().replace(".", ",")}</h3>
                <Form>
                  <div>
                    <label htmlFor="nome">Nome no cartão</label>
                    <input type="text" id="nome" name="nome" value={form.values.pagamento.cartao.nome} onChange={form.handleChange} />
                  </div>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="numero">numero</label>
                      <input type="text" id="numero" name="numero" value={form.values.pagamento.cartao.numero} onChange={form.handleChange} />
                    </div>
                    <div>
                      <label htmlFor="CVV">CVV</label>
                      <input type="text" id="CVV" name="CVV" value={form.values.pagamento.cartao.CVV} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="Mês" >Mês de vencimento</label>
                      <input type="number" id="Mês" name="mes" value={form.values.pagamento.cartao.vencimentos.mes} onChange={form.handleChange} />
                    </div>
                    <div >
                      <label htmlFor="Ano" >Ano de vencimento</label>
                      <input type="number" id="Ano" name="ano" value={form.values.pagamento.cartao.vencimentos.ano} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <input type="submit" value="finalizar pagamento" onSubmit={() => {
                    setPaginaDePagamento(false)
                    setPaginaDeEntrega(false)
                    setPaginaDePedidoRealizado(true)
                  }}></input>
                  <Button onClick={() => { opencarrinho() }}>Voltar para o carrinho</Button>
                </Form>
              </aside>
            </Container >
          }
        </form >
      }
    </>

  )
}

export default Carrinho