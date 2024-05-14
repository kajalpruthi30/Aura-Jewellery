import React from 'react'
import { Link } from 'react-router-dom';

function SaleHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex flex-start gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>

      <div>
        <p className='uppercase py-1.5'>Categories</p>
        <hr className='mb-3 w-full'/>

        <div className='flex flex-start w-[50vw] gap-[25rem]'>
        <div>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Sale</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Best Sellers</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Earrings</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Necklaces</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Wristwear</p></Link>
       </div>

       <div>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Sale</p></Link>
            <Link to ="/collections"><p className='py-1  hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Best Sellers</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Earrings</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Necklaces</p></Link>
            <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sale Wristwear</p></Link>
       </div>
     </div>

     </div>

     <div className='w-[25vw]'>
        <p className='uppercase py-1.5'>shop all offers</p>
        <hr className='mb-3 w-full'/>
        <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>2 for $25 Gifting</p></Link>
        <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>3 for $30 Sterling Silver Essentials</p></Link>
        <Link to ="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>2 for $25 on Selected Necklaces</p></Link>
     </div>
    </div>
  )
}

export default SaleHover
