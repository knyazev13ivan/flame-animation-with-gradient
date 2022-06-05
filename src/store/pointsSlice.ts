import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPointProps, IPointsState } from '../components/Types'

const initialState: IPointsState = {
  points: [
    {
      id: ':r0:',
      color: '#4e89fd',
      position: 0,
    },
    {
      id: ':r1:',
      color: '#a435f0',
      position: 60,
    },
    {
      id: ':r2:',
      color: '#ff1154',
      position: 150,
    },
    {
      id: ':r3:',
      color: '#efd300',
      position: 220,
    },
  ]
}

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    changePosition: (state, {payload}: PayloadAction<IPointProps>) => {
      const indexPoint = state.points.findIndex(e => e.id === payload.id)
      if (payload.position < 0) payload.position = 0
      if (payload.position > 480) payload.position = 480

      state.points[indexPoint].position = payload.position
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
