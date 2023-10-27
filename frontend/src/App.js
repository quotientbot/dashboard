import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { userRequestStart, userRequestSuccess, userRequestFailure } from "./state/actions/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


function App() {

  const {token} = useSelector((state) => state.user);
  const [isToken, setIsToken] = useState(token);
  const dispatch = useDispatch();

  const getUser = async (token) => {
    dispatch(userRequestStart());

    try{
      const response = await fetch("http://localhost:8000/users/@me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": token,
        },
      });
      const data = await response.json();
      if(response.ok){
        dispatch(userRequestSuccess(
           data
        ));
      }else{
        dispatch(userRequestFailure());
      }

    }catch(err){
      dispatch(userRequestFailure(err));
    }
  }

  useEffect(() => {
    if(isToken !== null){
      getUser(token);
    }
  }, [token]);
  
  return (

      <div className="bg-[#1B1B1B] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
  );
}

export default App;
