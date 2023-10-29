import React from "react";
import { useDispatch , useSelector } from "react-redux";
import {guildsFetchFailure , guildsFetchStart,guildsFetchSuccess} from "../../state/actions/guildsSlice";
import { useEffect } from "react";

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
    },[])
    return (
        <div className="mt-10 bg-[#161616] p-5 rounded-lg">
            <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">Servers</span>
                <span className="text-xl">Server's you're in ( {guilds.length} servers )</span>
            </div>
            <div>
                {
                    guilds.map((item) => (
                        <div key={item.id} className="flex flex-col inline items-center">
                            <img src={`https://cdn.discordapp.com/icons/${item.id}/${item.icon}.png `} alt="ServerIcon" className="w-[200px] h-[200px]"/>
                            <div className="text-xl">{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Servers;