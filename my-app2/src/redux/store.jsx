import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice'
import productsReducer from './ProductSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    products:productsReducer
  }
})