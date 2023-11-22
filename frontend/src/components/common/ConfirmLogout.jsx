import React from "react";
import { Link } from "react-router-dom";
import {BsQuestionOctagon} from "react-icons/bs";
import { logout as Logout } from "../../state/actions/userSlice";
import { useDispatch } from "react-redux";

const ConfirmLogout = ({logout,setLogout}) => {
    const dispatch = useDispatch();

    return (
        <div className={`${logout ? "":"hidden"} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}>
            <div className="bg-[#222222] p-3 rounded-lg flex flex-col gap-5 w-1/3">
                <div>Confirm Logout</div>
                <div className="h-1 rounded-lg bg-white"/>
                <div className="flex gap-2 items-center"><span>Would you like to logout</span><BsQuestionOctagon/></div>
                <div className="flex gap-4">
                    <Link className="hover:scale-105 transition-transform border-2 p-2 rounded-lg" onClick={() => {localStorage.clear(); dispatch(Logout());}} to={"/"}>yes</Link>
                    <Link onClick={() => setLogout(!logout)} className="border-2 p-2 rounded-lg hover:scale-105 transition-transform">No</Link>
                </div>
            </div>
        </div>
    )
}

export default ConfirmLogout;