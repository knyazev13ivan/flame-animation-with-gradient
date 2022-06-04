import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPoint {
  position: number,
  color: string
}

export interface IPointsState {
  points: Array<IPoint>
}

const initialState: IPointsState = {
  points: [
    {
      position: 0,
      color: '#902020'
    },
    {
      position: 20,
      color: '#e06db7'
    },
    {
      position: 70,
      color: '#eb8a86'
    },
    {
      position: 100,
      color: '#903cd'
    },
  ]
}

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<number>) => {
      state.points[1].position = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.points[1].color = action.payload
    },
  },
})

export const { setPosition, setColor } = pointsSlice.actions

export default pointsSlice.reducer
