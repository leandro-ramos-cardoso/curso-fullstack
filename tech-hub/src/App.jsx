import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import SobreNos from './pages/SobreNos'
import Artigos from './pages/Artigos'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />}/>
        <Route path="/sobre-nos" element={<SobreNos />}/>
        <Route path="/artigos" element={<Artigos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App