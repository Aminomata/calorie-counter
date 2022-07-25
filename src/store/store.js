import { configureStore } from '@reduxjs/toolkit'
import { macroReducer } from './reducer'

export const store = configureStore({
  reducer: {
    macro: macroReducer
  },
})