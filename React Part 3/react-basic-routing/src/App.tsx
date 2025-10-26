import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about/:id' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
