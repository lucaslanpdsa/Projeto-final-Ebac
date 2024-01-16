import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/ListaDeRestaurantes'

type DadosDoPedido = {
  products: {
    "id": 1,
    "price": 0
  }
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: string | number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string | number
      expires: {
        month: string | number
        year: string | number
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
    purchase: builder.mutation<any, DadosDoPedido>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestauranteQuery, useGetRestaurantesQuery, usePurchaseMutation } = api

export default api