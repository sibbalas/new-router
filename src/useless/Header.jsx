import React from 'react'
import './App.css'
import './index.css'
const Header=()=>{
  return(
    <div className="h-20 w-full bg-blue-600 absolute">
    <div className="flex items-center  h-full px-4">
      <div className="text-white text-3xl font-bold">FOODO</div>
      <div className="flex-grow flex justify-center space-x-8">
  <div className="text-[white] text-[20px]  hover:bg-black hover:rounded-2xl hover:pl-[20px] hover:h-[40px] hover:pt-[3px] hover:w-[100px]">Home</div>
  <div className="text-[white] text-[20px]  hover:bg-black hover:rounded-2xl hover:pl-[20px] hover:h-[40px] hover:pt-[3px] hover:w-[100px]">about</div>
  <div className="text-[white] text-[20px]  hover:bg-black hover:rounded-2xl hover:pl-[20px] hover:h-[40px] hover:pt-[3px] hover:w-[100px]">Donate</div>
  <div className="text-[white] text-[20px]  hover:bg-black hover:rounded-2xl hover:pl-[20px] hover:h-[40px] hover:pt-[3px] hover:w-[100px]">Contact</div>
</div>
</div>
</div>
  );
}
export default Header



