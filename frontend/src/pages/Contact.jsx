import React from 'react'
import NavBar from '../components/NavBar'
import Inner from '../components/layouts/Inner'
import logo from "../assets/logo192.png"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import BorderButton from '../components/layouts/BorderButton'
import Text from '../components/layouts/Text'
import Footer from '../components/home/Footer'


const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col">
      <Inner>
        <div className='flex mt-1'>
          <motion.div initial={{ x: "-20vw" }} animate={{ x: 0 }} transition={{ duration: 1 }} className='lg:w-[10vw] w-[20vw] lg:h-[7vh] flex justify-center items-center'>
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" className='logo-animation lg:scale-[0.4] scale-[0.7]' />
            </NavLink>
          </motion.div>
          <NavBar />
        </div>

        <div className='flex-grow overflow-y-auto'>
          <div className='h-auto w-[80vw] ml-[10vw] lg:mt-[15vh] mt-4 lg:text-2xl cursor-default text-xl text-justify'>
            
            <div className="pl-5 my-8">
              {/* <h1 style={{ textAlign: 'left' }}>Privacy</h1> */}
              <h1 className='text-4xl  font-bold text-[#06F5B6] hover:underline underline-offset-4 relative group tracking-wide text-center mb-8' style={{ textAlign: 'left' }}>Welcome to our Support Page!</h1>
              <p>   We are dedicated to providing you with the best possible assistance for any issues you may encounter. Our primary channel for support is via Discord, where our team of knowledgeable and friendly support staff is ready to help you with any type of problem.</p>


              <h1 className='text-4xl  font-bold text-[#06F5B6] hover:underline underline-offset-4 relative group tracking-wide text-center mb-8 mt-6 ' style={{ textAlign: 'left' }} ></h1>
              <p>  Whether you need help with technical issues, have questions about our services, or need assistance with your account, we are here to ensure you get the support you need.</p>


              <h1 className='text-3xl font-bold tracking-wide text-center mb-8 mt-12' style={{ textAlign: 'left' }} ></h1>
              <p>  For any type of problem, connect with us via Discord. We are here to assist you and ensure you have the best experience possible.</p>


              <div className='lg:ml-[45%] ml-[25%] mt-6 lg:mt-10'>
             <BorderButton><a href="#" target='_blank'>Join Us</a></BorderButton>
             </div>

            </div>
          </div>
        </div>
<br></br>
<br></br>
<br></br>
        <div className="w-full h-[2px] bg-[#06F5B6] mt-4"></div>
        <Footer />
      </Inner>
    </div>
  );
}

export default Contact

{/* 
        <div className='h-[90vh] lg:h-[60vh] w-[80vw] ml-[10vw] lg:mt-[15vh] mt-4 lg:text-2xl cursor-default text-xl text-justify'>
          <h1 className='text-4xl font-bold tracking-wide text-center mb-8'>Welcome to our Support Page!</h1>
          <div className="pl-5 my-8">
            <Text>
              We are dedicated to providing you with the best possible assistance for any issues you may encounter. Our primary channel for support is via Discord, where our team of knowledgeable and friendly support staff is ready to help you with any type of problem.
            </Text>
            <Text>
              Whether you need help with technical issues, have questions about our services, or need assistance with your account, we are here to ensure you get the support you need.
            </Text>
            <Text>
              For any type of problem, connect with us via Discord. We are here to assist you and ensure you have the best experience possible.
            </Text>
          </div>
          <div className='lg:ml-[45%] ml-[25%] mt-6 lg:mt-10'>
            <BorderButton><a href="#" target='_blank'>Join Us</a></BorderButton>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#06F5B6] mt-4"></div>
        <Footer/>
      
       
      </Inner>
    </div>
  )
}

export default Contact */}