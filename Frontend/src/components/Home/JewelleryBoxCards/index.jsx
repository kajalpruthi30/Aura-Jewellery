import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "../../Common/Carousel"
import j1 from "../../../assets/images/jewelleryBoxImages/b1.webp";
import j2 from "../../../assets/images/jewelleryBoxImages/b2.webp";
import j3 from "../../../assets/images/jewelleryBoxImages/b3.webp";
import j4 from "../../../assets/images/jewelleryBoxImages/b4.webp";
import j5 from "../../../assets/images/jewelleryBoxImages/b5.webp";
import j6 from "../../../assets/images/jewelleryBoxImages/b6.webp";
import j7 from "../../../assets/images/jewelleryBoxImages/b7.webp";
import j8 from "../../../assets/images/jewelleryBoxImages/b8.webp";
import j9 from "../../../assets/images/jewelleryBoxImages/b9.webp";
import j10 from "../../../assets/images/jewelleryBoxImages/b10.webp";
import j11 from "../../../assets/images/jewelleryBoxImages/b11.webp";
import j12 from "../../../assets/images/jewelleryBoxImages/b12.webp";
import j13 from "../../../assets/images/jewelleryBoxImages/b13.webp";
import j14 from "../../../assets/images/jewelleryBoxImages/b14.webp";
import j15 from "../../../assets/images/jewelleryBoxImages/b15.webp";


  
const JewelleryBoxCards = () => {


  const images = [
    { url: j1, heading: "Black Faux Leather Makeup Bag & Jewellery Box", price: "$25.2"},
    { url: j2, heading: "Cream Faux Leather Oval Compact Jewellery Box", price: "$25.2"},
    { url: j3, heading: "Neutral Faux Leather Pattern Vanity Jewellery Box", price: "$25.2"},
    { url: j4, heading: "Cream Faux Leather Vanity Jewellery Box", price: "$25.2"},
    { url: j5, heading: "Cream Faux Leather Rectangle Jewellery Box", price: "$25.2"},
    { url: j6, heading: "Black Faux Leather Mirror Travel Jewellery Box", price: "$25.2"},
    { url: j7, heading: "Purple Faux Leather Compact Square Jewellery Box", price: "$25.2"},
    { url: j8, heading: "Navy Faux Leather Compact Jewellery Box", price: "$25.2"},
    { url: j9, heading: "Blush Faux Leather Square Jewellery Box", price: "$25.2", },
    { url: j10, heading: "Blue Faux Leather Large Vanity Jewellery Box", price: "$25.2"},
    { url: j11, heading: "Turquoise Faux Leather Square Jewellery Box", price: "$25.2"},
    { url: j12, heading: "Lilac Faux Leather Mirror Travel Jewellery Box", price: "$25.2"},
    { url: j13, heading: "Black Faux Leather Compact Square Jewellery Box", price: "$25.2"},
    { url: j14, heading: "Cream Faux Leather Compact Square Jewellery Box", price: "$25.2"},
    { url: j15, heading: "Gold Smooth Faux Leather Square Jewellery Box", price: "$25.2"},
];


  return (
    <>
       <div className='mt-[7rem] mx-20'>
        <div className=' flex items-center justify-between'>
          <div className='text-2xl'>JWELLERY BOXES</div>
          <Link to='/collections'><span className=" text-[12px] font-light cursor-pointer flex items-center gap-1 border-b-[1px] border-[#000000]">
            <p> SHOP NOW </p>
            <svg width="12" height="12" viewBox="0 0 12 12" class="icon icon-arrow-small-right" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6.53027V5.46961L8.43137 5.46961L6.67937 3.75L7.4435 3L10.5 6L7.4435 9L6.67937 8.25L8.43149 6.53027L1.5 6.53027Z" fill="#4D4D4D"></path>
                </svg>
          </span></Link>
        </div>
        <Carousel images={images}/>
      </div>
    </>
  )
}

export default JewelleryBoxCards