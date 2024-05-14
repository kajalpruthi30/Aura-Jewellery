import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook,  faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Carousel from '../../../components/Piercing/Carousel1';
import Img1 from "../../../assets/images/styleChannels/one.webp";
import Img2 from "../../../assets/images/styleChannels/two.webp"
import Img3 from "../../../assets/images/styleChannels/three.webp"
import Img4 from "../../../assets/images/styleChannels/four.webp"
import Img5 from "../../../assets/images/styleChannels/one.webp";
import Img6 from "../../../assets/images/styleChannels/six.webp"
import Img7 from "../../../assets/images/styleChannels/seven.webp"

export const Stylechannel = ()=>{
    return(
        <>
        <div>
        <div className="flex items-center mx-[5rem] ">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-gray-400" />
            <Link to = "/"><p className="text-gray-400">Back to all</p></Link>
        </div>
        <br></br>

        <div className='flex flex-col justify-center items-center'>
            <p >April 11 2024</p> <br></br>

           
            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'> Birthday Gift Ideas for Taurus</h1>
            &nbsp;
            <p  className=' text-xl  font-thin'>Birthday presents for Taurus</p>&nbsp;
            <img src={Img1}></img> &nbsp;
            <div className='flex flex-col flex-start text-sm leading-relaxed '>
            <p >Taurus season is upon us! Which means, it’s time to find the perfect gift for the loved ones in your life. To help you find the<br></br> perfect present for your bestie, partner (or even yourself), we’ve put together the ultimate guide to finding the perfect gift.  </p>&nbsp;
            <p>From signature staples your loved ones can style in their everyday stack, to occasion-ready accessories perfect for <br></br>complementing a birthday outfit, discover our guide to Taurus-approved birthday gifts.   </p>
            </div>


            &nbsp; <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Zodiac Traits & Characteristics</h1>&nbsp;
           <div className='flex flex-col flex-start text-sm leading-relaxed'>
           <p>Taurus is the rock of the zodiacs! These lovable earth signs are known for their loyalty and down to earth nature, making great<br></br> friends and reliable companions. It’s these traits that make Taurus our go-to when we need a helping hand.   </p> &nbsp;
          <p>Taurus likes to form connections with like-minded individuals and base their relationships on stability, support and shared <br></br>values. Because of this, Taurus naturally connects well with fellow earth signs, Virgo and Capricorn. They’re also highly<br></br> compatible with water signs, like Cancer, Scorpio and Pisces. </p>&nbsp;
            </div>
          
           <h1  className=' text-4xl  leading-1 font-thin tracking-wide'>Signature Star Sign Jewellery</h1>&nbsp;
           <img src={Img2}></img>   &nbsp;
           <div className='flex flex-col flex-start text-sm leading-relaxed'>
           <p>Often the best presents are the ones that reflect who we are. Keep your loved ones front of mind with something sentimental<br></br> from our bestselling initial and zodiac collections.  </p><br></br>
           <p>If the Taurus in your life is an astrology lover, explore jewellery designed with constellation and zodiac charms. Choose a<br></br> signature Taurus star sign pendant necklace or curated ear stack adorned with Taurus horoscope charms.   </p>   &nbsp;
           <p>For something more refined, opt for jewellery adorned with initial charms and pendants instead. Choose our Gold Plated Letter <br></br>T Initial Pendants for 'Taurus’ or gift them a pendant with their own initials.  </p>&nbsp;
           <p>Each piece of jewellery from our star sign and initials collection is crafted with real gold and silver plating, making signature<br></br> staples your loved ones can style in their everyday stack. Discover our entire collection of star sign and initial<br></br> jewellery here and get gifting!   </p>
            </div>

            &nbsp;
           {/* Carousel */}
           <Carousel />

           <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Emerald Birthstone  </h1>&nbsp;
           <img src={Img3}></img>&nbsp;
           <div className='flex flex-col flex-start text-sm leading-relaxed'>
           <p>If you’re not sure what to get your loved one for their birthday this year, opt for a piece of jewellery featuring their birthstone<br></br> for a sentimental touch. For Taurus, explore our selection of thoughtful and sentimental gift ideas featuring emerald</p>&nbsp;
           <p>Emerald is the birthstone for the month of May, representing rebirth, love and truth – making the perfect gifts for Taurus this<br></br> season. Celebrate your bestie, partner – or even spoil yourself with our range of earrings, pendant necklaces and bracelets <br></br>adorned with vibrant emerald crystals. </p>&nbsp;
           <p>For a modern touch, opt for jewellery encrusted with baguette-cut, cubic zirconia crystals in a bright emerald hue – perfect for<br></br> styling in their everyday stack. </p>&nbsp;
           </div>div
          {/* CAROUSEL */}
          <Carousel />

          <h1  className=' text-4xl  leading-1 font-thin tracking-wide'>Cubic Zirconia Crystals </h1>&nbsp;
          <img src={Img4}></img>&nbsp;
          <div className='flex flex-col flex-start text-sm leading-relaxed'>
          <p>Taurus is no stranger to the finer things in life. This birthday month, lean into their lavish side with our selection of premium <br></br>jewellery pieces, encrusted with cubic zirconia crystals.  </p>&nbsp;
          <p>Spoil Taurus this birthday month with picture-perfect pieces, designed with crystals that mimic the same cut and clarity as real<br></br> diamonds – at a fraction of the price. Choose from our range of diamante statement earrings, huggie hoops, drops and studs,<br></br> each featuring captivating crystals for a luxurious finish.  </p>&nbsp;
          <p>Explore our entire collection of cubic zirconia jewellery pieces here, perfect for leaving a lasting impression on Taurus this side.</p>&nbsp;
        </div>

        {/* CAROUSEL */}
        <Carousel />

        <h1  className=' text-4xl  leading-1 font-thin tracking-wide'>Semi-Precious Stones </h1>&nbsp;
       
        <img src={Img5}></img>&nbsp;
        <div className='flex flex-col flex-start text-sm leading-relaxed'>
        <p>If the Taurus in your life already has a piece of emerald jewellery they love, complement their stack with some adorning green <br></br>stones. Explore our selection of jewellery designed with genuine semi-precious stones. For a pop of green, opt for styles<br></br> encrusted with green flourite or green aventurine crystals, representing growth, clarity and peace.  </p>&nbsp;
        <p>Gift them a unique beaded bracelet, sleek pendant necklace, or set of embellished stacking rings to cusomise their look.<br></br> Perfect for serving as a grounding reminder in their everyday stack.  </p>&nbsp;
        <p  >Explore unique pieces featuring semi precious stones here for more .  </p>&nbsp;
        </div>



         {/* CAROUSEL */}
         <Carousel/>

         <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Freshwater Pearls  </h1>&nbsp;
         <img src={Img6}></img>&nbsp;
         <div className='flex flex-col flex-start text-sm leading-relaxed'>
        <p>Show Taurus how much they mean to you with our collection of premium, freshwater pearl jewellery. Pearls are a staple in <br></br>every jewellery collection, making go to pieces – perfect for styling to special occasions and events.  </p>&nbsp;
        <p>Pearls have the ability to turn an ordinary outfit into something special. Surprise your loved ones with a pair of gold plated<br></br> drop earrings, a timeless pendant necklace, or chain bracelet featuring captivating pearl accents.  </p>&nbsp;
        <p>Opt for forever pieces crafted from stainless steel, sterling silver and plated with real gold, designed to last a lifetime in your<br></br> jewellery box. Explore our range of timeless pearl pieces here for more!  </p>
        </div>
        &nbsp;

         {/* CAROUSEL */}
         <Carousel/>


         <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Statement Stud Earrings  </h1>&nbsp;
         <img src={Img7}></img>&nbsp;
         <div className='flex flex-col flex-start text-sm leading-relaxed'>
            <p>Taureans are the ultimate trendsetters, their love of the finer things in life means they're no stranger to the title of best dressed –<br></br> no matter the occasion. Tap into Taurus’ love for the latest in fashion with a pair of trending statement stud earrings.  </p>&nbsp;
            <p>Statement studs are taking over drops and dangles as the silhouette of the season. Gift Taurus a pair of eye-catching stud <br></br> earrings in gold and silver, perfect for adding flair to their birthday or dinner party outfits this month.  </p>&nbsp;
            <p>Explore our range of fan-favourite teardrop earrings, geometric studs and textured earrings here for more.  </p>&nbsp;
           </div>

           {/* CAROUSEL */}
           <Carousel/>

           <p className='flex flex-col flex-start text-sm leading-relaxed'>There you have it, the ultimate gifts perfect for Taurus season. Discover our guide to premium birthday gifts here, or visit our<br></br> Taurus collection for more star-sign approved pieces. Don’t forget to tag us in your birthday outfits over on our Instagram with <br></br>#MyAura for a chance to be featured.   </p>
           </div>
           &nbsp;
           <div>
             <h1 className="flex justify-center items-center">
             <span className="border-b border-black">Share</span>
             </h1>
           </div> 
           &nbsp;

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

export default Stylechannel;