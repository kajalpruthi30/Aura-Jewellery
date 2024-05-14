import React from 'react';
import { Link } from 'react-router-dom'; 

function NewHover({ setShowComponent }) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex flex-start gap-[4rem] py-[2.5rem] px-[10rem] text-[14px] overflow-x-hidden' onMouseLeave={() => setShowComponent(null)}>

      <div className='w-[40vw]'>

        <p className='uppercase py-1.5'>featured</p>
        <hr className='mb-3 w-full'/>
          
        <div className='flex flex-start gap-[10rem]'> 
          <div>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Best Sellers</p></Link>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Pastel Jewellery & Accessories</p></Link>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Taylor Swift Eras Tour Edit</p></Link>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Ribbons & Hair Bows</p></Link>
          </div>

          <div>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Crosses</p></Link>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Tennis Bracelets & Necklaces</p></Link>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Ring Stacking</p></Link>
              <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Necklace Stacking</p></Link>
          </div>
        </div> 

      </div>

      <div className='flex flex-center gap-[4rem]'>

        <div className='w-[15vw]'>
          <p className='uppercase py-1.5'>Categories</p>
          <hr className='mb-3 w-full'/>
          <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All New</p></Link>
          <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Earrings</p></Link>
          <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Necklaces</p></Link>
          <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Rings</p></Link>
          <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Bracelets</p></Link>
          <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Accessories</p></Link>
      </div>

      <div className='w-[15vw]'>
        <p className='uppercase py-1.5'>occasion</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Festival Edit</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Wedding</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Everyday Essentials</p></Link>
        <Link to="/collections"><p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Night Out</p></Link>
      </div>

      </div>
    </div>
  );
}

export default NewHover;
