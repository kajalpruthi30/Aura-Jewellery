import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function AccessoriesHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>Hair</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Hair Accessories</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Headbands</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Hair Clips</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Hair Claws</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Scrunchies</p></Link>
      </div>

      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>Beauty</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Beauty</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Face & Body Jewels</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Press On Nails & Nail Stickers</p></Link>
      </div>

      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>More</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Belts</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Brooches & Pins</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Boxes</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Scarves & Bandanas</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Kids Accessories</p></Link>
      </div>

      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>Occasion</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Festival Edit</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Night Out</p></Link>
      </div>
    </div>
  )
}

export default AccessoriesHover;
