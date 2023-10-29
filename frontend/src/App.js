import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { userRequestStart, userRequestSuccess, userRequestFailure } from "./state/actions/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PrivateRoute from "./components/core/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Servers from "./components/guildsMenu/Servers";
import Premium from "./components/guildsMenu/Premium";


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

          if(data.avatar !== null){
            localStorage.setItem("avatarUrl", `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`)
          }
          else{
            localStorage.setItem("avatarUrl", "https://cdn.discordapp.com/embed/avatars/2.png")
          }
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
          <Route element={<PrivateRoute/>}>
            <Route element={<Dashboard/>}>
              <Route path="/dashboard/" element={<Servers/>}/>
              <Route path="/dashboard/premium" element={<Premium/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
