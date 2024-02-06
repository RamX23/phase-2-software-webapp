import React from 'react'
import Home from './components/Home'
import Feedback from './components/Feedback';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>

        <Route path="/Feedback" element={<Feedback/>}>
        </Route>
      </Routes>
    </BrowserRouter>

   </>
  )
}

export default App

