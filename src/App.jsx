import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Solution from './components/Solution'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/issue/:device' element={<Solution />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App