import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fungsi from './components/function'
import FungsiDua from './components/function_two'
import Kelas from './components/class'

function App() {

  return (
    <>
       <Fungsi nama='Mar0ne1234'/>
       <FungsiDua/>
       <Kelas/>
    </>
  );
}

export default App
