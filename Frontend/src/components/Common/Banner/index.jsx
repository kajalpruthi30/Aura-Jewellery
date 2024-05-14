import React from 'react'
import { Link } from 'react-router-dom'

function TopBanner() {
  return (
    <>
    {/* Top banner */}
    <div className='top-banner h-[10vh] w-full bg-[#A1060E] flex justify-center items-center uppercase my-2'>
        <Link to="/collections" className=' text-[#F6A0A4] font-medium'>Mid-Season Sale Extended &nbsp;</Link>{' '} <span className='text-[#F6A0A4] text-3xl font-medium'> | &nbsp;</span>
        <Link to="/collections" className='font-bold uppercase tracking-wide text-[#ffff]' >All Sale Styles $5 & Under</Link>
      </div>
    </>
  )
}

export default TopBanner