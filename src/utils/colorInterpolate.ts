import { IRgb } from '../components/Types'

function getRgb(color: string): IRgb {
  const [r, g, b] = color.replace('rgb(', '')
    .replace(')', '')
    .split(',')
    .map(str => Number(str));
  return {
    r,
    g,
    b
  }
}

function colorInterpolate(
  colorA: string,
  colorB: string,
  interval: number
): IRgb {
  const rgbA: IRgb = getRgb(colorA)
  const rgbB: IRgb = getRgb(colorB)

  const colorVal = (prop: 'r' | 'g' | 'b'): number =>
    Math.round(rgbA[prop] * (1 - interval) + rgbB[prop] * interval);

  return {
    r: colorVal('r'),
    g: colorVal('g'),
    b: colorVal('b'),
  }
}

export default colorInterpolate