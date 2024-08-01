import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'


const Text = ({children}) => {
    const element = useRef(null);
    const words = children.split(" ")

  return (
    <div ref={element} className=' lg:mb-7 mb-5 flex flex-wrap' >
        {
            words.map( (word,i) => {
                return (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className='mx-1'
                        viewport={{ once: true }}
                    >
                        {word }
                    </motion.span>
                )
            })
        }
    </div>
  )
}

export default Text