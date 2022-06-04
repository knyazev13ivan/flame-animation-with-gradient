import { ICircle } from "../components/Types"

const drawCircle = (
  ctx: CanvasRenderingContext2D,
  { posX, posY, radius, waveSize, numberOfWaves, startAngle, offsetAngle, width, color }: ICircle
): void => {

  ctx.strokeStyle = color
  ctx.lineWidth = width

  ctx.beginPath()
  ctx.moveTo(posX + radius, posY)

  for (let i = -180; i < 180; i++) {
    const currentAngle = (startAngle + i) * Math.PI / 180
    const modAngle = offsetAngle * Math.PI / 180
    const now = Math.abs(i)

    let offset = 0

    if (now > 30) {
      offset = (now - 30) / 180
    }
    if (offset > 1) {
      offset = 1
    }

    const waveAmplitude = offset * Math.sin((currentAngle + modAngle) * numberOfWaves) * waveSize

    const x = posX + Math.cos(currentAngle) * (radius + waveAmplitude)
    const y = posY + Math.sin(currentAngle) * (radius + waveAmplitude)

    i > -180 ? ctx.lineTo(x, y) : ctx.moveTo(x, y)

  }
  ctx.closePath()
  ctx.stroke()
}

export default drawCircle