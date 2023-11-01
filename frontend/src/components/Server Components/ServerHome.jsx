import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const ServerHome = () => {
    const token = localStorage.getItem("QTOKEN");
    const {Id} = useParams();
    const [logs,setLogs] = useState([]);
    const [serverInfo , setServerInfo] = useState(null);
    
    useEffect(() => {

        const getServerInfo = async (token) => {
            try{
                const response = await fetch(`http://localhost:8000/guilds/${Id}`, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "token": token,
                  },
                });
                const data = await response.json();
                if(response.ok){
                  setServerInfo(data);
                }
              }catch(err){
                console.log({Message: err});
              }
        }

        const getLogs = async (token) => {
            try{
              const response = await fetch(`http://localhost:8000/guilds/${Id}/logs`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "token": token,
                },
              });
              const data = await response.json();
              if(response.ok){
                setLogs(data);
              }
            }catch(err){
              console.log({Message: err});
            }
        }

        getServerInfo(token);
        getLogs(token);

    },[])

    // console.log({
    //     logs,
    //     serverInfo
    // })
    return (
        <div className="mt-5 w-full space-y-5 mx-5">
            <div className="flex gap-5 items-center">
                <div className="text-3xl font-bold">Quotient HQ</div>
                <Link className="py-2  px-4 border-2 rounded-lg">Update To Premium</Link>
            </div>
            <div className="flex gap-3">
                <div className="w-1/2 bg-[#222222] p-3 flex flex-col gap-3 rounded-lg">
                    <div className="text-2xl">Overview</div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <span>Scrims</span>
                            <span>3/3</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>Tourneys</span>
                            <span>1/1</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>Slot Managers</span>
                            <span>1/1</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#222222] p-3 flex flex-col gap-3 rounded-lg">
                    <div className="text-2xl">Misc</div>
                    <div className="flex justify-between">
                        <div>
                            <span>Prefix</span>
                        </div>
                        <div>
                            Custom Footer
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#222222] p-3 flex flex-col gap-3 rounded-lg">
                <div>Logs</div>
                <div className="overflow-y-auto space-y-3 p-3" style={{ maxHeight: "600px" }}>
                    {
                        logs !== null &&
                        logs.map((log, index) => {
                          const logTimestamp = new Date(log.created_at);
                          const currentTime = new Date();
                          const timeDifference = currentTime - logTimestamp;
                        
                          const secondsDifference = Math.floor(timeDifference / 1000);
                          let timeAgo;
                        
                          if (secondsDifference < 60) {
                            timeAgo = `${secondsDifference} second${secondsDifference !== 1 ? 's' : ''} ago`;
                          } else if (secondsDifference < 3600) {
                            const minutes = Math.floor(secondsDifference / 60);
                            timeAgo = `${minutes} minute ${minutes !== 1 ? 's' : ''} ago`;
                          } else if (secondsDifference < 86400) {
                            const hours = Math.floor(secondsDifference / 3600);
                            timeAgo = `${hours} hour ${hours !== 1 ? 's' : ''} ago`;
                          } else {
                            const days = Math.floor(secondsDifference / 86400);
                            timeAgo = `${days} day ${days !== 1 ? 's' : ''} ago`;
                          }
                        
                          return (
                            <div key={log.id} className="flex justify-between p-2">
                              <span>{index + 1}</span>
                              <span>{log.username}</span>
                              <span>{timeAgo}</span>
                              <span>{log.action_msg}</span>
                            </div>
                          );
                        })  
                    }
                </div>
            </div>
        </div>
    )
}

export default ServerHome;