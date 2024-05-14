import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import {Link} from "react-router-dom";
import { faFacebook,  faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Carousel from '../../../components/Piercing/Carousel1';
import Img1 from "../../../assets/images/styleChannels/aa.webp";
import Img2 from "../../../assets/images/styleChannels/bb.webp";
import Img3 from "../../../assets/images/styleChannels/cc.webp";
import Img4 from "../../../assets/images/styleChannels/dd.webp";
import Img5 from "../../../assets/images/styleChannels/ee.webp";
import Img6 from "../../../assets/images/styleChannels/ff.webp";
import Img7 from "../../../assets/images/styleChannels/gg.webp";
import Img8 from "../../../assets/images/styleChannels/hh.webp";




export const Stylethree = ()=>{
    return(
        <>
        <div>
        
        <div className="flex items-center mx-[5rem] ">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-gray-400" />
            <Link to ="/"><p  className="text-gray-400">Back to all</p></Link>
        </div>
        <br></br>

        <div className='flex flex-col justify-center items-center'>
            <p >Mar 29 2023</p> <br></br>

           
            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Festival Outfit Ideas For 2024</h1>
            <br></br>
            <p  className=' text-xl  font-thin'>The Top 7 Trends for Festivals</p><br></br>
           
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p> Festival season is fast approaching, which means just one thing – it's time to find the ultimate party outfit. Planning what<br></br> to wear to your next music festival can be an overwhelming task. If narrowing down an outfit that's both on-trend and practical <br/> has you stumped – don't worry! We’ve put together our guide to the top festival trends for 2024.   </p><br></br>
            <p> Whether you’re attending ZoukOut or Ultra – enter the season in style with our selection of trending finishing touches and accessories.</p><br></br>
            </div>
            <br></br>


            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Trending Celebrity Style   </h1>
            <br></br>
            <p  className=' text-xl  font-thin'>Birthday presents for Taurus</p><br></br>
            <img src={Img1}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div><br></br>

            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Styling Scarves     </h1>
            <br></br>
            
            <img src={Img2}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Scarves and bandanas are having their moment right now – and for good reason! Satin scarves and crochet bandanas have <br></br>become popular fashion accessories. Perfect for styling to events and outdoor occasions.   </p><br></br>
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p><br></br>
            <p>Explore our entire selection of satin scarves and bandanas here for more. Or, read our guide on how to style your scarf for<br></br> more styling inspo.  </p>
                    
            </div>
            <br></br>

            {/* CAROUSEL */}
            <Carousel />


            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'> Statement Necklaces      </h1>
            <br></br>
            
            <img src={Img3}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Layering is a great way to create a look with impact. Add interest and detail to your ensemble with our selection of trending <br></br> and timeless necklaces, perfect for styling for your next party or event.   </p><br></br>
            <p>Whether you want to add an alternative edge to your look with a statement choker or keep things simple with a trending cord <br></br> pendant – add interest to your neckline with our range of versatile necklaces. Opt for necklaces featuring popular pendants<br></br> and motifs, including butterflies and hearts for an on-trend finish to your festival outfit. Or opt for something eye-catching with <br></br>our range of diamante statement necklaces for a hint of sparkle.  </p><br></br>

                    
            </div>
            <br></br>

             {/* CAROUSEL */}
             <Carousel />



             <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Western Outfits       </h1>
            <br></br>
            
            <img src={Img4}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Channeling your inner cowgirl is encouraged during festival season. Channel ‘70s Woodstock vibes to your next day party<br></br> with our selection of western-inspired accessories. </p><br></br>
            <p>Whether you want to add an alternative edge to your look with a statement choker or keep things simple with a trending cord <br></br> pendant – add interest to your neckline with our range of versatile necklaces. Opt for necklaces featuring popular pendants<br></br> and motifs, including butterflies and hearts for an on-trend finish to your festival outfit. Or opt for something eye-catching with <br></br>our range of diamante statement necklaces for a hint of sparkle.  </p><br></br>
            </div>
            <br></br>

             {/* CAROUSEL */}
             <Carousel />


             <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Trending Waist Chains       </h1>
            <br></br>
            
            <img src={Img5}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Channeling your inner cowgirl is encouraged during festival season. Channel ‘70s Woodstock vibes to your next day party<br></br> with our selection of western-inspired accessories. </p><br></br>
            <p>Whether you want to add an alternative edge to your look with a statement choker or keep things simple with a trending cord <br></br> pendant – add interest to your neckline with our range of versatile necklaces. Opt for necklaces featuring popular pendants<br></br> and motifs, including butterflies and hearts for an on-trend finish to your festival outfit. Or opt for something eye-catching with <br></br>our range of diamante statement necklaces for a hint of sparkle.  </p><br></br>
            </div>

             {/* CAROUSEL */}
             <Carousel />


             <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Face Gems & Body Jewels        </h1>
            <br></br>
            
            <img src={Img6}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Channeling your inner cowgirl is encouraged during festival season. Channel ‘70s Woodstock vibes to your next day party<br></br> with our selection of western-inspired accessories. </p><br></br>
            <p>Whether you want to add an alternative edge to your look with a statement choker or keep things simple with a trending cord <br></br> pendant – add interest to your neckline with our range of versatile necklaces. Opt for necklaces featuring popular pendants<br></br> and motifs, including butterflies and hearts for an on-trend finish to your festival outfit. Or opt for something eye-catching with <br></br>our range of diamante statement necklaces for a hint of sparkle.  </p><br></br>
           <p>Get creative and explore our entire range of face gems and body jewels here for more.</p>
           
            </div>
            <br></br>

            {/* CAROUSEL */}
            <Carousel />

            

            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Coastal Jewellery </h1>
            <br></br>
            
            <img src={Img7}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Channeling your inner cowgirl is encouraged during festival season. Channel ‘70s Woodstock vibes to your next day party<br></br> with our selection of western-inspired accessories. </p><br></br>
            <p>Whether you want to add an alternative edge to your look with a statement choker or keep things simple with a trending cord <br></br> pendant – add interest to your neckline with our range of versatile necklaces. Opt for necklaces featuring popular pendants<br></br> and motifs, including butterflies and hearts for an on-trend finish to your festival outfit. Or opt for something eye-catching with <br></br>our range of diamante statement necklaces for a hint of sparkle.  </p><br></br>
           <p>Get creative and explore our entire range of face gems and body jewels here for more.</p>
           
            </div>
            <br></br>

              {/* CAROUSEL */}
              <Carousel />


              
            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Body Jewellery  </h1>
            <br></br>
            
            <img src={Img8}></img> <br></br>
            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Channeling your inner cowgirl is encouraged during festival season. Channel ‘70s Woodstock vibes to your next day party<br></br> with our selection of western-inspired accessories. </p><br></br>
            <p>Whether you want to add an alternative edge to your look with a statement choker or keep things simple with a trending cord <br></br> pendant – add interest to your neckline with our range of versatile necklaces. Opt for necklaces featuring popular pendants<br></br> and motifs, including butterflies and hearts for an on-trend finish to your festival outfit. Or opt for something eye-catching with <br></br>our range of diamante statement necklaces for a hint of sparkle.  </p><br></br>
           <p>Get creative and explore our entire range of face gems and body jewels here for more.</p>
           
            </div>
            <br></br>

             {/* CAROUSEL */}
             <Carousel />

            <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Festival season is all about expressing yourself, show off your personality at your next event in 2024 with our selection of<br></br> trending finishing touches here. Don’t forget to stand out from the crowd and tag us in your festival looks over on our Instagram<br></br> with the hashtag #MyAura.  

</p>
           
            </div>


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

export default Stylethree