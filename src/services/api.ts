import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/ListaDeRestaurantes'

type DadosDoPedido = {
  pratos: [
    {
      "id": 1,
      "price": 0
    }
  ],
  delivery: {
    destinatario: string,
    endereço: {
      Endereço: string,
      cidade: string,
      cep: string,
      numero: 12,
      complemento?: string
    }
  },
  pagamento: {
    cartao: {
      nome: string,
      numero: string,
      CVV: 123,
      vencimentos: {
        mes: 12,
        ano: 1234
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<Restaurante, string | undefined>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    pedido: builder.mutation<any, DadosDoPedido>({
      query: (body: any) => ({
        url: 'checkout',
        method: 'post',
        body
      })
    })
  })
})

export const { useGetRestauranteQuery, useGetRestaurantesQuery, usePedidoMutation } = api

export default api