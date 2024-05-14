import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook,  faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Carousel from '../../../components/Piercing/Carousel1';
import Img1 from "../../../assets/images/styleChannels/a.webp";
import Img2 from "../../../assets/images/styleChannels/b.webp"
import Img3 from "../../../assets/images/styleChannels/c.webp"
import Img4 from "../../../assets/images/styleChannels/d.webp"



export const Stylechan = ()=>{
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
            <h1 className=' text-4xl  leading-1 font-thin tracking-wide'> The Top Wedding Trends for 2024</h1>
            <br></br>
            <p  className=' text-xl  font-thin'>Timeless Bridal Jewellery for 2024</p><br></br>

                  <div className='flex flex-col flex-start text-sm leading-relaxed'>
                  <p>If there’s one thing we know about weddings, it’s that costs can add and up quickly. From organising a cake, ordering florals and <br></br> of course, picking the perfect dress – sticking to a budget isn’t always easy.  </p>
                  <br></br>
                  <p>To help you host the wedding of your dreams, we’ve curated a guide to the top wedding trends from Bridal Fashion Week –<br></br> and how to achieve the look yourself for less.  </p> <br></br>
                  <p>From timeless keepsakes to trending finishing touches perfect for the big day, discover our guide to bridal jewellery trends for<br></br> 2024.  </p>
                  </div>

             <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Wedding Trends for 2024  </h1> 
             <div className='flex flex-col flex-start text-sm leading-relaxed'><br></br>
             <p>When it comes to picking our pieces for your wedding day, the options can often feel endless, but don't worry! We've scoured<br></br> the latest Bridal NYFW trends to narrow down the silhouettes of the season, so you can focus on feeling your best on the big <br></br>day.</p>   <br></br> 
             <p>This season, experiment with textures and florals to create a distinctly modern and high-end look – without needing to go over<br></br> budget! Or opt for timeless elegance with our selection of modern silhouettes, including statement studs, tennis bracelets, <br></br>matching jewellery sets and more. </p>
             </div>

             <h1  className=' text-4xl  leading-1 font-thin tracking-wide'>Florals & Textures  </h1><br></br>
             <img src={Img1}></img>
             <div className='flex flex-col flex-start text-sm leading-relaxed'><br></br>
             <p> Danielle Frankle’s latest Fall Ready to Wear collection is the epitome of the modern bride. At Bridal NYFW 24, the label <br></br>showcased a selection of textural and elegant gowns, paired with unique floral accents. </p><br></br>
             <p>From embellished headpieces to overblown rosette brooches, Danielle Frankle proves that often the magic is all in the details.<br></br> Adorning your wedding gown with a selection of floral finishing touches, including detailed headbands, elegant drop<br></br> earrings, hair combs and rosettes crafted with satin and lace is the perfect way to elevate your look for the bid day. </p><br></br>
             <p>Incorporating consistent floral themes in your 2024 wedding with matching accessories for your bridal party, table <br></br>arrangements, and corsages can add an element of cohesion throughout your celebration.  </p><br></br>
             <p>Explore our entire collection of floral jewellery pieces here and add a sentimental finish to your look. </p>
             </div>
             <br></br>


             {/* CAROUSEL */}
             <Carousel />


             <h1  className=' text-4xl  leading-1 font-thin tracking-wide'>Tennis Bracelets & Necklaces  </h1><br></br>
             <img src={Img2}></img>
             <div className='flex flex-col flex-start text-sm leading-relaxed'><br></br>

             <p>The Idah Cohen Spring 2025 Bridal Collection is a celebration of texture, unique silhouettes and modern pairings – perfect for<br></br> serving as inspiration for 2024 brides. This runway featured a range of elegant bridal gowns, adorned with modern and <br></br>refined jewellery for an elevated finish. </p> <br></br>

             <p>Simple tennis bracelets and diamond-studded necklaces complemented each of the gowns at Bridal Fashion Week, giving<br></br> each look a hint of luxury. Recreate the look yourself for your wedding with our selection of premium tennis bracelets, cubic <br></br>zirconia choker necklaces and stacking rings.  </p> <br></br>

            <p>ach of these jewellery pieces are crafted with man-made, cubic zirconia crystals that mimic the same cut and clarity as real<br></br> diamonds, at a fraction of the price. Perfect for helping you achieve a fashion-forward look at an affordable price this season!  </p> <br></br>

            <p>Discover our entire range of crystal bridal jewellery here for more.  </p>
            </div>
            <br></br>

             {/* CAROUSEL */}
             <Carousel />

             


             <h1  className=' text-4xl  leading-1 font-thin tracking-wide'> Bridal Statement Earrings   </h1><br></br>
             <img src={Img3}></img>
             <div className='flex flex-col flex-start text-sm leading-relaxed'><br></br>
             <p>Mira Zwillinger revealed pieces from their Spring 2025 Collection this month, showcasing a range of patterned and textural <br></br>gowns – paired with eye-catching statement earrings. While weddings are often associated with understated elegance and ,<br></br>subdued silhouettes, Zwillinger encourages the opposite.  </p><br></br>
             <p>Don’t be afraid to turn heads on your wedding day by pairing your gown with a pair of statement earrings in gold, silver or<br></br> rose gold. Earrings including statement studs, drop earrings adorned with textural florals, and refined pearl earrings are just a<br></br> handful of styles you could incorporate into your look for the big day.  </p><br></br>
             <p>Explore our selection of timeless and refined statement earrings here, adorned with cubic zirconia crystals, floral accents,<br></br> freshwater pearls and more.  </p><br></br>
             <p>For a premium touch, opt for earrings from our gold and silver plated collections – perfect for keeping as heirlooms for years <br></br>to come.  </p><br></br>

            </div><br></br>


            {/* CAROUSEL */}
            <Carousel />

            
            <h1  className=' text-4xl  leading-1 font-thin tracking-wide'> Freshwater Pearl Jewellery  </h1><br></br>
             <img src={Img4}></img>
             <div className='flex flex-col flex-start text-sm leading-relaxed'><br></br>
             <p>Ines Di Santo’s latest Spring Collection is the epitome of romance. The collection leverages ornate detailing, unique<br></br> embellishments and feminine gowns that celebrate what weddings are all about – love.  </p><br></br>
             <p>For a romantic finish to your bridal look, complete your outfit with genuine freshwater pearl jewellery. Pearls are a symbol of <br></br>romance and are synonymous with elegance, making the perfect addition to your bridal look. Pick out a pair of real gold drop <br></br>earrings, a timeless pearl pendant necklace or a dainty chain bracelet crafted with real freshwater pearls for a luxe finish to <br></br>your outfit. </p><br></br>
             <p>Explore premium pearl jewellery from our Bridal Collection here for more.  </p><br></br>
           
            </div>


            {/* CAROUSEL */}
            <Carousel />



            <h1  className=' text-4xl  leading-1 font-thin tracking-wide'> Matching Sets    </h1><br></br>
            
             <div className='flex flex-col flex-start text-sm leading-relaxed'>
             <p>For a refined finish to your bridal look, discover our range of eye-catching matching jewellery sets – perfect for creating a <br></br>distinct and cohesive look for your wedding. </p><br></br>
             <p>Explore real gold and silver plated jewellery sets, featuring a sleek pendant necklace and pair of adorning earrings. Or add a<br></br> touch of glamour to your look with decorative, diamond simulant jewellery sets.  </p>
             
            </div>
            <br></br>
             {/* CAROUSEL */}
             <Carousel />


             <div className='flex flex-col flex-start text-sm leading-relaxed'><br></br>
             <p>There you go, the top trends for weddings in 2024. Discover our entire collection of bridal jewellery here, or head to our new <br></br>arrivals collection to get your hands on the latest jewellery to land at Aura.   </p><br></br>
             <p>Don’t forget to tag us in your pics from the big day over on our Instagram with #MyAura for a chance to be featured.  </p>
           <br></br>
             
            </div>

          </div>

          
          <div>
             <h1 className="flex justify-center items-center">
             <span className="border-b border-black">Share</span>
             </h1>
           </div> 

           <div className='flex flex-row mx-[10rem] text-2xl'>
           <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                <FontAwesomeIcon icon={faPinterest} className="mr-2 "/>
               
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              
            </div>


           <br></br>

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

export default Stylechan;