import React from 'react'
import {motion} from 'framer-motion'

const Heading = ({children}) => {
  return (
    <div className='mt-[5vh] h-[7vh] flex items-center leading-[5vh] lg:w-[25%] w-[80%] lg:text-[5vh] text-[3vh] overflow-hidden lg:mx-7 mx-[8vw] font-extrabold tracking-wide  text-center '> 
        <motion.div 
            initial={{rotate : "45deg"}}
            whileInView={{rotate : "0deg"}}
            transition={{duration : 0.7, ease : "easeInOut"}}
            viewport={{ once: true }}
            className='origin-left'>
            {children} 
        </motion.div>
    </div>
  )
}

export default Heading