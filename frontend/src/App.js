import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Callback from "./components/Core/Callback"

function App() {
  function onToken({ token }) {
		localStorage.setItem("QTOKEN", token)
	}
  
  return (

      <div className="bg-[#1B1B1B] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login onToken={onToken}/>}/>
          <Route path="/auth/callback" element={<Callback/>}/>
        </Routes>
      </div>
  );
}

export default App;
