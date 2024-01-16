import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonConcluir, Container, Form, FundoPreto, NumeroECEP } from "./style"
import { abreCarrinho, fechaEntrega } from "../../store/reducers/carrinho"
import { RootReducer } from "../../store"
import { useState } from "react"
import { useFormik } from "formik"
import { usePurchaseMutation } from "../../services/api"
import { useNavigate } from 'react-router-dom'

const Carrinho = () => {
  const navigate = useNavigate()
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

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

  function somaArrayDeObjetos(arr: any[], key: string) {
    return arr.reduce((a, b) => a + (b[key] || 0), 0);
  }

  const precoTotal = somaArrayDeObjetos(items, "preco")

  const form = useFormik({
    initialValues: {
      destinatario: '',
      Endereço: '',
      cidade: '',
      CEP: '',
      numero: '',
      complemento: '',
      nomeDoCartao: '',
      numeroDoCartao: '',
      CVV: '',
      mesDeVencimento: '',
      anoDeVencimento: '',
    },

    onSubmit: (values) => {
      console.log(values);
      setPaginaDePagamento(false);
      setPaginaDeEntrega(false);
      post();
    }
  })

  const post = () => {
    purchase({
      products: {
        "id": 1,
        "price": 0
      },
      delivery: {
        receiver: form.values.destinatario,
        adress: {
          description: form.values.Endereço,
          city: form.values.cidade,
          zipCode: form.values.CEP,
          number: form.values.numero,
          complement: form.values.complemento,
        }
      },
      payment: {
        card: {
          name: form.values.nomeDoCartao,
          number: form.values.numeroDoCartao,
          code: form.values.CVV,
          expires: {
            month: form.values.mesDeVencimento,
            year: form.values.anoDeVencimento,
          }
        }
      }
    })
  }

  return (
    <>
      {isSuccess ?
        < Container >
          <FundoPreto onClick={() => { navigate('/') }}></FundoPreto>
          <aside >
            <h3>Pedido realizado - {data.orderId} </h3>
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
              navigate('/')
            }}>Concluir</ButtonConcluir>
          </aside>
        </Container >
        :
        <div>
          {
            paginaDeEntrega &&
            <Container>
              < FundoPreto onClick={() => { closeEntrega() }}></FundoPreto >
              <aside>
                <h3>Entrega</h3>
                <Form onSubmit={(e) => {
                  e.preventDefault()
                  setPaginaDePagamento(true);
                  setPaginaDeEntrega(false);
                }}>
                  <div>
                    <label htmlFor="recebedor">Quem irá receber</label>
                    <input type="text" id="destinatario" name="destinatario" required={true} value={form.values.destinatario} onBlur={form.handleBlur} onChange={form.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="Endereço">Endereço</label>
                    <input type="text" id="Endereço" name="Endereço" required={true} value={form.values.Endereço} onBlur={form.handleBlur} onChange={form.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" id="Cidade" name="cidade" required={true} value={form.values.cidade} onBlur={form.handleBlur} onChange={form.handleChange} />
                  </div>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="CEP" >CEP</label>
                      <input type="number" id="CEP" name="CEP" required={true} value={form.values.CEP} onBlur={form.handleBlur} onChange={form.handleChange} />
                    </div>
                    <div >
                      <label htmlFor="Número" >Número</label>
                      <input type="number" id="Número" name="numero" required={true} value={form.values.numero} onBlur={form.handleBlur} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <div>
                    <label htmlFor="Complemento">Complemento (opcional)</label>
                    <input type="text" id="Complemento" name="complemento" value={form.values.complemento} onBlur={form.handleBlur} onChange={form.handleChange} />
                  </div>
                  <Button type="submit" >Continuar com o pagamento</Button>
                  <Button type="button" onClick={() => { opencarrinho() }}>Voltar para o carrinho</Button>
                </Form>
              </aside>
            </Container >
          }
          {paginaDePagamento &&
            < Container>
              <FundoPreto onClick={() => { closeEntrega() }}></FundoPreto>
              <aside>
                <h3>Pagamento - Valor a pagar R$ {precoTotal.toFixed(2).toString().replace(".", ",")}</h3>
                <Form onSubmit={form.handleSubmit}>
                  <div>
                    <label htmlFor="nome">Nome no cartão</label>
                    <input type="text" id="nome" name="nomeDoCartao" required={true} value={form.values.nomeDoCartao} onBlur={form.handleBlur} onChange={form.handleChange} />
                  </div>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="numero">numero</label>
                      <input type="number" id="numero" name="numeroDoCartao" required={true} value={form.values.numeroDoCartao} onChange={form.handleChange} />
                    </div>
                    <div>
                      <label htmlFor="CVV">CVV</label>
                      <input type="number" id="CVV" name="CVV" required={true} value={form.values.CVV} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="Mês" >Mês de vencimento</label>
                      <input type="number" id="Mês" name="mesDeVencimento" required={true} value={form.values.mesDeVencimento} onChange={form.handleChange} />
                    </div>
                    <div >
                      <label htmlFor="Ano" >Ano de vencimento</label>
                      <input type="number" id="Ano" name="anoDeVencimento" required={true} value={form.values.anoDeVencimento} onBlur={form.handleBlur} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <Button type="submit">finalizar pagamento</Button>
                  <Button type="button" onClick={() => { opencarrinho() }}>Voltar para o carrinho</Button>
                </Form>
              </aside>
            </Container >
          }
        </div >
      }
    </>
  )
}

export default Carrinho