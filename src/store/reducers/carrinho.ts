import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prato } from '../../routes/PaginaDoRestaurante/index'

type carrinhoState = {
  items: Prato[]
  carrinhoOpen: Boolean
  entregaOpen: boolean
}

const initialState: carrinhoState = {
  items: [],
  carrinhoOpen: false,
  entregaOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Prato>) => {
      state.items = [...state.items, action.payload]
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(x => x.id !== action.payload)
    },
    abreCarrinho: (state) => {
      state.entregaOpen = false
      state.carrinhoOpen = true
      console.log(state.carrinhoOpen)
    },
    fechaCarrinho: (state) => {
      state.carrinhoOpen = false
    },
    abreEntrega: (state) => {
      state.carrinhoOpen = false
      state.entregaOpen = true
      console.log(state.entregaOpen)
    },
    fechaEntrega: (state) => {
      state.entregaOpen = false
    }
  }
})

export const { adicionar, remover, abreCarrinho, fechaCarrinho, abreEntrega, fechaEntrega } = carrinhoSlice.actions
export default carrinhoSlice.reducer