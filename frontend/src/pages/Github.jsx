import React from 'react'
import NavBar from '../components/NavBar'
import Inner from '../components/layouts/Inner'
import Footer from '../components/home/Footer'
import Heading from '../components/layouts/Heading'

const Github = () => {
  return (
    <div className="bg-black text-white min-h-[100vh] w-full">
      <Inner>
        <NavBar></NavBar>
        <div className='h-[85vh] w-full'>
          <div className='p-8 lg:text-2xl text-lg'>
            Quotient Bot is an open-source project developed by Quotient, dedicated to providing innovative and flexible solutions for managing gaming and tournament activities. As an open-source company, we believe in the power of collaboration and transparency. You can explore our code, contribute to our development, and stay updated with our latest features by visiting our GitHub repository. Join us in enhancing the gaming experience and be part of our growing community on GitHub!
          </div>
          <div className='mt-[-6vh]  text-[#06F5B6] '>
          <Heading>Our Contributors</Heading>
          </div>
          <div className='bg-red-400 min-h-[40vh] w-[95%] mx-auto mt-4 flex flex-wrap'></div>

        </div>
        <Footer />
      </Inner>
    </div>
  )
}

export default Github