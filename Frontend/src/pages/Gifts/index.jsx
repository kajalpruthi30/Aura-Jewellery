import React from 'react';
import { Link } from 'react-router-dom';
import TopBanner from '../../components/Common/Banner';

function Gifts() {
    return (
        <>
            <div className='flex flex-col'>{/* Top Banner */}
                <TopBanner />
                <div className='flex mt-6 w-[100%]'>
                    <div className='text-center w-[60%]" '>
                        <img src="https://www.lovisa.sg/cdn/shop/files/HALF_HERO_D_1440_1364_GIFTING_3840x.jpg?v=1707379217" alt="" className='' />
                    </div>
                    <div className='bg-[#F2F2F2] text-center py-9 px-7 w-[50%] pt-[12%]'>
                        <div className='text-[35px] font-bold flex items-center justify-center'>Thoughtful Gifts for <br></br> Your Special Ones
                        </div>
                        <div className='mt-6 text-center pl-2 pr-2 text-sm'>Show your love with our collection of <br />heartfelt gifts. Discover the perfect gifts <br /> for the cherished people in your life,<br /> ranging from premium gift sets to <br />
                            genuine gold and silver-plated <br />jewellery.
                        </div>
                        <div className="mt-6 pt-9 gap-3 flex flex-row items-center">
                            <Link to='/collections'><button type='submit' className="px-6 py-1 rounded text-black border bg-white text-[13px] hover:bg-black hover:text-white transition duration-300 text-center w-[11vw] outline-none">Gold plated</button></Link>
                            <Link to='/collections'><button type='submit' className="px-6 py-1 rounded text-black border bg-white text-[13px] hover:bg-black hover:text-white transition duration-300 text-center w-[11vw]">Sterling Silver</button></Link>
                            <Link to='/collections'><button type='submit' className="px-6 py-1 rounded text-black border bg-white text-[13px] hover:bg-black hover:text-white transition duration-300 text-center w-[11vw]">Freshwater Pearls</button></Link>
                            <Link to='/collections'><button type='submit' className="px-6 py-1 rounded text-black border bg-white text-[13px] hover:bg-black hover:text-white transition duration-300 text-center w-[11vw]">LOUX Gifts</button></Link>
                        </div>
                    </div>
                </div>


                {/* gifting div */}
                <div className="flex flex-col justify-center items-center mt-7">
                    <h3 className="text-3xl font-bold mt-9">-Gifting With Aura-</h3>
                    <p className="mt-3 text-sm p-10 text-center">
                        Looking for gift ideas to surprise someone special? Our ultimate Aura gift guide has everything you need to make a lasting impression. We’ve hand-picked a selection of trending accessories and gift-ready sentimental jewellery, perfect for celebrating memorable milestones in 2024.
                    </p>
                </div>

                {/* category start */}
                <div className="mt-8 text-center flex justify-center items-center w-900">
                        <Link to='/collections'><div className="relative">
                            <img src="https://www.lovisa.sg/cdn/shop/files/Sets2_Small_30acf2d5-b340-492f-a7f1-2074fffb48ce_2560x.jpg?v=1701311636" alt="" className="w-[46vw] border rounded mr-4 h-[127vh] mt-4" />
                            <button className="absolute border rounded bottom-4 left-4 px-9 py-1 bg-white text-black text-[12px]  ">Jewellery set</button>
                        </div></Link>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                    <Link to='/collections'><div className="relative">
                            <img src="https://www.lovisa.sg/cdn/shop/files/Maximalist2_Small_1_1280x.jpg?v=1701311873" alt="" className="w-[22vw] border rounded h-[63vh]" />
                            <button className="absolute bottom-4  border rounded left-4 px-10 py-1 bg-white text-black text-[12px]">Glamours</button>
                        </div></Link>
                        <Link to='/collections'><div className="relative">
                            <img src="https://www.lovisa.sg/cdn/shop/files/Minimalist2_Small_28c53ea2-6654-44d4-a857-0b931ab32717_1120x.jpg?v=1701336076" alt="" className="w-[22vw] border rounded h-[63vh]" />
                            <button className="absolute border rounded bottom-4 left-4 px-9 py-1 bg-white text-black text-[12px]">Minimlaist</button>
                        </div></Link>
                        <Link to='/collections'><div className="relative">
                            <img src="https://www.lovisa.sg/cdn/shop/files/Personalised2_Small_5405c55d-6807-4b86-9e09-166f9b899d96_2560x.jpg?v=1705311108" alt="" className="w-[22vw] border rounded  h-[63vh]" />
                            <button className="absolute bottom-4  none border rounded left-4 px-9 py-1 bg-white text-black text-[12px]">Personalised</button>
                        </div></Link>
                        <Link to='/collections'><div className="relative">
                            <img src="https://www.lovisa.sg/cdn/shop/files/Kids_Xmas2_Small_53e017c2-afd0-4a8a-8be4-ecb14c339bc9_800x.jpg?v=1705311128" alt="" className="w-[22vw] border rounded  h-[63vh]" />
                            <button className="absolute bottom-4 border rounded none left-4 px-9 py-1 bg-white text-black text-[12px]">Kids</button>
                        </div></Link>
                    </div>
                </div>


                {/* dilvery section */}
                <div className='m-9 p-11'>
                    <div className='text-[30px] mx-[1vw] '>
                        <h3>Delivery & Payments</h3>
                    </div>

                    <div className="mt-4 flex items-center text-center mx-auto w-[80vw]">

                        <div className="flex flex-row w-[30vw] items-center space-x-3 px-6 border-r-2  
                    border-black h-[10vh]">
                            <div className="flex items-center justify-center rounded-full border border-black w-10 h-10 ">
                                <img src="https://www.lovisa.sg/cdn/shop/files/Shipping_8bd88cda-9065-4f61-9fac-15d86aef52a2_160x.svg?v=1701312751" alt="" className='w-7 h-6' />
                            </div>
                            <div className="text-center cursor-pointer text-decoration-line: underline ">SHIPS WITHIN 4-7 BUSINESS DAYS
                            </div>
                        </div>

                        <div className="flex flex-row w-[30vw] items-center space-x-3 px-6 border-r-2  
                    border-black h-[10vh]">
                            <div className="flex items-center justify-center rounded-full border border-black w-10 h-10 ">
                                <img src="https://lovisa.sg/cdn/shop/files/Exchange_1c146b03-59da-4faa-b24b-69bfedae9709_160x.svg?v=1701312813" alt="" className='w-8 h-6' />
                            </div>
                            <div className=" text-center cursor-pointer text-decoration-line: underline">EASY EXCHANGE & RETURN</div>
                        </div>

                        <div className="flex flex-rowz items-center space-x-3 px-6  h-[10vh]">
                            <div className="flex items-center justify-center rounded-full border border-black w-10 h-10">
                                <img src="https://www.lovisa.sg/cdn/shop/files/SMS-Deals_b013543d-aa1a-4c31-9b60-0ec286e927cc_160x.svg?v=1701313018 " className='w-8 h-6' alt="" />
                            </div>
                            <div className=" text-center cursor-pointer text-decoration-line: underline">EXCLUSIVE SMS DEALS</div>
                        </div>

                    </div>
                </div>


                {/* last section */}
                <div className="text-right px-1 mt-[20px] flex flex-row-reverse mb-[10vh]">
                    <img src="https://www.lovisa.sg/cdn/shop/files/GIFTCARDS_HOMEBGWOTEXT_DESKTOP_2560x.jpg?v=170738847" alt="" className=' w-200 border  h-[50vh] mr-[4vw]' />
                    <div className='text-center mt-[6vw]' >
                        <h3 className="text-[38px] w-[20vw]">THE GIFT OF CHOICE</h3>
                        <p className='w-[20vw] '>Delight your loved ones with a Lovisa gift card. Choose between our Lovisa e-gift cards and piercing vouchers.</p>
                        <Link to='/piercing/gift-card'><button type='submit' className="px-9 py-1 mx-4  mt-5 text-white border bg-black text-sm rounded w-[11vw] ">E-Gift Card</button></Link>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Gifts;