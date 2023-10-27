import React from 'react'
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <FallingLines
      color="#4fa94d"
      width="250"
      height='100'
      visible={true}
      ariaLabel='falling-lines-loading'
      />
    </div>
  )
}

export default Loader