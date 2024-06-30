import React from 'react'
import NavBar from '../components/NavBar'
import Inner from '../components/layouts/Inner'
import logo from "../assets/logo192.png"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import BorderButton from '../components/layouts/BorderButton'
import Text from '../components/layouts/Text'


const Contact = () => {
  return (
    <div className="bg-black text-white lg:h-[100vh] h-[110vh] w-full">
      <Inner>

        <div className='flex mt-1'>
          <motion.div initial={{ x: "-20vw" }} animate={{ x: 0 }} transition={{ duration: 1 }} className='lg:w-[10vw] w-[20vw] lg:h-[7vh] flex justify-center items-center' >
            <NavLink to={"/"}>
              <img src={logo} alt="" className='logo-animation lg:scale-[0.4] scale-[0.7]' />
            </NavLink>
          </motion.div>
          <NavBar></NavBar>
        </div>

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
      </Inner>
    </div>
  )
}

export default Contact