import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiCrownedSkull } from "react-icons/gi";
import { motion } from "framer-motion"

const NavBar = ({delay}) => {
    return (
        <motion.div 
            initial = {{y : -100}}
            animate = {{y : 0}}
            transition={{delay : delay, staggerChildren: 0.2}}
            className=' w-full lg:h-[7vh] h-[10vh] font-medium flex  flex-wrap justify-evenly lg:gap-0 gap-[5vw] items-center duration-500 ease-in-out text-lg lg:pt-1'>

            <NavLink to={"/"} className={({ isActive }) =>
                isActive
                    ? "underline underline-offset-4 font-bold"
                    : "hover:underline underline-offset-4"
            }>Home</NavLink>

            <NavLink to={"/contact"} className={({ isActive }) =>
                isActive
                    ? "underline underline-offset-4 font-bold"
                    : "hover:underline underline-offset-4"
            } >Support</NavLink>

            <NavLink to={"/premium"} className={({ isActive }) =>
                `font-bold text-[#06F5B6] hover:underline underline-offset-4 relative group ${isActive ? 'underline font-bold' :'hover:underline' }`
            }>
                <p>Premium</p>
                <span className='text-[#FFD700] text-2xl absolute -right-5 -top-3 group-hover:rotate-12'> <GiCrownedSkull /></span>
            </NavLink>

            {/* <NavLink to={"#"} className={({ isActive }) =>
                isActive
                    ? "underline underline-offset-4 font-bold"
                    : "hover:underline underline-offset-4"
            } >Vote</NavLink> */}

            <NavLink to={"/login"} className={({ isActive }) =>
                isActive
                    ? "underline underline-offset-4 font-bold"
                    : "hover:underline underline-offset-4"
            } >Login</NavLink>
            
        </motion.div>
    )
}

export default NavBar