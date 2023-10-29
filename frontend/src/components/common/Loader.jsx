import React from 'react'
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <Bars
      color="#4fa94d"
      width="260"
      height='110'
      visible={true}
      ariaLabel='falling-lines-loading'
      />
    </div>
  )
}

export default Loader