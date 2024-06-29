import React from 'react'
import Inner from '../components/layouts/Inner'
import Hero from "../components/home/hero"
import About from '../components/home/About'

const Home = () => {
  return (
    <div className="bg-black text-white min-h-[100vh] w-full">

      <Inner>
        <Hero/>
        <About/>
      </Inner>

    </div>
  )
}

export default Home