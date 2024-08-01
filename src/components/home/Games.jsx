import React from 'react'
import Heading from '../layouts/Heading'
import "./games.css"
import Text from '../layouts/Text'
import img1 from "../../assets/ff.jpeg"
import img2 from "../../assets/bgmi3.jpg"
import img3 from "../../assets/logo192.png"
import {motion} from "framer-motion"

const Games = () => {
  return (
    <div className='lg:h-[80vh] h-[120vh] w-full border-b-2 border-[#06F5B6]'>
      <Heading>Games</Heading>

      <div className='lg:h-[50vh] w-[90vw] ml-[5vw] h-[90vh]  lg:mt-10 mt-5  flex lg:flex-row flex-col'>
        <div className='clip clip1 lg:h-full h-[35%] w-full lg:w-[32%]'>
          <motion.img initial={{scale : 1.4}} whileInView={{scale : 1}} src={img1} transition={{duration : 0.3  }} alt="" />
        </div>

        <div className=' clip2 lg:h-full h-[36%] w-full lg:w-[36%] flex justify-center items-center '>
          <img src={img3} alt="" />
        </div>

        <div className='clip clip3 lg:h-full h-[35%] w-full lg:w-[32%]' >
          <motion.img initial={{scale : 1.4}} whileInView={{scale : 1}} src={img2} alt="" transition={{duration : 0.3 }} />
        </div>
      </div>

      <div className='mt-10 ml-[5vw] text-2xl text-center'>
        <Text>Kick off your tournament and have a blast!</Text>
      </div>

    </div>
  )
}

export default Games