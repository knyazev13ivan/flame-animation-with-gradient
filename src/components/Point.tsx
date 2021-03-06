//@ts-nocheck
import React, { ChangeEvent, ComponentPropsWithoutRef, DragEvent, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import '../styles/point.scss'
import { changeColor, changePosition } from '../store/pointsSlice'

const Point: React.FC<ComponentPropsWithoutRef> = ({ id, offsetLeft, ...props }) => {
  const dispatch = useAppDispatch()
  const current = useAppSelector(state => state.points.points.find(p => p.id === id))

  const position = current.position
  const color = current.color

  const handleColorChange = (e: ChangeEvent): void => {
    dispatch(changeColor({ id, color: e.target.value }))
  }

  const handleDrag = (e: DragEvent): void => {
    if (e.clientX) dispatch(changePosition({ id: id, position: e.clientX - 10 - offsetLeft}))
  }
  
  const handleDragEnd = (e: DragEvent): void => {
    dispatch(changePosition({ id: id, position: e.clientX - 10 - offsetLeft}))
  }

  return (
    <div className='point' style={{ left: `${position - 10}px` }}>
      <label style={{ borderColor: color }}>
        <input className='pick-color'
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </label>
      <div
        className='circle'
        draggable={true}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      ></div>
    </div>
  )
}

export default memo(Point)