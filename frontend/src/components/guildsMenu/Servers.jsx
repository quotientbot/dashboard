import React from "react";
import { useDispatch , useSelector } from "react-redux";
import {guildsFetchFailure , guildsFetchStart,guildsFetchSuccess} from "../../state/actions/guildsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Servers = () => {
    const dispatch = useDispatch();
    const guilds = useSelector((state) => state.guilds.guilds);
    
    useEffect(()=>{
        const token = localStorage.getItem("QTOKEN");
        const servers = async (token) => {
            dispatch(guildsFetchStart());
            try{
              const response = await fetch("http://localhost:8000/users/@me/guilds", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "token": token,
                },
              });
              const data = await response.json();
              if(response.ok){
                dispatch(guildsFetchSuccess(
                   data
                ));
              }else{
                dispatch(guildsFetchFailure());
              }
        
            }catch(err){
              dispatch(guildsFetchFailure(err));
            }
          }      
        servers(token);
        // console.log(guilds);
      // eslint-disable-next-line
    },[])


    return (
        <div className="mt-10 bg-[#161616] p-5 rounded-lg">
            <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">Servers</span>
                <span className="text-xl">Server's you're in ( {guilds !== null ? guilds.length : 0} servers )</span>
            </div>
            <div>
                {
                    guilds !== null && guilds.map((item) => (
                        <Link key={item.id} className="flex flex-col inline items-center" to={`/dashboard/${item.id}`}>
                          <img src={item.icon} alt="ServerIcon" className="w-[200px] h-[200px]"/>
                          <div className="text-xl">{item.name}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Servers;