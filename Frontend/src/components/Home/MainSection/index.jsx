import React from 'react';
import bg from "../../../assets/images/home/component1-bg.png"
import {Link} from "react-router-dom"

function Component1(){
    return(
        <>
        <nav className="navbar relative mt-[1rem]">
            <div>     
                <img src={bg} alt="Logo" className='w-[100vw]'/>
            </div>
            <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-[1rem] text-[12px]"> 
                <Link to ='collections'><button className="tracking-wide bg-black text-white py-1 px-1 rounded border-black border-[1px] hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black w-[10rem] h-8">ALL SALE</button></Link>
                <Link to ='collections'><button className="tracking-wide bg-black text-white py-1 px-3 rounded border-black border-[1px] hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black w-[10rem] h-8">SALE EARRING</button></Link>
                <Link to ='collections'><button className="tracking-wide bg-black text-white py-1 px-3 rounded border-black border-[1px] hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black w-[10rem] h-8">SALE NECKLACES</button></Link>
                <Link to ='collections'><button className="tracking-wide bg-black text-white py-1 px-3 rounded border-black border-[1px] hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black w-[10rem] h-8">SALE WRISTWEAR</button></Link>
            </div>
        </nav> 
        </>
    )
}

export default Component1;