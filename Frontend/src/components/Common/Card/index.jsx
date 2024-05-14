import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaRegHeart } from "react-icons/fa";


function Card({images}) {
  return (
    <>
    <div className='py-[2rem]' style={{fontWeight: '400'}}>
      <div className='relative'>
            <img src={images.url} className='w-[19vw] h-[38vh]'/>
            <p className="absolute top-[14px] text-black bg-red-300 text-centeralign-center px-4 uppercase text-sm tracking-wide">Sale</p>
            <FaRegHeart className="absolute top-[10px] right-[23px]"/>
        </div>
          
        <div className=''>
            <p className="text-[14px] py-[3px]">{images.heading}</p>
        
            <div className="flex flex-row items-center gap-[2rem] py-1">
                <div className='flex gap-2 items-center'>
                    <p className="text-red-500">{images.price}</p>
                    <del className="text-gray-400 text-[13px]">$ 25.00</del>
                </div>
                <div className="border border-red-500 text-[13px] px-1 ml-[25px] ">
                    <p className="text-red-500">80% off</p>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-[2px]">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
    
            <p className="ml-[3rem] italic text-gray-700 text-sm"> 4.7(7)</p>
        </div>

      </div>  
    </>
  )
}

export default Card
