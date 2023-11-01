import React, { useEffect, useState } from "react";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router-dom";

const ServerInfo = () => {
    return (
    <div className="flex gap-3">
        <Sidebar/>
        <Outlet/>
    </div>
)}

export default ServerInfo;