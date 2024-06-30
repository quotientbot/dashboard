import React from 'react'
import {motion} from 'framer-motion'

const Heading = ({children}) => {
  return (
    <div className='mt-[5vh] h-[7vh] px-3 pb-3 leading-[5vh] lg:w-[20%] w-[80%] text-[7vh] overflow-hidden lg:mx-5 mx-[12vw] font-extrabold tracking-wide  text-center'> 
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