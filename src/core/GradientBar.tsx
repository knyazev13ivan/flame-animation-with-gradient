import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Canvas from '../components/Canvas'
import Point from '../components/Point'
import { IAnimation } from '../components/Types'
import { run, stop } from '../store/gradientBarSlice'
import { setColorsArr } from '../store/colors'
import '../styles/gradientBar.scss'

function GradientBar() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number | undefined>(480)
  const [height, setHeight] = useState<number | undefined>(15)

  const dispatch = useAppDispatch()
  const points = useAppSelector(state => state.points.points)
  const isRun = useAppSelector(state => state.gradient.isRun)
  const size = useAppSelector(state => state.colors.size)

  let currentColors = []

  useLayoutEffect(() => {
    setWidth(containerRef.current?.offsetWidth)
    setHeight(containerRef.current?.offsetHeight)
  }, [])

  useEffect(() => { dispatch(run()) }, [points])

  const animation: IAnimation = {
    isRun: isRun,

    update() {
      // console.log('render!');
    },

    render(ctx) {
      //отрисовка градиента
      const sorted = points.slice().sort((a, b) => a.position - b.position)

      for (let i = -1; i < sorted.length; i++) {
        const start = sorted[i] || {
          color: sorted[i + 1].color,
          position: 0
        }
        const end = sorted[i + 1] || {
          color: sorted[i].color,
          position: width
        }
        const gradient = ctx.createLinearGradient(start.position, 0, end.position, 0)
        gradient.addColorStop(0, start.color)
        gradient.addColorStop(1, end.color)
        ctx.fillStyle = gradient
        ctx.fillRect(start.position, 0, end.position, 15)
      }
      //=========
      //взятие цветов из градиента для state.colors
      currentColors = []
      for (let i = 0; i < size; i++) {
        const xPos = Math.floor(i * (width! / size) + (width! / size) / 2)
        const rgb = ctx.getImageData(xPos, 5, 1, 1).data.slice(0, 3)
        currentColors.push(`rgb(${rgb.join(', ')})`)
      }

      dispatch(setColorsArr(currentColors))

      setTimeout(() => dispatch(stop()), 0)
    }
  }

  return (
    <div ref={containerRef} className='gradient-bar'>

      <Canvas
        animation={animation}
        run={isRun}
        width={width}
        height={height} />

      <div>
        {points.map(_point => {
          const id = useId()
          return <Point key={id} id={id} />
        }
        )}
      </div>

    </div>
  )
}

export default GradientBar