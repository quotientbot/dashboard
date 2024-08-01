import React from 'react'
import NavBar from '../NavBar'
import {easeIn, easeOut, motion } from "framer-motion"
// import { useGSAP } from "@gsap/react"
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const paragraphs = [
    "A discord bot that helps",
    "Esports servers to manage",
    "and organize scrims,",
    "tournaments of different",
    "mobile & PC games."
  ];

  const descInitial = { paddingTop: "5vh", opacity: 0 };
  const descAnimate = { paddingTop: "0vh", opacity: 1 };
  const descTransition = { duration: 0.7, ease: "easeIn" };

  const div1Initial = { width: "100%" };
  const div1Transition = { duration: 1.5, ease: easeOut, delay: 1 };

  // const triggerRef = useRef(null);

  // useGSAP(() => {
  //   gsap.to(".div2", {
  //     width : "50%",
  //     scrollTrigger : {
  //       trigger : ".div1",
  //       start: '50% 10%', 
  //       end: 'bottom 20%',
  //       scrub: true,
  //       markers: true,
  //       pin : true,
  //     }
  //   })
  // }, { scope: triggerRef })

  return (
    <div className='bg-black text-white h-[100vh] w-[100vw] sticky overflow-hidden' >

      <div className='h-[100vh] lg:w-[50%] w-full absolute'>
        <img src={"https://wallpaperaccess.com/full/2494528.jpg"} alt="" className='h-full w-full object-cover object-center ' />
      </div>

      <motion.div initial={div1Initial} animate={{ width: "50%" }} transition={div1Transition} className=' lg:h-[33vh] h-[40vh] bg-transparent lg:bg-black absolute right-0 lg:p-0 p-5 backdrop-blur-sm'>

        <NavBar delay={3.5}></NavBar>

        <div className='w-full h-[26vh] flex lg:flex-row flex-col justify-evenly lg:text-2xl italic text-center font-medium cursor-default text-md'>
          <div className='lg:h-full lg:w-[50%] w-full items-center flex  justify-center'>
            <motion.p
              initial={descInitial}
              animate={descAnimate}
              transition={{ ...descTransition, delay: 2.5 }}>
              Future Of Esports <br /> Management
            </motion.p>
          </div>
          <div className='lg:h-full lg:w-[50%] w-full items-center flex'>
            <motion.p
              initial={descInitial}
              animate={descAnimate}
              transition={{ ...descTransition, delay: 3 }}>
              10 million+ users <br /> 8,000+ discord servers.
            </motion.p>

          </div>
        </div>
      </motion.div>

      <motion.div
        initial={div1Initial} animate={{ width: "50%" }} whileInView={{ width: "50%" }} transition={div1Transition}
        className='div2 lg:h-[33vh] h-[30vh]  absolute lg:right-0 right-8  lg:top-[33%] top-[40%] pt-[5vh] lg:text-3xl text-[3.7vw] lg:bg-black font-semibold font-mono text-right cursor-default bg-transparent backdrop-blur-sm'>

        <div className=' lg:w-[35vw] w-[60vw] absolute lg:right-[7vw] right-[3vw] '>
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={descInitial}
              animate={descAnimate}
              transition={{ ...descTransition, delay : index*0.2}}
              className='lg:w-[35vw] w-[60vw] h-[5vh] overflow-hidden'
            >
              {text}
            </motion.p>
          ))}
        </div>


      </motion.div>

      <motion.div
        initial={div1Initial} transition={div1Transition} animate={{width : "85%"}}
        className=' lg:h-[34vh] h-[10vh] w-[50%] absolute lg:right-0 right-8 lg:top-[66%]  top-[80%] lg:bg-black bg-transparent backdrop-blur-sm'>

        <motion.p
          initial={{ paddingTop: "28vh", opacity: 0 }}
          animate={{ paddingTop: "0vh", opacity: 1 }}
          transition={{ duration: 0.5, ease: easeIn, delay: 3.5 }}
          className='px-4 text-[17.5vw] lg:leading-[34vh] tracking-tighter font-extrabold z-10h-[34vh] cursor-default overflow-hidden text-[#06F5B6] '>
          QUOTIENT
        </motion.p>

      </motion.div>
    </div>

  )
}

export default Hero