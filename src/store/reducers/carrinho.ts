import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prato } from '../../components/PratosCard'

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
      state.items.push(action.payload)
    },
    toogle: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { adicionar, toogle } = carrinhoSlice.actions
export default carrinhoSlice.reducer