import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";


function Footer  () {
  return (
    <footer className="bg-black text-white py-[4rem] px-[3rem] mb-7">
      <div className="container">

        <div className="flex flex-start gap-[5rem]">
          {/* Section 1 */}
          <div className='w-[25vw] mr-[4rem]'>

            <h2 className="text-[14px] my-3" style={{letterSpacing: '1px'}}>JOIN OUR WORLD</h2>
            <p className='text-[12px] tracking-wider'>Enter your email below to be the first to know about new collections and product launches.</p>
            <div className="mt-2 flex gap-1 flex-start">
              <input type="email" className="px-2 py-2 w-[400vw] h-[5vh]  bg-transparent focus:outline-none focus:border-black-400 text-gray-500 font-light border border-t-black border-l-black border-r-black border-b-white-200 placeholder-[#89817C] text-[14px]" placeholder="Your email address"/>
              <button type='submit' className=" text-white rounded border px-1 border-white-500 text-[12px]">SUBSCRIBE</button>
            </div>

            <div className="flex flex-start gap-5 my-8 items-center justify-start">
              <h3 className="text-[14px] ">Get social with us</h3>
              <a href='https://www.instagram.com/lovisajewellery/ '><FaInstagram size={18} /></a>
              <a href='https://www.facebook.com/lovisajewellery/?ref=br_rs '><FaFacebook size={18} /> </a>
              <a href='https://in.pinterest.com/lovisaofficial/ '><FaPinterest size={18} /></a>
            </div>

            <Link to="/footer/style"><div className='tracking-tight text-[#b19037] cursor-pointer hover:underline hover:border-[#ffff] w-[18vw] text-[16px]'>Check out the #STYLECHANNEL</div></Link>

            <div className='flex flex-start pt-[4rem] gap-3 w-[40vw] text-[#ffff]'>
            <Link to="/footer/terms"><div className='text-[12px]  hover:underline'>Terms & conditions</div></Link>
            <Link to="/footer/privacy"><div className='text-[12px]  hover:underline'>Security & Privacy</div></Link>
            <Link to="/footer/terms"><div className='text-[12px]  hover:underline'> © 2024 Lovisa</div></Link>
            </div>
          </div>

          {/* Section 2 */}
          <div className='w-[12vw] mx-2'>
            <h2 className="text-[15px] my-3 uppercase" style={{letterSpacing: '1px'}}>About us</h2>
            <div className='flex flex-col gap-3 text-[11px]'>
            <Link to='/footer/company'><div className='hover:underline hover:bg-blue text-white"' >The Company</div></Link>
            <Link to="/footer/investor"><div className='hover:underline hover:bg-blue text-white'>Investor Centre</div></Link>
            <Link to="/footer/careers"><div className='hover:underline hover:bg-blue text-white'>Careers</div></Link>
            </div>
          </div>

          {/* Section 3 */}
          <div className='w-[15vw] mx-2'>
          <h2 className="text-[15px] my-3" style={{letterSpacing: '1px'}}>NEED HELP</h2>
          <div className='flex flex-col gap-3 text-[11px]'>
            <Link to="/footer/contact"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Contact Us</div></Link>
            <Link to="/footer/help"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Help Centre</div></Link>
            <Link to="/delivery-payments/shipping"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Shipping & Delivery</div></Link>
            <Link to="/delivery-payments/exchange-return"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Returns & Exchanges</div></Link>
            <Link to="/login"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>My Account</div></Link>
            </div>
          </div>

          {/* Section 4 */}
          <div className='w-[15vw] mx-2'>
            <h2 className="text-[15px] my-3" style={{letterSpacing: '1px'}}>DISCOVER</h2>
            <div className='flex flex-col gap-3 text-[11px]'>
            <Link to="/find-store"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Store Locator</div></Link>
            <Link to="/piercing"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Ear Piercing</div></Link>
           <Link to ="/footer/guide"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Care & Size Guide</div></Link>
            <Link to="/piercing/gift-card"><div className='text-[12px]  hover:underline hover:bg-blue text-white'>Gift Card</div></Link>
            </div>
          </div>

          {/* Section 5 */}
          <div className='w-[15vw] h-[20vh] flex items-center'>
          <Link to="/piercing/gift-card"><div className='text-[12px] hover:underline hover:bg-blue text-white'><p>Piercing Gift Card</p></div></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;