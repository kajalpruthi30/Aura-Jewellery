import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { BsHeart } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../../assets/images/home/AuraLogo.png"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

import NewHover from '../../NavHover/NewHover';
import AccessoriesHover from "../../NavHover/AccessoriesHover";
import GiftsHover from '../../NavHover/GiftsHover';
import PiercingHover from '../../NavHover/PiercingHover';
import SaleHover from '../../NavHover/SaleHover';
import JewelleryHover from '../../NavHover/JewelleryHover';

import Cart from "../../../components/Home/Cart";
import Search from "../../../components/Home/Search"


import { useAuthContext } from '../../../context/AuthContext';



function Header() {

  const [showComponent, setShowComponent] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const underLineCSS = {
    textUnderlineOffset: '4px',
    letterSpacing: '2px'
  }

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  }

  const resetHover = () => {
    setShowComponent(null);
  }

  const{authUser} = useAuthContext();

  return (
    <>
      {/* 1. Announcement Bar */}
      <div className={`bg-black text-[0.75rem] text-white text-center py-3 tracking-widest ${showSearch ? 'hidden': ''}`}>
        <p>Travel in Style! Shop 30% Off All Jewellery Boxes & Cases. ❤️| <Link to = "/collections"><span className='underline cursor-pointer'>SHOP NOW</span></Link></p>
      </div>

      {/* 2. Components/Pages */}
      <div className='text-[12px] sticky top-0 z-10' onClick={() => setShowComponent(null)}>
        <div className='top-0 bg-white'>
          <div className='flex items-center align-center justify-between px-[5.5rem] py-[1.5rem] mb-4 uppercase text-[#111111]'>
            <div className='flex flex-start gap-[2.5rem]'>

            <div className='flex gap-1.5 items-center cursor-pointer ' onClick={handleSearchToggle}>
                {!showSearch ? <SearchRoundedIcon /> : <CloseIcon />}
                  <p style={underLineCSS}>search</p>
            </div>

              <Link to="/find-store">
                <div className='flex gap-2 items-center cursor-pointer'>
                  <IoLocationOutline className='h-[1.5rem] w-[1.25rem]' />
                  <p style={underLineCSS}>find a store</p>
                </div>
              </Link>

             {!authUser && (<Link to="/login">
                <div className='flex gap-2 items-center cursor-pointer'>
                  <LuUser className='h-[1.75rem] w-[1.25rem]' />
                  <p style={underLineCSS}>Log in</p>
                </div>
              </Link>)}

            </div>

            <Link to="/">
              <div>
                <img src={Logo} alt='Aura Logo' />
              </div>
            </Link>

            <div className='flex flex-start items-center gap-[2.5rem]'>

              <Link to='/wishlist'>
                <div className='flex gap-0.5 items-center cursor-pointer'>
                  <BsHeart className='w-[1.75rem] h-[1rem]' />
                  <p style={underLineCSS}>wishlist : 0</p>
                </div>
              </Link>

              <div className='flex gap-2 items-center cursor-pointer relative' onClick={() => setShowCart(!showCart)}>
                <IoBagHandleOutline className=' h-[1.75rem] w-[1.5rem]' />
                <p>cart: 0</p>
              </div>
            </div>
          </div>

          {/* 3. Navigation Menu */}

          <div className='uppercase flex justify-center gap-[4rem] text-[#333333]' onMouseLeave={resetHover}>

            <div onMouseEnter={() => setShowComponent('new')}>
              <Link to='/collections'>
                <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>new</p>
              </Link>
            </div>

            <div onMouseEnter={() => setShowComponent('jewellery')}>
              <Link to='/collections'>
                <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>jewellery</p>
              </Link>
            </div>

            <div onMouseEnter={() => setShowComponent('accessories')}>
              <Link to='/collections'>
                <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>accessories</p>
              </Link>
            </div>

            <div onMouseEnter={() => setShowComponent('gifts')}>
              <Link to='/gifts'>
                <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>gifts</p>
              </Link>
            </div>

            <div onMouseEnter={() => setShowComponent('piercing')}>
              <Link to='/piercing'>
                <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>piercing</p>
              </Link>
            </div>

            <div onMouseEnter={() => setShowComponent('sale')}>
              <Link to='/collections'>
                <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>sale</p>
              </Link>
            </div>

          </div>
        </div>


        <div className='absolute z-10 bg-white w-[100%]'
         style={{ boxShadow: "0px 3px 2px -2px rgba(0, 0, 0, 0.2)" }}
         onMouseOver={() => setShowComponent(showComponent)}>
          {showComponent === 'new' && <NewHover setShowComponent={setShowComponent} />}
          {showComponent === 'jewellery' && <JewelleryHover setShowComponent={setShowComponent} />}
          {showComponent === 'accessories' && <AccessoriesHover setShowComponent={setShowComponent} />}
          {showComponent === 'gifts' && <GiftsHover setShowComponent={setShowComponent} />}
          {showComponent === 'piercing' && <PiercingHover setShowComponent={setShowComponent} />}
          {showComponent === 'sale' && <SaleHover setShowComponent={setShowComponent} />}
        </div>


        
        {/* 5. Handling Cart Opening */}
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}

        {/* 6. Handling Search Opening */}
        {showSearch && <Search showSearch={showSearch} setShowSearch={setShowSearch}/>}

      </div>
    </>
  )
}

export default Header