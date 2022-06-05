import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColors } from "../components/Types";

const initialState: IColors = {
  colors: new Array(64).fill('#ff1154'),
  size: 64
}

export const colorsSlice = createSlice({
  name: 'colors',
  initialState: initialState,
  reducers: {
    setColor: (state, action: PayloadAction<{index: number, color: string}>) => {
      state.colors[action.payload.index] = action.payload.color
    },
    setColorsArr: (state, action: PayloadAction<string[]>) => {
      state.colors = action.payload.slice()
    }
  }
})

export const { setColor, setColorsArr } = colorsSlice.actions

export default colorsSlice.reducer