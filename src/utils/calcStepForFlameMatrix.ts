import { FlameMatrix } from "../components/Types"

const calcStepForFlameMatrix = (mtx: FlameMatrix, toggleMtxIndex: number) => {
  const randomFilling = new Array(mtx[0][0].length)
    .fill(63)
    .map(_e => Math.random() > 0.5 ? 1 : 63)
  mtx[toggleMtxIndex][0] = randomFilling
  mtx[toggleMtxIndex][1] = randomFilling

  for (let str = 2; str < mtx[toggleMtxIndex].length; str++) {
    for (let i = 0; i < mtx[toggleMtxIndex][0].length; i++) {
      let average = (mtx[toggleMtxIndex][str - 2][i]
        + (mtx[toggleMtxIndex][str - 1][i - 1] || 63)
        + mtx[toggleMtxIndex][str - 1][i]
        + (mtx[toggleMtxIndex][str - 1][i + 1] || 63))
        / 4.02 * 1.02

      if (average > 63) average = 63

      mtx[1 - toggleMtxIndex][str][i] = Math.round(average)
    }
  }
}

export default calcStepForFlameMatrix