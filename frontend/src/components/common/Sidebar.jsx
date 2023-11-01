import React from "react";
import logo from "../../assets/favicon.png";
import { Link, useParams } from "react-router-dom";
import { AiOutlineRight , AiOutlineMessage , AiTwotoneHome } from "react-icons/ai";
import { CgGames } from "react-icons/cg"

const Sidebar = () => {
    const { Id } = useParams();
    // console.log(Id);
    return (
        <div>
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <Link className="flex gap-2 items-center">
                    <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
                    <div className="flex gap-2 items-center"> <span> Quotient HQ </span> < AiOutlineRight /> </div>
                </Link>
                <div className="flex flex-col gap-5 mt-6">
                    <div className="space-y-3">
                        <div>Generals</div>
                        <Link to={`/dashboard/${Id}`} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                            <AiTwotoneHome/>
                            <span className="mx-4 font-medium">Home</span>    
                        </Link>
                        <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                            <AiOutlineMessage/>
                            <span className="mx-4 font-medium">Embed</span>    
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <div>Esports</div>
                        <Link to={`/dashboard/${Id}/scrims`} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                            <CgGames/>
                            <span className="mx-4 font-medium">Scrims</span>    
                        </Link>
                        <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                            <AiOutlineMessage/>
                            <span className="mx-4 font-medium">Tournament</span>    
                        </Link>
                        <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                            <AiOutlineMessage/>
                            <span className="mx-4 font-medium">Slot Manager</span>    
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}
export default Sidebar;
