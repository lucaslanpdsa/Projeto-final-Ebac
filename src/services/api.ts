import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/ListaDeRestaurantes'

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
    })
  })
})

export const { useGetRestauranteQuery, useGetRestaurantesQuery } = api

export default api