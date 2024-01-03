import { configureStore } from "@reduxjs/toolkit";
import carrinho from "./reducers/carrinho";

export const store = configureStore({
  reducer: {
    carrinho: carrinho
  },
})

export type RootReducer = ReturnType<typeof store.getState>