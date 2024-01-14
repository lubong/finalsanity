import React from 'react'

import { About } from "./container"
import { Navbar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className='app'>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App