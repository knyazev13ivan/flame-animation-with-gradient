import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPointProps, IPointsState } from '../components/Types'

const initialState: IPointsState = {
  points: [
    {
      id: ':r0:',
      color: '#a435f0',
      position: 0,
    },
    {
      id: ':r1:',
      color: '#4e89fd',
      position: 40,
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
    setPosition: (state, {payload}: PayloadAction<IPointProps>) => {
      const indexPoint = state.points.findIndex(e => e.id === payload.id)
      state.points[indexPoint].position = payload.position
    },
    setColor: (state, {payload}: PayloadAction<IPointProps>) => {
      const indexPoint = state.points.findIndex(e => e.id === payload.id)
      state.points[indexPoint].color = payload.color
    },
    addPoint: (state, {payload}: PayloadAction<IPointProps>) => {
      state.points.push({
        id: payload.id,
        color: payload.color,
        position: payload.position
      })
    }
  },
})

export const { setPosition, setColor } = pointsSlice.actions

export default pointsSlice.reducer
