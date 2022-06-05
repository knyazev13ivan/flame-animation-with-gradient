import { configureStore } from '@reduxjs/toolkit'
import pointsReducer from './pointsSlice'
import gradientBarReducer from './gradientBarSlice'
import colorsReducer from './colors'

export const store = configureStore({
  reducer: {
    points: pointsReducer,
    gradient: gradientBarReducer,
    colors: colorsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch