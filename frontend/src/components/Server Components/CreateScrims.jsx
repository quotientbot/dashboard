import React, { useEffect, useState } from "react";
import {BsQuestionOctagon} from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CreateScrims = () => {
    const [Channel , setChannel] = useState([]);
    const [role , setRole] = useState([]);
    const token = localStorage.getItem("QTOKEN");
    const [hidden,setHidden] = useState(false);
    const {Id} = useParams();

  
    useEffect(()=>{
      const getChannel = async (token) => {
        try{
          const response = await fetch(`http://localhost:8000/guilds/${Id}/channels`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
          });
          const data = await response.json();
          if(response.ok){
            setChannel(data);
          }
        }catch(err){
          console.log({Message: err});
        }
    }
    const getRole = async (token) => {
      try{
        const response = await fetch(`http://localhost:8000/guilds/${Id}/roles`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": token,
          },
        });
        const data = await response.json();
        if(response.ok){
          setRole(data);
        }
      }catch(err){
        console.log({Message: err});
      }
    }
    getRole(token);
    getChannel(token);
    },[])

    const [formData, setFormData] = useState({
      RegisterChannel: "",
      SlotlistChannel: "",
      SuccessRole: "",
      RequiredMentions: 0,
      TotalSlots: 1,
      OpenTime: "",
    });

    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log("Form data submitted:", formData);

      // You can perform further actions, such as sending the data to an API.

      setFormData({
        RegisterChannel: "",
        SlotlistChannel: "",
        SuccessRole: "",
        RequiredMentions: 0,
        TotalSlots: 1,
        OpenTime: "",
      });
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: name === "RequiredMentions" ? parseInt(value) : value,
      });
    };


    return(
        <div className="space-y-5">
            <div className="flex gap-4">
                <Link className="py-2 px-4 border-2 rounded-lg" onClick={() => setHidden(!hidden)}>Create New Scrim</Link>
                <Link className="py-2 px-4 border-2 rounded-lg">Delete All Scrims</Link>
            </div>
            <form onSubmit={handleFormSubmit} className={`${hidden ? "":"hidden"} space-y-5`}>
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-2 flex-col md:w-1/2 lg:w-1/3">
                    <label htmlFor="Register_Channel" className="flex gap-4 items-center text-2xl">
                      <span>Register Channel</span>
                      <BsQuestionOctagon />
                    </label>
                    <select id="RegisterChannel" name="RegisterChannel" className="bg-black p-2 border-2 rounded-lg" placeholder="Select..." onChange={handleInputChange} value={formData.RegisterChannel}>
                      <option value="" disabled selected hidden>Select...</option>
                      {
                        Channel != null && Channel.map((item) => (
                          <option key={item.id}>
                            {item.name}
                          </option>
                        ))
                      }
                    </select>
                </div>
                <div className="flex gap-2 flex-col md:w-1/2 lg:w-1/3">
                    <label htmlFor="SlotlistChannel" className="flex gap-4 items-center text-2xl">
                      <span>Slotlist Channel</span>
                      <BsQuestionOctagon />
                    </label>
                    <select id="SlotlistChannel" name="SlotlistChannel" className="bg-black p-2 border-2 rounded-lg" placeholder="Select..." onChange={handleInputChange} value={formData.SlotlistChannel}>
                      <option value="" disabled selected hidden>Select...</option>
                      {
                        Channel != null && Channel.map((item) => (
                          <option key={item.id}>
                            {item.name}
                          </option>
                        ))
                      }
                    </select>
                </div>

                <div className="flex gap-2 flex-col md:w-1/2 lg:w-1/3">
                    <label htmlFor="SuccessRole" className="flex gap-4 items-center text-2xl">
                      <span>Success Role</span>
                      <BsQuestionOctagon />
                    </label>
                    <select id="SuccessRole" name="SuccessRole" className="bg-black p-2 border-2 rounded-lg" placeholder="Select..." onChange={handleInputChange} value={formData.SuccessRole}>
                      <option value="" disabled selected hidden>Select...</option>
                      {
                        role != null && role.map((item)=>(
                          <option key={item.id}>
                            {item.name}
                          </option>
                        ))
                      }
                    </select>
                </div>

                <div className="flex gap-2 flex-col md:w-1/2 lg:w-1/3">
                  <label for="" className="flex gap-4 items-center text-2xl">
                    <span>Required Mentions</span>
                    <BsQuestionOctagon />
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      id="RequiredMentions"
                      name="RequiredMentions"
                      className="bg-black p-2 border-2 rounded-lg"
                      placeholder="Select..."
                      min="0"
                      max="9"
                      onChange={handleInputChange}
                      value={formData.RequiredMentions}
                      />
                  </div>
                </div>

                <div className="flex gap-2 flex-col md:w-1/2 lg:w-1/3">
                  <label for="Total_Slots" className="flex gap-4 items-center text-2xl">
                    <span>Total Slots</span>
                    <BsQuestionOctagon />
                  </label>
                  <input
                    type="number"
                    id="TotalSlots"
                    name="TotalSlots"
                    className="bg-black p-2 border-2 rounded-lg"
                    placeholder="Select..."
                    min="1"
                    max="26"
                    onChange={handleInputChange}
                    value={formData.TotalSlots}
                    />
                </div>

                <div className="flex gap-2 flex-col md:w-1/2 lg:w-1/3">
                  <label for="Open_Time" className="flex gap-4 items-center text-2xl">
                    <span>Open Time</span>
                    <BsQuestionOctagon />
                  </label>
                  <input
                    type="time"
                    id="OpenTime"
                    name="OpenTime"
                    className="bg-black p-2 border-2 rounded-lg"
                    placeholder="Select a time"
                    onChange={handleInputChange}
                    value={formData.OpenTime}
                    />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 border-2 inline-block rounded-lg">
                  <button type="submit" className="transform transition-transform hover:scale-105 rounded-lg text-xl">Submit</button>
                </div>
                <div className="p-3 border-2 inline-block rounded-lg">
                  <button className="transform transition-transform hover:scale-105 rounded-lg text-xl" onClick={() => setHidden(!hidden)}>Cancel</button>
                </div>
              </div>
            </form>
        </div>
    )
}

export default CreateScrims;