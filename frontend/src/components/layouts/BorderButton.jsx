import React from 'react'


const BorderButton = ({ bigger=false ,children }) => {
  return (
    <div className='realtive group'>

      <div className={` absolute text-2xl cursor-pointer text-center h-[6vh] ${bigger ? "lg:w-[15%] w-[45%]" : "lg:w-[10%] w-[40%]"}  p-4 rounded-md leading-4 border-2 border-[#06F5B6] z-10 group-hover:animate-pulse `}>
      {children}
      </div>
      <div className={` absolute h-[6vh] ${bigger ? "lg:w-[15%] w-[45%]" : "lg:w-[10%] w-[40%]"}  p-4 rounded-md leading-4 border-2 border-[#06F5B6]  bg-[#06F5B6] blur-xl group-hover:animate-pulse`}>
      </div>


    </div>
  )
}

export default BorderButton