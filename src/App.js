import React from 'react'

import { About , Home , Locations} from "./container"
import { Navbar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className='app'>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Locations" element={<Locations />} />
        {/* <Route path="/Promotions" element={<Promotions />} />
        <Route path="/News" element={<News />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/JoinUs" element={<InvestorInfo />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App