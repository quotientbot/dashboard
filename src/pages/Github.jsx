import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Inner from '../components/layouts/Inner'
import Footer from '../components/home/Footer'
import Heading from '../components/layouts/Heading'
import {easeIn, motion} from "framer-motion"

const Github = () => {

  const [contributors, setContributors] = useState([]);
  // console.log(contributors)

  async function fetchData() {
    try {
      const response = await fetch("https://api.github.com/repos/quotientbot/Quotient-Bot/contributors")
      const response2 = await fetch("https://api.github.com/repos/quotientbot/dashboard/contributors")
      const jsonData = await response.json();
      const jsonData2 = await response2.json();
      // const combined = [...jsonData, ...jsonData2]
      setContributors(jsonData);
    }
    catch (error) {
      console.error('Error in fetching Contributors : ', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-[100vh] w-full">
      <Inner>
        <NavBar></NavBar>
        <div className='min-h-[85vh] w-full'>
          <div className='p-8 lg:text-2xl text-lg'>
            Quotient Bot is an open-source project developed by Quotient, dedicated to providing innovative and flexible solutions for managing gaming and tournament activities. As an open-source company, we believe in the power of collaboration and transparency. You can explore our code, contribute to our development, and stay updated with our latest features by visiting our GitHub repository. Join us in enhancing the gaming experience and be part of our growing community on GitHub!
          </div>
          <div className='mt-[-4vh]  text-[#06F5B6]'>
            <Heading>Our Contributors</Heading>
          </div>
          <div className='contributor-box min-h-[30vh] lg:w-[95%] w-[90%] mx-auto mt-4 flex flex-wrap justify-evenly gap-4  p-3 mb-[5vh]'>
            {
              contributors?.map((contributor,index) => (
                <motion.div 
                  initial={{opacity : 0 }}
                  animate={{ opacity : 1 }}
                  transition={{ ease : "easeIn", delay : index*0.05}}
                  key={contributor.id} 
                  className='h-[10vh] w-[10vh] bg-[#06F5B6] rounded-full flex items-center justify-center cursor-pointer group'>
                  <div className='h-[9.5vh] w-[9.5vh] bg-black rounded-full overflow-hidden'>
                    <img src={contributor.avatar_url
                    } alt="contributors-url" className='h-full w-full object-cover group-hover:scale-[1.2] duration-500' />
                  </div>
                </motion.div>
              ))
            }
          </div>

        </div>
        <Footer />
      </Inner>
    </div>
  )
}

export default Github