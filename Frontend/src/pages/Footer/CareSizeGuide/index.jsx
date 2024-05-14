import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgNotes } from "react-icons/cg";

function Guide() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [showCrossIcon, setShowCrossIcon] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
        setShowMenu(!showMenu);
        setShowCrossIcon(!showCrossIcon);
    };

    return (
        <>
            <div>
                {/* Overlay starts */}
                {showOverlay && (
                    <div className="fixed top-[11vh] left-0 w-full h-full bg-black opacity-80 z-50">
                        <div className="text-white sticky top-[32%] flex flex-col items-center justify-center text-3xl">
                            <div className="hover:bg-[#f59f83] transition duration-900  w-full text-center py-3">Contact Us</div>
                            <div className="hover:bg-[#f59f83]  transition duration-900 w-full text-center py-3">Shipping & Delivery</div>
                            <div className="hover:bg-[#f59f83]  transition duration-900 w-full text-center py-3">Returns & Exchanges</div>
                            <div className="hover:bg-[#f59f83]  transition duration-900 w-full text-center py-3">Store Locator</div>
                        </div>
                    </div>
                )}
                {/* Overlay ends */}

                {/* Navbar starts */}
                {showMenu && (
                    <nav className="bg-[#F7F7F7] flex justify-evenly h-[10vh] p-5 text-[12px] gap-[38vw]">
                        <ol className="flex pt-2">
                            <li><a href="">Lovisa ＞ </a></li>
                            <li>Care & Size Guides</li>
                        </ol>
                        <div className="">
                            <div className="flex items-center border border-black hover:border-orange-500 rounded-sm">
                                <IoIosSearch className="text-orange-500 text-lg mx-2" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-[15vw] h-10 pr-8 placeholder-black placeholder-opacity-50 font-semibold focus:placeholder-orange-500 text-orange-500 outline-none bg-transparent"
                                />
                            </div>
                            <label htmlFor=""></label>
                        </div>
                    </nav>)}
                {/* Navbar ends */}

                <div className=" flex flex-col mx-[5rem] text-[12px] px-[6rem] py-7" >
                    <div>
                        <h1 className="text-[30px] font-medium pb-5 ">Care & Size Guides</h1>
                    </div>

                    <div className="flex justify-between gap-[10rem] w-[60vw]">
                        <div>
                            <div className="text-[18px] font-medium  ">Metals & Materials</div><br />
                            <div className="flex  gap-2 text-[15px]">  <CgNotes size={17} /> Learn about Lovisa's Metals & Materials</div>
                        </div>
                        <div className="">
                            <div className="text-[18px] font-medium  ">Care Guide</div><br />
                            <div className="flex  gap-2 text-[15px]">  <CgNotes size={17} />How to care for your Lovisa Jewellery</div>
                        </div>
                    </div>
                </div>

                <div className="mx-[5rem] text-[12px] px-[6rem] my-[2rem] pb-9">
                    <div className="text-[18px] font-medium ">Size Guides</div><br />
                    <div className="flex text-[15px] gap-2 border-b-2 w-[25vw] py-4"><CgNotes size={17} />Earring Sizes</div>
                    <div className="flex text-[15px] gap-2 border-b-2 w-[25vw] py-4"><CgNotes size={17} />Necklace Sizes</div>
                    <div className="flex text-[15px] gap-2 w-[25vw] py-4"><CgNotes size={17} />Determining the best ring size</div>
                </div>
            </div>
        </>
    );
}

export default Guide;