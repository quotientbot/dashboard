import React from 'react'
import Inner from '../components/layouts/Inner'
import Hero from "../components/home/hero"
import About from '../components/home/About'
import Games from '../components/home/Games'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div className="bg-black text-white min-h-[100vh] w-full">

      <Inner>
        <Hero/>
        <About/>
        <Games/>
        <Footer/>
      </Inner>

    </div>
  )
}

export default Home