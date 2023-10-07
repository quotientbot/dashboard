import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Error = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const code = location.search.split("=")[1];
    localStorage.setItem("code", code);
    
    

  return (
    <div>Error</div>
  )
}

export default Error