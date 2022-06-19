import React, { useLayoutEffect, useRef, useState } from 'react'
import Canvas from '../components/Canvas'
import { FlameMatrix, IAnimation } from '../components/Types'
import { useAppSelector } from '../store/hooks'
import '../styles/flame.scss'
import calcStepForFlameMatrix from '../utils/calcStepForFlameMatrix'
import clearCanvas from '../utils/clearCanvas'

const Flame: React.FC = () => {
  const flameContainerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number>(600)
  const [height, setHeight] = useState<number>(504)

  const cellSize = 6

  const colors = useRef<Array<string>>()
  colors.current = useAppSelector(state => state.colors.colors)

  useLayoutEffect(() => {
    setWidth(flameContainerRef.current!.offsetWidth)
    setHeight(flameContainerRef.current!.offsetHeight)
  }, [])

  const mtx: FlameMatrix = [
    new Array(Math.floor(height / cellSize))
      .fill(null)
      .map(_str => new Array(Math.floor(width / cellSize)).fill(63)),
    new Array(Math.floor(height / cellSize))
      .fill(null)
      .map(_str => new Array(Math.floor(width / cellSize)).fill(63))
  ]

  // начальный индекс массива из 2ух матриц
  let toggleMtxIndex = 0

  const animation: IAnimation = {
    isRun: true,

    update() {

      calcStepForFlameMatrix(mtx, toggleMtxIndex)
      toggleMtxIndex = 1 - toggleMtxIndex

    },

    render(ctx) {
      clearCanvas(ctx)

      for (let str = 2; str < mtx[toggleMtxIndex].length; str++) {
        for (let i = 0; i < mtx[toggleMtxIndex][0].length; i++) {
          const x = i * cellSize
          const y = height - str * cellSize

          const colorIndex = mtx[toggleMtxIndex][str][i]
          ctx.fillStyle = colors.current![colorIndex]

          ctx.fillRect(x, y, cellSize, cellSize)
        }
      }
    }
  }

  return (
    <div ref={flameContainerRef} className='flame-container'>
      <Canvas
        className='flame'
        animation={animation}
        run={true}
        width={width}
        height={height} />
    </div>
  )
}

export default Flame