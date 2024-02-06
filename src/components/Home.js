import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Internship from './Internship'
import Hero from './Hero'
import Products from './Products'
import About from './About'

export default function Home() {
  return (
    <div>
       <div style={{overflowX:'hidden'}}>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Internship/>
      <Footer/>
   
    </div>
    </div>
  )
}
