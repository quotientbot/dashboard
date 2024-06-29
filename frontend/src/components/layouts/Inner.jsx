import React from 'react'
import { motion } from "framer-motion"

const Inner = ({ children }) => {
    return (
        <div className='overflow-hidden'>

            <motion.div
                initial={{ right: "100vw" }}
                animate={{ right: "100vw" }}
                exit={{
                    right: "0",
                    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
                }}
                className='fixed top-0 right-0  bg-black w-full h-[100vh] z-10'>
            </motion.div>

            <motion.div
                initial={{ y: 0, scale: 1, opacity: 0.5 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{
                    y: -100,
                    scale: 0.95,
                    opacity: 0.5,
                    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                >
                    {children}
                </motion.div>

            </motion.div>



        </div>
    )
}

export default Inner