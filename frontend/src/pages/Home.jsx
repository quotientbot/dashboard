import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Commonbtn from '../components/core/Button'
import logo from "../assets/favicon.png"
import Footer from '../components/core/Footer'

const Home = () => {


  return (
    <div>
      <Navbar/>


      <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-2 items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          <div className='font-bold text-[#02E9AD] text-2xl' style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Experience the future of esports management with <span className='underline' style={{ textDecorationColor: 'white' }}>Quotient.</span>
          </div>
          <div>
            Quotient can automatically create dynamic point tables, check tags of all players, forbid entry of banned users who don’t join scrims on time, share ID passwords of custom rooms and handle big tourneys! 
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            <Commonbtn type={true} text="Invite Me" path="/#"/>
            <Commonbtn type={false} text="Join Us" path="/#"/>
          </div>
        </div>
        <div className='w-full md:w-1/2'> 
          <img src={logo} alt="" className="w-full md:w-auto" />
        </div>
      </div>

      <div>

      </div>

      <Footer/>
    </div>
  )
}

export default Home