import React from 'react'
import Flame from './core/Flame'
import GradientBar from './core/GradientBar'
import WaveCircles from './core/WaveCircles'
import './styles/app.scss'

const App = () => {
  return (
    <>
      {/* <WaveCircles /> */}
      <GradientBar />
      <Flame />
    </>
  )
}

export default App