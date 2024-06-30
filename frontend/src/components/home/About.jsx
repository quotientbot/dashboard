import React from 'react'
import Heading from '../layouts/Heading'
import Text from '../layouts/Text'
import BorderButton from '../layouts/BorderButton'

const About = () => {
  return (

    <div className='lg:h-[100vh] h-[110vh] w-full border-y-2 border-[#06F5B6]'>

      <Heading>About Us</Heading>

      <div className='lg:mt-10 mt-3 lg:h-[65vh] h-[85vh] w-[80vw] ml-[10vw] text-justify lg:text-2xl'>

        <p className='lg:mb-7 mb-5 lg:leading-10'>Quotientbot.xyz represents <span className='text-[#06F5B6] font-bold'>Quotient</span>, a discord bot that helps Esports servers to manage and organize scrims, tournaments of different mobile/PC games. We dare say that Quotient is the first of its kind, open source, very powerful and multi functional discord bot. It is completely customizable and comes with close to no paywalls, Quotient was made with main aim to empower discord servers while maintaining the simplicity with about none paywalls and removing the need of a dozen of bots to do a simple work, well yes, we do have premium plans but that's for the heavy hosting bills we have to pay every month to provide best service to our
          <span className='text-[#06F5B6] font-bold'> 10 million+ users </span> and<span className='text-[#06F5B6] font-bold'> 8,000+ discord servers.</span>
        </p>

        <Text>
          We at Quotient HQ, aim to change the way people manage their Esports discord servers and your love helps us stay focused and right on the path.
        </Text>
        <Text>
          Do join our discord server and be the part of a beautiful community as we are.
        </Text>
        <span className='text-[#06F5B6] font-bold'><Text> - deadshot#7999, Team Quotient</Text></span>
      </div>

      <div className='lg:ml-[85%] ml-[30%] lg:mt-4'>
        <BorderButton><a href="#" target='_blank'>Join Us</a></BorderButton>
      </div>
    </div>
  )
}

export default About