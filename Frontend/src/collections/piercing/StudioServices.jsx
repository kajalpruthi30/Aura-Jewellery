import React, { useState } from 'react';
import TopBanner from '../../components/Common/Banner';
import Carousel1 from "../../components/Piercing/Carousel1"

const StudioServices = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [buttonHovered1, setButtonHovered1] = useState(false);
  const [buttonHovered2, setButtonHovered2] = useState(false);

  return (
    <>
    {/* Top Banner */}
    <TopBanner/>
    <img className='w-full' src={"https://www.lovisa.sg/cdn/shop/files/studio_HERO_DESK_3840x.png?v=1673496133"} alt="service-1" />
      <div className='flex my-4 w-full'>
         <img className="w-1/2"src={"https://www.lovisa.sg/cdn/shop/files/Piercing_at_Lovisa_2_3840x.png?v=1673496174"}  alt="Piercing at Aura"/>
         <img className='w-1/2' src={"https://www.lovisa.sg/cdn/shop/files/Piercing_at_Lovisa_3840x.png?v=1673496195"} alt="Piercing at Aura" />
      </div>
      <div className='flex my-4 w-full'>
          <img  className="w-1/2"src={"https://www.lovisa.sg/cdn/shop/files/Lovisa_Piercing_Station_3840x.png?v=1673496291"} alt="Aura piercing station" />
          <img className='w-1/2' src={"https://www.lovisa.sg/cdn/shop/files/Lovisa_Piercing_Station_2_3840x.png?v=1673496276"} alt="Aura piercing station" />
      </div>
    
      
      <img className="my-4 "src={"https://www.lovisa.sg/cdn/shop/files/free_piercing_DESK_d4869b23-118c-4a1c-8e6e-1309b1529ae7_3840x.png?v=1673934930"} alt="Aura ear piercing FAQ's" />
      <h1 className='text-5xl text-center mt-36 '>VIEW THE STUDEX RANGE - PRICES FROM $45 |</h1>
      <Carousel1 />
      
      <div className='flex my-4'>
         <img className='w-1/2' src={"https://www.lovisa.sg/cdn/shop/files/Medisept_3840x.png?v=1673496737" } alt="Medisept nose piercing"/>
         <img className='w-1/2' src={"https://www.lovisa.sg/cdn/shop/files/Medisept_3840x.png?v=1673496737"} alt="Medisept nose piercing" />
      </div>
     
      <div className="flex justify-center gap-2 w-full">
        <div
          className="relative m-4 ml-0"
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          <img
            className="w-full h-max object-cover"
            src={"https://www.lovisa.sg/cdn/shop/files/Ready_to_Get_Pierced_960x.png?v=1673497434"} alt="Piercing-1"
          />
           <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden transition-all duration-500 transform translate-y-0">
            <p
              className={`text-2xl font-semibold transition-colors absolute top-1/3 ${
                hovered2 ? 'text-black' : 'text-white'
              }`}
            >
              Ready To Get Pierced?
            </p>
          <div className={`absolute inset-0 flex flex-col items-center justify-end overflow-hidden transition-all duration-500 ${hovered1 ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
          
            {hovered1 && (
              <div className="bg-transparent bg-opacity-0 w-full h-full flex flex-col items-center justify-center">
                <p className="color-black font-semibold text-lg">
                  Click here to find your closest Aura piercing station.
                </p>
               
                <button
                  className={`px-6 py-3 mt-2 text-lg font-semibold ${
                    buttonHovered1 ? 'bg-black text-white' : ' border border-white bg-transparent text-black'
                  }`}
                  onMouseEnter={() => setButtonHovered1(true)}
                  onMouseLeave={() => setButtonHovered1(false)}
                >
                  Find A Store
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
        <div
          className="relative m-4 mr-0"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <img
            className="w-full h-max object-cover"
            src={"https://www.lovisa.sg/cdn/shop/files/Still_Need_More_Info_960x.png?v=1673497496"}
            alt="Piercing-2"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden transition-all duration-500 transform translate-y-0">
            <p
              className={`text-2xl font-semibold transition-colors absolute top-1/3 ${
                hovered2 ? 'text-black' : 'text-white'
              }`}
            >
              Still Need More Information?
            </p>
          <div className={`absolute inset-0 flex flex-col items-center justify-end overflow-hidden transition-all duration-500 ${hovered2 ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
            {hovered2 && (
              <div className="bg-transparent bg-opacity-0 w-full h-full flex flex-col items-center justify-center">
                <p className="color-black font-semibold text-lg">
                  Explore our helpful piercing FAQs?
                </p>
                
                  <button
                  className={`px-6 py-3 mt-2 text-lg font-semibold ${
                    buttonHovered2 ? 'bg-black text-white' : ' border border-white bg-transparent text-black'
                  }`}
                  onMouseEnter={() => setButtonHovered2(true)}
                  onMouseLeave={() => setButtonHovered2(false)}
                >
                  Explore FAQ'S
                </button>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
      <img className='my-4 w-full' src={"https://www.lovisa.sg/cdn/shop/files/GWP_3840x.jpg?v=1673497649"} alt="GWP" />
    </>
  );
};

export default StudioServices;