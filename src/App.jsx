import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Solution from './components/Solution'
import SolutionClick from './components/SolutionClick'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/issue/:device' element={<Solution />} />
    <Route path='/issue/:device/:id' element={<SolutionClick />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App