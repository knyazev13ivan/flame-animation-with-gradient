function drawFps(ctx: CanvasRenderingContext2D, fps: number): void {
  ctx.strokeStyle = '#aaaaaa'
  ctx.lineWidth = 1
  ctx.font = '16px "Century Gothic"'
  ctx.strokeText(`FPS: ${fps}`, 5, 20)
}

export default drawFps