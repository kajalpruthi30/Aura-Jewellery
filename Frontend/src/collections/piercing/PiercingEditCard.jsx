import React from 'react'
import { useState } from 'react';


function PiercingCard({ image, heading }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='mainCard relative cursor-pointer w-[20vw] h-[46vh] mb-10' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <img src={image} alt='Shop by Piercing'/>

        {/* Overlay */}
        <div className='absolute top-0 w-[20vw] h-[46vh] bg-transparent flex flex-col gap-7 justify-center items-center overflow-hidden'>
        <h1 className={`uppercase text-2xl text-center ${hovered ? 'text-[#111111] translate-y-[-20px] transition-all duration-300' : 'text-white'}`}>{heading}</h1>
        <button className={`py-2 px-2 text-md leading-6 border border-gray-300 hover:bg-[#111111] hover:text-[#ffff] hover:border-[#111111] translate-y-[150px] ${hovered ? 'text-[#111111] translate-y-[-23px] transition-all duration-300' : 'text-white'}`}>SHOP</button>
        </div>
    </div>
  )
}

export default PiercingCard