import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import { faFacebook,  faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Carousel from '../../../components/Piercing/Carousel1';
import Img1 from "../../../assets/images/styleChannels/aaa.webp";
import Img2 from "../../../assets/images/styleChannels/bbb.webp";
import Img3 from "../../../assets/images/styleChannels/ccc.webp";
import Img4 from "../../../assets/images/styleChannels/ddd.webp";
import Img5 from "../../../assets/images/styleChannels/eee.webp";



export const Stylefour = ()=>{
    return(
        <>
        <div>
        <div className="flex items-center mx-[5rem] ">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-gray-400" />
            <Link to ="/"><p className="text-gray-400">Back to all</p></Link>
        </div>
        <br></br>

        <div className='flex flex-col justify-center items-center'>
            <p >Mar 20 2024</p> <br></br>

           
            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Gift Ideas for Aries Season</h1>
            <br></br>
            <p  className=' text-xl  font-thin'>Birthday presents for Aries  </p><br></br>
            <img  className='h-[15rem]' src={Img1}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div>
            <br></br>

            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Aries traits and characteristics</h1>
            <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div>


            
            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Personalised birthday gift ideas</h1>
            <br></br>
            
            <img  className='h-[15rem]' src={Img2}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div>
            <br></br>


            {/* CAROUSEL */}
            <Carousel />


            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Trending gift ideas</h1>
            <br></br>
           
            <img  className='h-[15rem]' src={Img3}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div>
            <br></br>

            {/* CAROUSEL */}
            <Carousel />



            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Luxe birthday gift ideas</h1>
            <br></br>
           
            <img  className='h-[15rem]' src={Img4}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div>
            <br></br>
              {/* CAROUSEL */}
              <Carousel />



              <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Sentimental earrings </h1>
            <br></br>
           <img  className='h-[15rem]' src={Img5}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            <p>Explore our entire collection of stainless steel earrings here for more.  </p></div>
            <br></br>
            <br></br>
            <br></br>



           
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>There you have it, the ultimate gifts perfect for Aries season. Discover our guide to premium birthday gifts here or visit our Aries<br></br> collection for more star-sign-approved pieces.  Don’t forget to tag us in your birthday outfits over on our Instagram with<br></br> #MyAura for a chance to be featured.   </p>
            </div>
            <br></br>


              </div>

           <div>
             <h1 className="flex justify-center items-center">
             <span className="border-b border-black">Share</span>
             </h1>
           </div> 
           <br></br>

           <div className='flex flex-row mx-[6rem] text-2xl'>
           <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                <FontAwesomeIcon icon={faPinterest} className="mr-2 "/>
               
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              
            </div>

           <div className="flex flex-row justify-between items-center mx-[5rem]">
            <div>
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-gray-400" />
                <a href="#" className="text-gray-400">Olderpost</a>
            </div>
            <div>
                <a href="#" className="text-gray-400">Newpost</a>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-400" />
            </div>
        </div>

          
          
          
   

        </div>
        </>

    )

}

export default Stylefour