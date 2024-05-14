import React from 'react'
import { Link } from 'react-router-dom'
import TopBanner from '../../components/Common/Banner'
import Carousel1 from "../../components/Piercing/Carousel1"
import Carousel2 from "../../components/Piercing/Carousel2"
import FAQAccordion from "../../components/Piercing/FaqAccordion"

function Piercing() {
  const scrollDown = (sectionId) => {
    const Section = document.getElementById(sectionId);

    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='text[#111111] w-[100vw]'>
      {/* Top Banner */}
      <TopBanner />

      {/* Piercing Landing Banner */}
      <div className='w-full my-6'>
        <img src={'https://www.lovisa.sg/cdn/shop/files/PIERCING_LANDING_PAGE_2020_HEADER_3840x.jpg?v=1613767080'} />
      </div>
      <h1 className='text-center mt-14 mb-3 text-[#333333] text-4xl font-normal leading-2'>Aura Ear Piercing</h1>
      <div className="mx-auto w-[5vw] border-b-2 rounded-sm border-[#111111] font-normal"></div>
      {/* Piercing nav */}
      <div>
        <ul className='text-[#333333] flex flex-row items-center justify-center uppercase mt-7 text-xl tracking-tight leading-6'>
          <li className='mx-4 cursor-pointer' onClick={() => scrollDown('about')}>About Piercing</li>
          <li className='mx-4 cursor-pointer' onClick={() => scrollDown('styling')}>Styling Suite</li>
          <li className='mx-4 cursor-pointer' onClick={() => scrollDown('faq')}>FAQ's & AfterCare</li>
        </ul>
      </div>
      {/* About */}
      <div className='text-[#333333] flex flex-col items-center justify-center'>
        <h1 className=' mt-20  text-3xl uppercase'>Create Your New Piercing Look!</h1>
        <p className='text-center w-[30vw] my-8'>Aura offers ear piercing in selected stores across the world.
          There is no need to book, just walk in!</p>
        <p className='text-center w-[40vw] mb-8'>Our piercing stylists are fully trained in using our state-of-the-art piercing device and health & safety procedures required to deliver the perfect piercing.</p>
      </div>
      {/* Bottom buttons */}
      <div className='flex items-center justify-center gap-5 text-[#ffff]'>
        <Link to='/find-store'><button className='bg-[#000000] p-4 uppercase text-xs tracking-widest hover:bg-[#ffff] hover:text-[#111111] border border-[#111111]'>Find your nearest store</button></Link>
        <Link to='/piercing/gift-card'><button className='bg-[#000000] p-4 uppercase text-xs tracking-widest hover:bg-[#ffff] hover:text-[#111111] border border-[#111111]'>Ear Piercing giftcards</button></Link>
      </div>
      {/* Piercing Banner */}
      <div className='w-[100vw] mt-20 mb-[5%]' id="about">
        <img src={'https://www.lovisa.sg/cdn/shop/files/PIERCING_LANDING_PAGE_2020_ABOUT_PIERCING_3840x.jpg?v=1613767907'} />
      </div>
      <div className='text-[#000000] flex items-center content-center justify-center'>
        <h1 className='text-4xl text-center uppercase'>View The Range&nbsp;</h1><span className='text-6xl font-light'> | </span><h2 className='uppercase mx-2 flex items-center'><span>&nbsp;Priced at</span> <span className='font-semibold text-3xl mx-2'> $45</span></h2>
      </div>

      {/* Carousel */}
      <Carousel1 />

      <div className='mt-[5%] flex flex-col items-center justify-center item-center' id="styling">
        <img src={'https://www.lovisa.sg/cdn/shop/files/PIERCING_LANDING_PAGE_2020_STYLING_SUITE_3840x.jpg?v=1613767910'} alt="Banner" className='h-[18vh]' />
        <p className='my-5 text-[#111111] text-sm'>Get inspired! Find new ways to layer styles and stack them high for a perfectly curated look!</p>
      </div>

      {/* Carousel-2 */}
      <Carousel2 />
      <div id="faq">
        <FAQAccordion />
      </div>

    </div>
  )
}

export default Piercing