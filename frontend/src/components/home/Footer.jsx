import React from 'react'
import { NavLink } from 'react-router-dom'
// import { GiCrownedSkull } from "react-icons/gi";
import { motion } from "framer-motion"
import { Avatar, Stack, VStack ,Box ,Text } from '@chakra-ui/react'

const Footer = ({delay}) => {
    return (

        <motion.div bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]} 
        initial = {{y : +100}}
        animate = {{y : 0}}
        transition={{delay : delay, staggerChildren: 0.2}}
        className=' w-full lg:h-[7vh] h-[10vh] font-medium flex  flex-wrap justify-evenly lg:gap-0 gap-[5vw] items-center duration-500 ease-in-out text-lg lg:pt-1'
        >
    

    <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-bold"
            : "hover:underline underline-offset-4"
        }
      >
        Copyright © 2022 | Quotient
      </NavLink>

      <NavLink
        to={"https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D746348747918934096%26scope%3Dapplications.commands%2520bot%26permissions%3D536737213566"}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-bold"
            : "hover:underline underline-offset-4"
        }
      >
        Invite
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-bold"
            : "hover:underline underline-offset-4"
        }
      >
        Support
      </NavLink>

      <NavLink
        to={"/terms"}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-bold"
            : "hover:underline underline-offset-4"
        }
      >
        T&C
      </NavLink>

      <NavLink
        to={"/policy"}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-bold"
            : "hover:underline underline-offset-4"
        }
      >
        Privacy Policy
      </NavLink>

      <NavLink
        to={"/policy/refund"}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-bold"
            : "hover:underline underline-offset-4"
        }
      >
        Refund Policy
      </NavLink>
    </motion.div>
  );
};

export default Footer;

