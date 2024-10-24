import React from 'react'
import './App.css'
import './index.css'
const Middle=()=>{
  return(
<div className="bg-blue-600 w-full h-[500px] p-5">
        <div className="p-[150px]">
          <div className="text-white font-bold text-5xl">DOOR</div>
          <div className="text-green-500 underline font-bold text-5xl">PICK UP</div>
          <div className="text-white text-2xl font-bold">
            "Your donation will be immediately<br />collected and sent to needy people"
          </div>
          <div className="font-bold text-white">
            <button 
              className="border-3 w-[200px] h-[50px] rounded-2xl border-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
              aria-label="Donate Now"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
  );
}
export default Middle