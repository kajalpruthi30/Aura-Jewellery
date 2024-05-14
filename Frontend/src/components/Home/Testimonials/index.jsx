import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "../../Common/Carousel"
import j1 from "../../../assets/images/newArrivals/j1.webp";
import j2 from "../../../assets/images/newArrivals/j2.webp";
import j3 from "../../../assets/images/newArrivals/j3.webp";
import j4 from "../../../assets/images/newArrivals/j4.webp";
import j5 from "../../../assets/images/newArrivals/j5.webp";
import j6 from "../../../assets/images/newArrivals/j6.webp";
import j7 from "../../../assets/images/newArrivals/j7.webp";
import j8 from "../../../assets/images/newArrivals/j8.webp";
import j9 from "../../../assets/images/newArrivals/j9.webp";
import j10 from "../../../assets/images/newArrivals/j10.webp";
import j11 from "../../../assets/images/newArrivals/j11.webp";
import j12 from "../../../assets/images/newArrivals/j12.webp";
import j13 from "../../../assets/images/newArrivals/j13.webp";
import j14 from "../../../assets/images/newArrivals/j14.webp";
import j15 from "../../../assets/images/newArrivals/j15.webp";



const Testimonial = () => {


  const images = [
    { url: j1, heading: "Silver Double Stone Statement Drop Earrings", price: "$12.5" },
    { url: j2, heading: "Silver Diamante Leaf Drop Earrings", price: "$24.5" },
    { url: j3, heading: "Black Beaded Layered Necklace", price: "$5" },
    { url: j4, heading: "Silver Plated Classic Cubic Zirconia Stud Earrings", price: "$35.5" },
    { url: j5, heading: "Silver Plated Thick Diamante Bracelet", price: "$20" },
    { url: j6, heading: "Silver Pearl Stretch Bracelet 5-Pack", price: "$19.5" },
    { url: j7, heading: "Silver Double Stone Statement Drop Earrings", price: "$25.2" },
    { url: j8, heading: "Silver Diamante Leaf Drop Earrings", price: "$15" },
    { url: j9, heading: "Black Beaded Layered Necklace", price: "$19", },
    { url: j10, heading: "Silver Plated Classic Cubic Zirconia Stud Earrings", price: "$2" },
    { url: j11, heading: "Silver Plated Thick Diamante Bracelet", price: "$15.9" },
    { url: j12, heading: "Silver Pearl Stretch Bracelet 5-Pack", price: "$12" },
    { url: j13, heading: "Silver Double Stone Statement Drop Earrings", price: "$18" },
    { url: j14, heading: "Silver Diamante Leaf Drop Earrings", price: "$3.5" },
    { url: j15, heading: "Silver Diamante Leaf Drop Earrings", price: "$45" },
  ];


  return (
    <>
      <div className='mt-[7rem] mx-20'>
        <div className=' flex items-center justify-between'>
          <div className='text-2xl'>NEW ARRIVALS</div>
          <span className=" text-[12px] font-light">
          <Link to ='/collections'><span className=" text-[12px] font-light cursor-pointer flex items-center gap-1 border-b-[1px] border-[#000000]">
            <p> SHOP NOW </p>
            <svg width="12" height="12" viewBox="0 0 12 12" class="icon icon-arrow-small-right" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 6.53027V5.46961L8.43137 5.46961L6.67937 3.75L7.4435 3L10.5 6L7.4435 9L6.67937 8.25L8.43149 6.53027L1.5 6.53027Z" fill="#4D4D4D"></path>
            </svg>
          </span></Link>
          </span>
        </div>
        <Carousel images={images}/>
      </div>
    </>
  )
}

export default Testimonial