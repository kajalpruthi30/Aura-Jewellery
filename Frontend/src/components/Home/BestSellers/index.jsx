import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Bestseller from "../../../assets/images/home/bestseller-img.jpg";
import Deals from '../../../pages/DeliveryPayments/Deals';

function BestSellers() {

  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='relative bg-gray-100 h-[68vh] mx-20 mt-[15vh]'>
        <img className="absolute top-0 right-0 h-full w-1/2 object-cover cursor-pointer" src={Bestseller} alt="bestseller" />
        <div className="absolute top-0  h-full w-1/2 flex flex-col  items-center justify-center">
          <div className="text-center w-[20vw]">
            <div className="text-2xl leading-6 font-light" style={{ letterSpacing: '0px' }}>BEST SELLERS</div>
            <div className="mt-4 font-light text-sm">
              Discover our most loved styles! Get your hands on these bestselling accessories and jewellery staples.
            </div>
          </div>

          <Link to = "/collections">
            <button className="bg-black text-white w-[9vw] h-[30px] mt-6 py-2 px-4 rounded flex items-center justify-center text-[12px] cursor-pointer">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
      <div className=' mt-20 mx-20 text-2xl'>DELIVERY & PAYMENTS</div>

      <div className='w-[79vw] h-[30vh] mx-20 flex items-center gap-20 justify-start'>
        <div className='h-[15vh] w-[35vw] flex gap-3 justify-center items-center cursor-pointer'>
          <div class="rounded-full border border-[#000000]  bg-white p-2">
            <div className="rounded-full bg-white py-2 px-1">
              <img src={'https://www.lovisa.sg/cdn/shop/files/Shipping_160x.svg?v=1701248746'} alt='truck'/>
            </div>
          </div>
          <Link to = '/delivery-payments/shipping'><span className='text-[1rem] font-light border-b-[1px] border-[#000000] cursor-pointer'>SHIPS WITHIN 4-5 BUSINESS DAYS </span></Link>
        </div>

        <div className='h-[15vh] w-[35vw] border-l-[1px] border-[#000000] flex gap-3 justify-center items-center cursor-pointer'>
          <div class="rounded-full border border-[#000000] bg-white p-2">
            <div className="rounded-full bg-white px-1 py-1">
              <img src={'https://www.lovisa.sg/cdn/shop/files/Exchange_160x.svg?v=1701239300'} alt='exchange' className='w-5 h-5'/>
            </div>
          </div>
          <Link to = '/delivery-payments/exchange-return'><span className='text-[1rem] font-light border-b-[1px] border-[#000000] cursor-pointer'>EASY EXCHANGES & RETURNS </span></Link>
        </div> 

        <div className='h-[15vh] w-[25vw] border-l-[1px] border-[#000000] flex gap-3 justify-center items-center cursor-pointer'>
          <div class="rounded-full border border-[#000000] bg-white p-2">
            <div className="rounded-full bg-white px-1 p-1">
              <img src={'https://www.lovisa.sg/cdn/shop/files/SMS-Deals_160x.svg?v=1701238800'} alt='deals' className='w-5 h-5'/>
            </div>
          </div>

          <div>
            <button className='openModalBtn text-[1rem] font-light border-b-[1px] border-[#000000] cursor-pointer' 
            onClick={()=>{setShowModal(!showModal)}} >EXCLUSIVE DEALS </button>
         </div>
         
        </div>
       </div>

      {showModal && <Deals show={setShowModal}/>}
    </>
  )
}

export default BestSellers