import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ternary from './components/Ternary'
import And from './components/And'
import Or from './components/Or'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ternary/>
      <And/>
      <Or/>
    </>
  )
}

export default App
