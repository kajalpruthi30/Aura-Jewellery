import React from 'react'
import { Link } from 'react-router-dom';

function PiercingHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className = 'py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
      <p className='uppercase py-1.5'>In-store piercing</p>
      <hr className='mb-3 w-full'/>

      <Link to ="/piercing/studio-services"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Studio Services</p></Link>
      <Link to ="/piercing/after-care"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Aftercare</p></Link>
      <Link to ="/piercing/faq"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing FAQ</p></Link>
      <Link to ="/piercing/edit"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Edit</p></Link>
      <Link to ="/piercing/gift-card"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Gift Card</p></Link>
    </div>
  )
}

export default PiercingHover
