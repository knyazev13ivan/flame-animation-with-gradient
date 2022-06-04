import React, { useEffect, useRef } from 'react'
import { CanvasProps, IAnimation, IAnimationParams } from './Types';

const Canvas: React.FC<CanvasProps & { animation: IAnimation }> = ({ animation, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  let requestID = 0

  let ctx: CanvasRenderingContext2D

  useEffect(() => {
    const canvas = canvasRef.current!
    canvasCtxRef.current = canvas!.getContext('2d');
    ctx = canvasCtxRef.current!

    // requestAnimationFrame((stampTime: number) => animate(stampTime))

    return () => window.cancelAnimationFrame(requestID)

  }, []);

  useEffect(() => {
    if (animation.isRun) {
      console.log('run ', requestID);
      
      requestID = requestAnimationFrame((stampTime: number) => animate(stampTime))
    } else {
      console.log('stop ', requestID);
      
      window.cancelAnimationFrame(requestID)
    }
  }, [animation.isRun])

  let prevTime = 0
  let deltaTime = 0
  const maxInterval = 40

  const animate = (currentTime: number) => {
    deltaTime = currentTime - prevTime

    const params: IAnimationParams = {
      currentTime,
      prevTime,
      deltaTime
    }

    if (deltaTime < maxInterval) {
      animation.update(params)
      animation.render(ctx)
    }

    prevTime = currentTime

    requestID = requestAnimationFrame((stampTime: number) => animate(stampTime))
  }

  return (
    <canvas ref={canvasRef}
      width={props.width}
      height={props.height} />
  )
}

export default Canvas