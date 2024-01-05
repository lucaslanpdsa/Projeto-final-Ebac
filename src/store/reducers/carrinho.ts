import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prato } from '../../routes/PaginaDoRestaurante/index'

type carrinhoState = {
  items: Prato[]
  isOpen: Boolean
}

const initialState: carrinhoState = {
  items: [],
  isOpen: false,
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
    toogle: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { adicionar, remover, toogle } = carrinhoSlice.actions
export default carrinhoSlice.reducer