import React, { useEffect, useRef, useState } from 'react'
import Canvas from '../components/Canvas'
import clearCanvas from '../utils/clearCanvas'
import drawCircle from '../utils/drawCircle'
import drawFps from '../utils/drawFps'
import { IAnimation, ICircle } from '../components/Types'
import '../styles/waveCircles.scss'

function WaveCircles() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number | undefined>(0)
  const [height, setHeight] = useState<number | undefined>(0)
  
  useEffect(() => {
    setWidth(containerRef.current?.offsetWidth)
    setHeight(containerRef.current?.offsetHeight)
  }, [width, height])
  
  let time = 0
  let fps = 0
  let startAngle = 0

  const animation: IAnimation = {
    isRun: true,
    
    update(params) {
      const { deltaTime, currentTime } = params
      
      if (currentTime > time + 500) {
        fps = Math.round(1000 / deltaTime)
        time = currentTime
      }
      
      startAngle >= 360 ? startAngle = 0 : startAngle += 0.5
    },
    
    render(ctx) {
      clearCanvas(ctx)
      
      drawFps(ctx, fps)
      
      for (let i = 0; i < 5; i++) {
        const circle: ICircle = {
          posX: ctx.canvas.width / 2,
          posY: ctx.canvas.height / 2,
          radius: 200 + i * 4,
          waveSize: 15,
          numberOfWaves: 7,
          startAngle: startAngle,
          offsetAngle: i * 20,
          width: 5,
          color: `hsl(${0}, ${84}%, ${35 - i * 5}%`
        }

        drawCircle(ctx, circle)
      }
    }
  }

  return (
    <div ref={containerRef} className='container'>
      <Canvas
        className='wave-circle-canvas'
        animation={animation}
        width={width}
        height={height} />
    </div>
  )
}

export default WaveCircles