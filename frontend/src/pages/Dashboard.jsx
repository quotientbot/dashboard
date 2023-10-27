import React from "react";
import Sidebar from "../components/Core/Sidebar";
import Navbar from "../components/Core/Navbar";

const Dashboard = () => {
    return (
        <div className="">
            <Navbar/>
            <div className="flex gap-2">
                <Sidebar/>
                <div>
                    Main Content of dashboard
                </div>
            </div>
        </div>
    )
}

export default Dashboard;