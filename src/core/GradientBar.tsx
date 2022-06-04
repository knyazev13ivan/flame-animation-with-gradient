//@ts-nocheck
import React, { useEffect, useId, useRef, useState } from 'react'
import Canvas from '../components/Canvas'
import Point from '../components/Point'
import { IAnimation } from '../components/Types'
import clearCanvas from '../utils/clearCanvas'
import '../styles/gradientBar.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setColor } from '../store/pointsSlice'

function GradientBar() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number | undefined>(0)
  const [height, setHeight] = useState<number | undefined>(0)

  const dispatch = useAppDispatch()
  const points = useAppSelector(state => state.points.points)

  useEffect(() => {
    setWidth(containerRef.current?.offsetWidth)
    setHeight(containerRef.current?.offsetHeight)
  }, [])

  const handleOnChange = (e: Event, id): void => {
    dispatch(setColor({ id, color: e.target.value }))
  }

  const animation: IAnimation = {
    // isRun: true,
    isRun: false,

    update() {
      console.log('render!');
    },

    render(ctx) {
      clearCanvas(ctx)

      ctx.fillStyle = '#902020'
      ctx.fillRect(20, 2, 8, 8)
    }
  }
  console.log('render GradientBar!');

  return (
    <div ref={containerRef} className='gradient-bar'>
      <Canvas
        className='wave-circle-canvas'
        animation={animation}
        width={width}
        height={height} />

      <div>
        {points.map(point => {
          const id = useId()

          return (
            <Point
              key={id}
              id={id}
              color={point.color}
              position={point.position}
              onChange={(e) => handleOnChange(e, id)}
            />
          )
        }
        )}
      </div>
    </div>
  )
}

export default GradientBar