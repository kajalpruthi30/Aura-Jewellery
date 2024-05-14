import React, { useState } from 'react';
import './Card.css';
import { useAuth } from './PopupContext';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";



const Popup = ({ images }) => {
    const { togglePopup, isOpen } = useAuth();
    const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index

    const handlePrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? 5 : prevSlide - 1)); // Update current slide index for previous slide
    };

    const handleNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 5 ? 0 : prevSlide + 1)); // Update current slide index for next slide
    };

    return (
        <>
            {isOpen && (
                <div className="popupContainer fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}>

                    {/* Popup content */}
                    <div className="grid grid-cols relative bg-white max-w-[70%] max-h-[90%] " style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>

                        {/* Popup images slider */} 
                        {/* Left side */}
                        <div className='max-w-[48%]  max-h-[100vh] py-[20px] pl-[20px]'>
                            <img src={images[currentSlide]} alt="Popup image" className='pt-5 pl-4'/>
                        </div>

                        {/* Right side */}
                        <div className="right-side">
                            {/* Close button */}
                            <button className="absolute top-[10px] right-[10px] p-10 border-none text-black text-[1.5rem] cursor-pointer bg-transparent" onClick={togglePopup}>✖</button>

                            {/* Popup arrows */}
                            <div className='absolute top-[13.5rem] left-[7.5rem] w-[40px] h-[40px] flex justify-center items-center text-[55px] cursor-pointer' style={{color: "rgba(0, 0, 0, 0.2)"}}>

                                {/* Left arrow */}
                                <div className="absolute bottom-[160px] left-[540px]" onClick={handlePrevSlide}><AiOutlineLeft /></div>
                                {/* Right arrow */}
                                <div className="absolute bottom-[160px] left-[590px]" onClick={handleNextSlide}><AiOutlineRight /></div>
                            </div>

                            {/* Popup text */}
                            <div className="popupText relative w-[80vw] text-center text-[15px] flex flex-col items-center bottom-[78vh] left-[30vh] mt-[4rem]">
                                <p className='flex justify-center items-center mb-[20px] leading-5 tracking-[2px]'><em>Freshen up your look with the Lovisa nose piercing range <br />💎 Discover classic studs and decorative diamante <br />charms crafted from titanium and surgical steel ✨<br />#MyLovsia</em></p>

                            {/* Popup social media links */}
                                <div className="flex gap-5 justify-center items-center mt-[20px] no-underline text-gray-600" style={{fontSize: '16px'}}>
                                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fs%3D100%26u%3Dhttps%253A%252F%252Ffoursixty.com%252Flovisa-com_1%252F247514654%252F%26i%3Dhttps%253A%252F%252Fscontent.cdninstagram.com%252Fv%252Ft51.2885-15%252F437530239_979426503759859_6417863715693045735_n.jpg%253F_nc_cat%253D106%2526ccb%253D1-7%2526_nc_sid%253D18de74%2526_nc_ohc%253DEa28gQ2OjQwAb5eOufK%2526_nc_ht%253Dscontent.cdninstagram.com%2526edm%253DAM6HXa8EAAAA%2526oh%253D00_AfADsyWwji2FYsC23Tcr3gi47AdONKcQUrEczmD7sMPNRw%2526oe%253D66244296&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=pa_IN" target='_blank'><FaFacebookF /></a>
                                    <a href="#"><HiMail /></a>
                                    <a href="https://twitter.com/intent/post?url=https%3A%2F%2Ffoursixty.com%2Flovisa-com_1%2F247514654%2F&related=lovisajewellery&text=Shop%20this%20Instagram.self%20from%20%40lovisajewellery" target='_blank'><IoLogoTwitter /></a>
                                    <a href="https://in.pinterest.com/pin/create/button/?description=Shop%20this%20Instagram.self%20from%20%40lovisajewellery&media=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F437530239_979426503759859_6417863715693045735_n.jpg%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3D18de74%26_nc_ohc%3DEa28gQ2OjQwAb5eOufK%26_nc_ht%3Dscontent.cdninstagram.com%26edm%3DAM6HXa8EAAAA%26oh%3D00_AfADsyWwji2FYsC23Tcr3gi47AdONKcQUrEczmD7sMPNRw%26oe%3D66244296&url=https%3A%2F%2Ffoursixty.com%2Flovisa-com_1%2F247514654%2F" target='_blank'><BiLogoPinterestAlt /></a>
                                    <a href="https://foursixty.com/lovisa-com_1/247514654/" target='_blank'><BsLink45Deg /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;