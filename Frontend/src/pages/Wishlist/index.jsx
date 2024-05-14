import React from 'react'
import { Link } from 'react-router-dom';
import TopBanner from '../../components/Common/Banner';

function Wishlist () {
    return (
        <>
            <div className="landing-page-container">
                {/* Top banner */}
                <TopBanner/>
        
                {/* Wishlist start */}
                <div className='flex items-center justify-between'>
                    <div className="mt-4 px-20 py-10 text-3xl">My Wishlist</div>
                    <div className='py-10 mt-4 mr-20'>
                        <button className='uppercase px-3 py-2 text-[15px] rounded bg-[#245959] text-[#F1F5D4] leading-0 tracking-wider '>Share Wishlist</button>
                    </div>
         </div>
                <div className='bg-[#D9EDF7] text-[#0b388f] py-4 mx-20 mb-5 rounded flex justify-center'>There are no items in your Wishlist</div>
            </div>
        </>
    )
}

export default Wishlist;