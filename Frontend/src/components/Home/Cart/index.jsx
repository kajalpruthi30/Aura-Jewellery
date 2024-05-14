import React, { useState } from 'react';

function Cart({showCart, setShowCart}) {

    return (
        <div>
                <div className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center transition-opacity duration-300`}>
                {/* Overlay-Fader */}
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30 cursor-pointer' onClick={() => setShowCart(false)}></div>

                {/* Cart Header */}
                <div className={`fixed top-0 right-0 h-full w-[25vw] z-100 bg-white shadow-lg transition-transform duration-100 overflow-hidden ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="bg-[#FCECE3] h-[9vh] w-[29vw] flex justify-end items-center px-4">

                        <button className='text-[#111111] focus:outline-none' onClick={() => setShowCart(false)}>
                            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />                         </svg>
                        </button>

                        <h2 className=' w-[25vw] text-[16px] tracking-tight text-center'>SHOPPING BAG</h2>
                        <div className='w-[2.6vw] h-[2.4vw] rounded-full bg-[#ffff] flex items-center justify-center'>0</div>

                    </div>
                    <div className='my-8 text-center uppercase text-[15px] leading-6'>
                        <h3>Your bag is empty.</h3>
                        <h3>Let's fix that.</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center text-[12px]'>
                        <button className='bg-[#F5F5F5] w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP RINGS</button>
                        <button className='bg-[#F5F5F5]  w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP EARRINGS</button>
                        <button className='bg-[#F5F5F5] w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP   NECKLACES</button>
                        <button className='bg-[#F5F5F5] w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP HAIR</button>
                    </div>
                    <div className='flex justify-between tracking-wide px-4 mt-6 mb-2'>
                        <h3 className='font-bold text-[14px] leading-6'>Sub-Total</h3>
                        <h3 className='leading-6 text-[16px]'>$0.00 SGD</h3>
                    </div>
                    <div className='bg-[#FCECE3] h-[25vh] text-center uppercase tracking-wide'>
                        <h3 className='text-[11px] pt-5 pb-3 leading-6'>Free shipping on orders over $70.00 SGD!</h3>

                        {/* Horizontal line */}
                        <div className="mx-auto w-[15vw] border-b-4 rounded-sm border-white"></div>
                        <div className='flex justify-center'>
                            <div className='bg-[#111111] text-[#ffff] text-[14px] leading-6 tracking-wider text-center  uppercase p-3 mt-5 w-[26vw] hover:bg-[#ffff] hover:text-[#111111] border border-[#111111]'>Express Check - $0.00 SGD</div>
                        </div>
                    </div>
                </div>

                </div>
        </div>
    )
}
export default Cart;