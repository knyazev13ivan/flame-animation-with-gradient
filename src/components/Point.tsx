//@ts-nocheck
import React from 'react'
import { IPointProps } from './Types'
import '../styles/point.scss'

const Point: React.FC<IPointProps> = ({ id, color, position, ...props }) => {
  return (
    <div className='point' style={{ left: `${position}px` }}>
      <label style={{ borderColor: color }}>
        <input className='pick-color'
          type="color"
          value={color} 
          onChange={props.onChange}
          />
      </label>
      <div className='circle'></div>
      <span>{id}</span>
    </div>
  )
}

export default Point