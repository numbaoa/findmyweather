import React from 'react'
import Weather from './components/Weather'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
