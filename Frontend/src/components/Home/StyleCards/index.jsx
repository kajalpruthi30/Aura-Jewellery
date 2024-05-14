import React from 'react'
import {Link} from "react-router-dom"

const Stylecards = () => {
  return (
    <>
      <div className='mx-20 '>
        <div className='mt-[4em] left-[4vw] text-3xl leading-5 font-light'>STYLE CHANNEL</div>
        <div className='mt-[2em] w-full flex gap-5 justify-center items-center '>
          <div className='relative h-[70vh] w-[22vw] rounded-lg border border-[#000000] p-5 flex flex-col'>
            <img src={'https://www.lovisa.sg/cdn/shop/articles/HOMEPAGE_BLOG_BANNER_TAURUS_grande_crop_center@2x.jpg?v=1712809526'} alt="Card Image" className="w-full h-[55%] object-cover rounded cursor-pointer" />
            <div className="mt-10 text-sm">
              <h4 className=' font-semibold cursor-pointer'> Birthday Gift Ideas For Taurus </h4>
              <p className='mt-4'> Pick the perfect present </p>
              <div className="absolute bottom-0 border-b-[1px] mb-8 border-gray-300 flex items-center cursor-pointer">
                <Link to = "/style-channel/blog1"><span className="mr-1">Read more</span></Link>
                <svg width="12" height="12" viewBox="0 0 12 12" class="icon icon-arrow-small-right" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6.53027V5.46961L8.43137 5.46961L6.67937 3.75L7.4435 3L10.5 6L7.4435 9L6.67937 8.25L8.43149 6.53027L1.5 6.53027Z" fill="#4D4D4D"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className='relative h-[70vh] w-[22vw] rounded-lg border border-[#000000] p-5 flex flex-col'>
            <img src={'https://www.lovisa.sg/cdn/shop/articles/HOMEPAGE_BLOG_BANNER_BRIDAL_grande_crop_center@2x.jpg?v=1712201835'} alt="Card Image" className="w-full h-[55%] object-cover rounded cursor-pointer" />
            <div className="mt-10 text-sm">
              <h4 className=' font-semibold cursor-pointer'> The Top Wedding Trends For 2024 </h4>
              <p className='mt-4'> Timeless Bridal jwellery for 2024 </p>
              <div className="absolute bottom-0 border-b-[1px] mb-8 border-gray-300 flex items-center cursor-pointer">
              <Link to = "/style-channel/blog2"><span className="mr-1">Read more</span></Link>
                <svg width="12" height="12" viewBox="0 0 12 12" class="icon icon-arrow-small-right" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6.53027V5.46961L8.43137 5.46961L6.67937 3.75L7.4435 3L10.5 6L7.4435 9L6.67937 8.25L8.43149 6.53027L1.5 6.53027Z" fill="#4D4D4D"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className='relative h-[70vh] w-[22vw] rounded-lg border border-[#000000] p-5 flex flex-col'>
            <img src={'https://www.lovisa.sg/cdn/shop/articles/HOMEPAGE_BLOG_BANNER_FESTIVAL_grande_crop_center@2x.jpg?v=1711579157'} alt="Card Image" className="w-full h-[55%] object-cover rounded cursor-pointer" />
            <div className="mt-10 text-sm">
              <h4 className=' font-semibold cursor-pointer'> Festival Outfit Ideas For 2024 </h4>
              <p className='mt-4'> Get festival ready... </p>
              <div className="absolute bottom-0 border-b-[1px] mb-8 border-gray-300 flex items-center cursor-pointer">
              <Link to = "/style-channel/blog3"><span className="mr-1">Read more</span></Link>
                <svg width="12" height="12" viewBox="0 0 12 12" class="icon icon-arrow-small-right" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6.53027V5.46961L8.43137 5.46961L6.67937 3.75L7.4435 3L10.5 6L7.4435 9L6.67937 8.25L8.43149 6.53027L1.5 6.53027Z" fill="#4D4D4D"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className='relative h-[70vh] w-[22vw] rounded-lg border border-[#000000] p-5 flex flex-col'>
            <img src={'https://www.lovisa.sg/cdn/shop/articles/HOMEPAGE_BLOG_BANNER_ARIES_grande_crop_center@2x.jpg?v=1710910026'} alt="Card Image" className="w-full h-[55%] object-cover rounded cursor-pointer" />
            <div className="mt-10 text-sm">
              <h4 className=' font-semibold cursor-pointer'> Gift Ideas For Aries Season </h4>
              <p className='mt-4'> Birthday Present Ideas for Aries </p>
              <div className="absolute bottom-0 border-b-[1px] mb-8 border-gray-300 flex items-center cursor-pointer">
                <Link to = '/style-channel/blog4'><span className="mr-1">Read more</span></Link>
                <svg width="12" height="12" viewBox="0 0 12 12" class="icon icon-arrow-small-right" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6.53027V5.46961L8.43137 5.46961L6.67937 3.75L7.4435 3L10.5 6L7.4435 9L6.67937 8.25L8.43149 6.53027L1.5 6.53027Z" fill="#4D4D4D"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Stylecards