import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonConcluir, Container, Form, FundoPreto, NumeroECEP } from "./style"
import { abreCarrinho, fechaEntrega } from "../../store/reducers/carrinho"
import { RootReducer } from "../../store"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
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
      numero: 0,
      complemento: '',
      nomeDoCartao: '',
      numeroDoCartao: '',
      CVV: 0,
      mesDeVencimento: 0,
      anoDeVencimento: 0,
    },
    validationSchema: Yup.object({
      destinatario: Yup.string().min(8, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      Endereço: Yup.string().min(8, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      cidade: Yup.string().min(4, 'O campo precisa ter pelo menos 4 caracteres').required('Campo obrigatorio'),
      CEP: Yup.string().min(8, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      number: Yup.number().min(2, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      nomeDoCartao: Yup.string().min(8, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      numeroDoCartao: Yup.string().min(16, 'O campo precisa ter pelo menos 16 caracteres').required('Campo obrigatorio'),
      CVV: Yup.number().min(3, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      mesDeVencimento: Yup.string().min(1, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
      anoDeVencimento: Yup.string().min(4, 'O campo precisa ter pelo menos 8 caracteres').required('Campo obrigatorio'),
    }), onSubmit: (values) => {
      console.log(values + "val")

    }
  })

  const post = () => {
    console.log(form.values.CEP)
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
          number: form.values.nomeDoCartao,
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
                <Form onSubmit={form.handleSubmit}>
                  <div>
                    <label htmlFor="recebedor">Quem irá receber</label>
                    <input type="text" id="destinatario" name="destinatario" value={form.values.destinatario} onChange={form.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="Endereço">Endereço</label>
                    <input type="text" id="Endereço" name="Endereço" value={form.values.Endereço} onChange={form.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input type="text" id="Cidade" name="cidade" value={form.values.cidade} onChange={form.handleChange} />
                  </div>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="CEP" >CEP</label>
                      <input type="number" id="CEP" name="CEP" value={form.values.CEP} onChange={form.handleChange} />
                    </div>
                    <div >
                      <label htmlFor="Número" >Número</label>
                      <input type="number" id="Número" name="numero" value={form.values.numero} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <div>
                    <label htmlFor="Complemento">Complemento (opcional)</label>
                    <input type="text" id="Complemento" name="complemento" value={form.values.complemento} onChange={form.handleChange} />
                  </div>
                  <Button type="button" onClick={() => {
                    setPaginaDePagamento(true)
                    setPaginaDeEntrega(false)

                  }} >Continuar com o pagamento</Button>
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
                    <input type="text" id="nome" name="nomeDoCartao" value={form.values.nomeDoCartao} onChange={form.handleChange} />
                  </div>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="numero">numero</label>
                      <input type="number" id="numero" name="numeroDoCartao" value={form.values.numeroDoCartao} onChange={form.handleChange} />
                    </div>
                    <div>
                      <label htmlFor="CVV">CVV</label>
                      <input type="number" id="CVV" name="CVV" value={form.values.CVV} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <NumeroECEP>
                    <div>
                      <label htmlFor="Mês" >Mês de vencimento</label>
                      <input type="number" id="Mês" name="mesDeVencimento" value={form.values.mesDeVencimento} onChange={form.handleChange} />
                    </div>
                    <div >
                      <label htmlFor="Ano" >Ano de vencimento</label>
                      <input type="number" id="Ano" name="anoDeVencimento" value={form.values.anoDeVencimento} onChange={form.handleChange} />
                    </div>
                  </NumeroECEP>
                  <input type="submit" value="finalizar pagamento" onClick={() => {
                    setPaginaDePagamento(false)
                    setPaginaDeEntrega(false)
                    post()
                  }} />
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