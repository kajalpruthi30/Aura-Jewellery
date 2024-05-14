import React from 'react';
import { Link } from 'react-router-dom';

function GiftsHover({ setShowComponent }) {
  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex flex-start gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
      <div>
        <p className='uppercase py-1.5'>Categories</p>
        <hr className='mb-3 w-full'/>
        <div className='flex flex-start w-[40vw] gap-[20rem]'>
          <div>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Gifts</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Gift Guide</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Sets</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Premium Gifts</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Best Sellers</p>
            </Link>
          </div>

          <div>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Initials</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Cubic Zirconia</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Kids Gifts</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>E-Gift Card</p>
            </Link>
            <Link to="/collections">
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Gift Card</p>
            </Link>
          </div>
        </div> 
      </div>

      <div className='w-[20vw]'>
        <p className='uppercase py-1.5'>shop by price</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections">
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>$15 & Under</p>
        </Link>
        <Link to="/collections">
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>$25 & Under</p>
        </Link>
        <Link to="/collections">
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>$40 & Under</p>
        </Link>
      </div>

      <div className='w-[20vw]'>
        <p className='uppercase py-1.5'>shop by persona</p>
        <hr className='mb-3 w-full'/>
        <Link to="/collections">
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>For The Minimalist</p>
        </Link>
        <Link to="/collections">
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>For The Glamorous</p>
        </Link>
        <Link to="/collections">
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>For The Romantic</p>
        </Link>
      </div>
    </div>
  );
}

export default GiftsHover;
