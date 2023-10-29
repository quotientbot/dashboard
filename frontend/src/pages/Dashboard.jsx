import React from "react";
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa"
import  { BsServer } from  "react-icons/bs";

const Dashboard = () => {
    const avatar = localStorage.getItem("avatarUrl") ?? "https://cdn.discordapp.com/embed/avatars/2.png";
    const userInfo = useSelector((state) => state.user.currentUser);
    const location = useLocation().pathname.split('/')[2];
    
    return (
        <div className="">
            <Navbar/>
            <div className="w-9/12 mx-auto my-10">
                <div className="flex items-center gap-3">
                    <img src={avatar} alt="https://cdn.discordapp.com/embed/avatars/2.png" className="rounded-full w-[100px] h-[100px] border-3 border-blue-400"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-3xl">{userInfo.global_name}</span>
                        <span className="font-lightbold text-xl text-red-400">{userInfo.username}</span>
                    </div>
                </div>
                <div class="flex justify-center items-center my-10 text-3xl gap-2">
                    <Link class={`flex flex-col gap-2 items-center w-1/2 p-3 rounded-full transition-transform transform hover:translate-x-2  transition duration-300 ease-in-out text-blue-900 ${!location ? "bg-gray-900" : ""}`} to="/dashboard"><BsServer/> <span>Servers</span></Link>
                    <Link class={`flex flex-col gap-2 items-center w-1/2 p-3 rounded-full text-center transition-transform transform hover:translate-x-2 transition duration-300 ease-in-out text-orange-900 ${location ? "bg-gray-900" : ""}`} to="/dashboard/premium">
                      <FaCrown/>
                      <span class="transition-transform transform">Premium</span>
                    </Link>
                </div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;