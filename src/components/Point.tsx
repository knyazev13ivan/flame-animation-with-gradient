//@ts-nocheck
import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeColor, changePosition } from '../store/pointsSlice'
import '../styles/point.scss'

const Point: React.FC<ComponentPropsWithoutRef> = ({ id, ...props }) => {
  const dispatch = useAppDispatch()
  const current = useAppSelector(state => state.points.points.find(p => p.id === id))

  const position = current.position
  const color = current.color

  const handleColorChange = (e: ChangeEvent): void => {
    dispatch(changeColor({ id, color: e.target.value }))
  }
  const handleDragStart = (e: MouseEvent): void => {
    dispatch(changePosition({ id: id, position: e.clientX - 10 }))
  }
  const handleDragEnd = (e: Event): void => {
    dispatch(changePosition({ id: id, position: e.clientX - 10 }))
  }

  return (
    <div className='point' style={{ left: `${position - 10}px` }}>
      <label style={{ borderColor: color }}>
        <input className='pick-color'
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e)}
          />
      </label>
      <div 
      className='circle' 
      draggable={true}
      onDrag={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      ></div>
      <span>{id}</span>
    </div>
  )
}

export default Point