import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'

//dentro da constante cria-se os reducers e slices
export const store = configureStore({
  reducer: {
    cart: cartReducer, //o meu carrinho passa a receber o cartReducer
    [api.reducerPath]: api.reducer
  },
  //configurando o midleware que ira receber um funcao cujo argumento e getDefaultMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//cria o tipo RootREducer que vai retornar o estado da store
export type RootReducer = ReturnType<typeof store.getState>
