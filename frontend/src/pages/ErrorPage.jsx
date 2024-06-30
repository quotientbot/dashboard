import React from 'react'
import Inner from '../components/layouts/Inner'
import {motion} from 'framer-motion'
import BorderButton from '../components/layouts/BorderButton'
import { NavLink } from 'react-router-dom'

const ErrorPage = ({ msg }) => {
    return (
        <div className='h-[100vh] w-full bg-black text-white flex justify-center items-center text-center '>
            <Inner>

                <motion.p 
                    initial={{scale : 0.4, opacity : 0}}
                    animate={{scale : 1, opacity : 1}}
                    transition={{duration : 1, ease : "easeIn"}}
                    className='text-[25vw] tracking-widest font-extrabold  leading-[20vw] text-[#06F5B6]'>
                    ERROR
                </motion.p>

                <motion.p 
                    initial={{scale : 0.4, opacity : 0}}
                    animate={{scale : 1, opacity : 1}}
                    transition={{duration : 1, ease : "easeIn", delay : 1}}
                    className='mt-10 lg:text-7xl text-3xl tracking-wider font-bold '>
                    {msg}
                </motion.p>

                <motion.div
                    initial={{ opacity : 0}}
                    animate={{opacity : 1}}
                    transition={{duration : 1, ease : "easeIn", delay : 2 }}
                    className=' mt-[5vh] lg:ml-[45%] ml-[30%]'>
                        <BorderButton><NavLink to={"/"}>Go Back</NavLink></BorderButton>
                </motion.div>


            </Inner>
        </div>
    )
}

export default ErrorPage