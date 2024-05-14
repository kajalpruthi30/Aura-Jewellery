import React from 'react'
import Cartilage from "../../../assets/images/home/bg-3.jpg";
import { Link } from 'react-router-dom';


function CartilagePiercings() {
  return (
    <>
      <div className='relative bg-gray-100 h-[73vh] mx-20 my-9'>
        <img className="absolute top-0 left-0 h-full w-1/2 object-cover cursor-pointer" src={Cartilage} alt="cartilage"/>
        <div className="absolute top-0 right-0 h-full w-1/2 flex flex-col  items-center justify-center">
          <div className='w-[20vw] flex flex-col items-center justify-center gap-1'>
            <div className="text-center">
              <span className="text-3xl leading-10">CARTILAGE PIERCINGS</span>
            </div>
            <div className="text-center text-sm">
              <span>Customise your earscape with premium, everyday piercing essentials..</span>
            </div>
            <Link to = "/collections">
            <button className="bg-black text-white w-[9vw] h-[30px] mt-1 py-2 px-4 rounded flex items-center justify-center text-[12px] cursor-pointer">
              SHOP NOW
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartilagePiercings