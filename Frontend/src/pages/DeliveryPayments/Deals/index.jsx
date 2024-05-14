import React, { useState } from 'react';
import useTwilio from '../../../hooks/useTwilio';
import {useNavigate} from "react-router-dom"

const Deals = ({ show }) => {

  const [selectedCountry, setSelectedCountry] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState("✨ Discover Aura Jewelry & Accessories! ✨\n\n💎 Elevate your look with our stunning collection of jewelry and accessories. From timeless classics to trendy pieces, find your perfect style at Aura. 💍\n\n🎁 Explore our website today for the perfect gift or treat for yourself! Shop now at Aura.com. 🛍️");

  const{sendMessage} = useTwilio();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage({selectedCountry, phoneNumber, message})
  }


  return (
    <>
      {show && (
        // popup
        <div className='fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center z-50 box-border m-0 p-0'>

          {/* Overlay */}
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-gray-200 bg-opacity-60'onClick={() => show(false)}></div>

          <div className="bg-cover bg-center p-8 rounded-lg relative mt-[2rem] w-[48vw] box-border m-0" style={{ backgroundImage: "url(https://graphics.jst.ai/145868_327202461000PM_3.852481E-02_.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", zIndex: "1", width: "48vw", height: "79vh" }}>

            {/* Close Icon */}
            <div className="absolute top-[0.2rem] right-[0rem]">
              <button onClick={() => show(false)} className="text-white bg-gray-500 rounded-full w-6 h-6 flex items-center justify-center focus:outline-none">&times;</button>
            </div>


          <div className='flex justify-center items-center gap-5 flex-col absolute my-20 left-[23vw] w-[25vw] z-20'>


            {/* First Div */}
            <div className="title flex items-center box-border">
              <div className=''>
                <h1 className="text-6xl font-bold">FINAL STEP</h1>
                <p className='text-center text-3xl font-semibold'>LET'S TEXT!</p>
              </div>
            </div>


              <div className='text-lg tracking-wide'>
                <p>If you want the VIP treatment, opt-in</p>
                <p>to SMS and you’ll get our most</p>
                <p>exciting updates straight to your</p>
                <p>phone — so you never miss a thing!</p>
              </div>

            <form onSubmit={handleSubmit} className='flex items-center flex-col gap-3 mt-3 w-[20vw]'>


              <div className='w-[20vw]'>

                <select
                  className='w-[30%] h-10 rounded-l-md outline-none text-center'
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                   <option value="+91" selected>🇮🇳</option>
                   <option value="+1">🇺🇸</option>
                </select>

                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="XXX-XXXX-XXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className='w-[70%] h-10 px-3 tracking-wide rounded-r-md focus:outline-none'
                />
               </div> 

              {/* Checkbox & content */}
              <div className="flex items-start align-center gap-3">
                <input type="checkbox" required className='mt-1' />
                <div className='text-[12px]'>
                  <p className=''>Agree to receive marketing text messages from Lovisa  at the number provided. Consent is not a condition of any purchase. Rates may apply. View our Privacy Policy and Terms of Service.</p>
                </div>
              </div>

                {/* Button */}
              <button type='submit' className='w-[20vw] bg-black text-white text-lg px-10 py-2 mt-2 rounded'>LET'S DO IT!</button>

           </form>
           </div>  
           </div> 
        </div>
      )}
    </>
  );
}

export default Deals;