import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPointProps, IPointsState } from '../components/Types'

const initialState: IPointsState = {
  points: [
    {
      id: ':r0:',
      color: 'rgb(240, 209, 1)',
      position: 0,
    },
    {
      id: ':r1:',
      color: 'rgb(255, 144, 15)',
      position: 130,
    },
    {
      id: ':r2:',
      color: 'rgb(240, 53, 50)',
      position: 240,
    },
    {
      id: ':r3:',
      color: 'rgb(24, 24, 24)',
      position: 460,
    },
  ]
}

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    changePosition: (state, {payload}: PayloadAction<IPointProps>) => {
      const indexPoint = state.points.findIndex(e => e.id === payload.id)
      let position = payload.position
      if (payload.position < 0) position = 0
      if (payload.position > 480) position = 480

      state.points[indexPoint].position = position
    },
    changeColor: (state, {payload}: PayloadAction<IPointProps>) => {
      const indexPoint = state.points.findIndex(e => e.id === payload.id)
      state.points[indexPoint].color = payload.color
    },
    addPoint: (state, {payload}: PayloadAction<IPointProps>) => {
      state.points.push({
        id: payload.id,
        color: payload.color,
        position: payload.position
      })
    },
    deletePoint: (state, actions: PayloadAction<string>) => {
      state.points.filter(point => point.id !== actions.payload)
    },
  },
})

export const { changePosition, changeColor, addPoint, deletePoint } = pointsSlice.actions

export default pointsSlice.reducer
