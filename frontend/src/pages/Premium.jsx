import React from 'react'
import NavBar from '../components/NavBar'
import Inner from '../components/layouts/Inner'
import { TfiCrown } from "react-icons/tfi";
import Footer from '../components/home/Footer';
import {motion} from "framer-motion"
import BorderButton from '../components/layouts/BorderButton';
import Heading from '../components/layouts/Heading';

const Premium = () => {
  const plans = [
    { feature: 'Scrims', free: '2', starter: '5', intermediate: '7', ultimate: '♾️' },
    { feature: 'Tournaments', free: '0', starter: '2', intermediate: '3', ultimate: '♾️' },
    { feature: 'Drop Location Map (S)', free: '❌', starter: '✅', intermediate: '✅', ultimate: '✅' },
    { feature: 'Points Table (S)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Tag Check', free: '1', starter: '1', intermediate: '2', ultimate: '♾️' },
    { feature: 'Easy Tag', free: '❌', starter: '1', intermediate: '1', ultimate: '♾️' },
    { feature: 'Auto Purge', free: '1', starter: '2', intermediate: '4', ultimate: '♾️' },
    { feature: 'YT Regular Video Notification', free: '1', starter: '1', intermediate: '4', ultimate: '♾️' },
    { feature: 'YT Live Video Notification', free: '❌', starter: '✅', intermediate: '✅', ultimate: '✅' },
    { feature: 'Cancel Claim Panel (S)', free: '1', starter: '2', intermediate: '2', ultimate: '♾️' },
    { feature: 'Cancel Claim Panel Reminder (S)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Custom Reactions (S & T)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Max Slot Reservation Per (S)', free: '2', starter: '4', intermediate: '4', ultimate: '♾️' },
    { feature: 'Min Req Lines to Reg (S & T)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Fake Tags (S & T)', free: '❌', starter: '❌', intermediate: '❌', ultimate: '✅' },
    { feature: 'Duplicate Teamname (S & T)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Delete Extra Reg (S)', free: '❌', starter: '✅', intermediate: '✅', ultimate: '✅' },
    { feature: 'Deleted Rejected Reg (S & T)', free: '❌', starter: '✅', intermediate: '✅', ultimate: '✅' },
    { feature: 'Reg End Ping Role (S)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Channel Autoclean Time (S)', free: '❌', starter: '✅', intermediate: '✅', ultimate: '✅' },
    { feature: 'Reg Auto End Time (S)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Share IDP Customize (S)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Slotlist Start From (S & T)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
    { feature: 'Auto Send Slotlist Toggle (S)', free: '❌', starter: '✅', intermediate: '✅', ultimate: '✅' },
    { feature: 'Success DM Message (T)', free: '❌', starter: '❌', intermediate: '❌', ultimate: '✅' },
    { feature: 'Export Tourney To Excel (T)', free: '❌', starter: '❌', intermediate: '✅', ultimate: '✅' },
  ];
  return (

    <div className='bg-black text-white min-h-[100vh] w-full '>
      <Inner>
        <NavBar />
        <div className=' min-h-[80vh] w-full my-[5vh]'>
          <div className='lg:text-5xl text-3xl flex items-center justify-center gap-4'>
            <TfiCrown className='text-yellow-400' />
            <h1 className='uppercase font-extrabold tracking-wide'>Premium</h1>
          </div>
          <h1 className='uppercase font-extrabold text-center lg:text-3xl text-xl mt-3 px-6'>Take Your Server To The Next Level!</h1>

          <table className='w-[70%] border-collapse mt-[5vh] mx-auto '>
          <thead>
            <tr className='text-[#06F5B6] font-extrabold lg:text-base text-[2.5vw]'>
              <th className='border p-2'>Feature</th>
              <th className='border p-2'>FREE</th>
              <th className='border p-2'>STARTER</th>
              <th className='border p-2'>INTERMEDIATE</th>
              <th className='border p-2'>ULTIMATE</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <motion.tr
                initial={{opacity : 0, y : 20}}
                animate={{opacity : 1, y : 0}}
                transition={{duration : 0.5, ease : "easeIn", delay : 0.15*index}}
                key={index}>
                <td className='border p-2  font-bold lg:text-base text-[3vw]'>{plan.feature}</td>
                <td className='border p-2 text-center'>{plan.free}</td>
                <td className='border p-2 text-center'>{plan.starter}</td>
                <td className='border p-2 text-center'>{plan.intermediate}</td>
                <td className='border p-2 text-center'>{plan.ultimate}</td>
              </motion.tr>
            ))}
          </tbody>
          <tr className='text-[#06F5B6] font-extrabold lg:text-base text-[3.5vw]'>
              <th className='border p-2'>Price / Month</th>
              <th className='border p-2'>-</th>
              <th className='border p-2'>₹99</th>
              <th className='border p-2'>₹139</th>
              <th className='border p-2'>₹159</th>
            </tr>
        </table>
        </div>
        <div className='lg:ml-[75%] ml-[35%] mt-6 lg:mt-10 h-[10vh] '>
             <BorderButton bigger={true}><a href="#" target='_blank'>Premium</a></BorderButton>
             </div>
        <div className="w-full h-[2px] bg-[#06F5B6] mt-4"></div>
        <Footer/>
      </Inner>
    </div>
  )
}

export default Premium