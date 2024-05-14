import React from 'react'
import Banner from "../../components/Common/Banner";

const PiercingAftercare = () => {
  return (
    <>

    <Banner />
    <div className='w-[100vw] h-[100vh] overflow-x-hidden'>

        {/* Piercing Aftercare */}
        <div className='my-6 flex flex-col items-center justify-center'>
            <div>
                <img src={'https://www.lovisa.sg/cdn/shop/files/after_HERO_DESK_3840x.png?v=1673492140'} alt="Piercing Aftercare"/>
            </div>

            <div className='my-[4rem]'>
                <h1 className='text-[2rem] font-[100] tracking-tight leading-10 text-[#111111]'>Aftercare Information</h1>
            </div>

            <div className='my-3'>
                <img src={'https://www.lovisa.sg/cdn/shop/files/Aftercare_Info_DESK_3840x.png?v=1673492785'} alt="Aftercare info" />
            </div>

            <div className='my-[4rem]'>
                <h1 className='text-[2rem] font-[100] tracking-tight leading-10 text-[#111111]'>Advanced Aftercare & Cleanser</h1>
            </div>

            <div className='flex items-center justify-center w-[100vw]'>
                <div className='w-[50%]'>
                    <img src={'https://www.lovisa.sg/cdn/shop/files/Piercing_Aftercare_3840x.png?v=1673492257'} alt="Aftercare cleanser" />
                </div>
                <div className='w-[50%]'>
                <img src={'https://www.lovisa.sg/cdn/shop/files/Piercing_Aftercare2_3840x.png?v=1673492292'} alt="Aftercare cleanser" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PiercingAftercare