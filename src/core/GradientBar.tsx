import React, { useEffect, useRef, useState } from 'react'
import Canvas from '../components/Canvas'
import Point from '../components/Point'
import { IAnimation } from '../components/Types'
import clearCanvas from '../utils/clearCanvas'
import '../styles/gradientBar.scss'

function GradientBar() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [width, setWidth] = useState<number | undefined>(0)
  const [height, setHeight] = useState<number | undefined>(0)

  useEffect(() => {
    setWidth(containerRef.current?.offsetWidth)
    setHeight(containerRef.current?.offsetHeight)
  }, [])

  const initColor0 = '#a435f0'
  const initColor1 = '#4e89fd'
  const initColor2 = '#ff1154'
  const initColor3 = '#efd300'

  const animation: IAnimation = {
    isRun: true,

    update() {
      // console.log('render!');
    },
    
    render(ctx) {
      clearCanvas(ctx)

      ctx.fillStyle = '#902020'
      ctx.fillRect(20, 2, 8, 8)
    }
  }

  return (
    <div ref={containerRef} className='gradient-bar'>
      <Canvas
        className='wave-circle-canvas'
        animation={animation}
        width={width}
        height={height} />
      <Point color={initColor0} position={100} />
      <Point color={initColor1} position={200} />
      <Point color={initColor2} position={300} />
      <Point color={initColor3} position={400} />
    </div>
  )
}

export default GradientBar