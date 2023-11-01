import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import CreateScrims from "./CreateScrims";
const Scrims = () => {
    const [scrims,setScrims] = useState([]);
    const token = localStorage.getItem('QTOKEN');
    const Id = useParams();
    // console.log(Id);

    // useEffect(() => {
    //     const getScrims = async (token) => {
    //         try{
    //             const response = await fetch(`http://localhost:8000/scrims/${Id}`, {
    //               method: "GET",
    //               headers: {
    //                 "Content-Type": "application/json",
    //                 "token": token,
    //               },
    //             });
    //             const data = await response.json();
    //             if(response.ok){
    //               setScrims(data);
    //             }
    //           }catch(err){
    //             console.log({Message: err});
    //           }
    //     }
    //     getScrims(token);
    // },[])


    useEffect(() => {
        
    },[])

    // console.log(scrims);

    return (
        <div className="mt-5 space-y-5 w-full mx-5">
            <div className="space-y-4">
                <div className="text-5xl font-bold">
                    Quotient HQ
                </div>
            </div>
            <CreateScrims/>
            <div className="h-1 bg-white w-full rounded-lg"/>
            <div>
                <Cart/>
            </div>
        </div>
    )
}

export default Scrims;