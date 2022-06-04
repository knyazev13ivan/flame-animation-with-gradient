import React from 'react'
import { IPointProps } from './Types'
import '../styles/point.scss'

const Point: React.FC<IPointProps> = ({ color, position }) => {
  return (
    <div className='point' style={{ left: `${position}px` }}>
      <label style={{borderColor: color}}>
        <input className='pick-color'
          type="color"
          value={color} />
      </label>
      <div className='circle'></div>
    </div>
  )
}

export default Point