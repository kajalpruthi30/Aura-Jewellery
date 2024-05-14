import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart  } from '@fortawesome/free-solid-svg-icons'
import giftCard from "../../assets/images/piercing/giftcard.png";
import Banner from "../../components/Common/Banner";


export const Pirecinggiftcart = ()=>{
    return(
        <>
        <Banner />
        <div className='my-6'>

            <div className='flex flex-col justify-center items-center'>
                <h1 className=' text-4xl  leading-1 font-thin tracking-wide'>Piercing Gift Card</h1>
                <p className=' pb-2 border-b border-black w-12'></p>
                &nbsp;
            </div>

            <div className='flex flex-row gap-10 mx-[10rem]'>
                <div  className="overflow-hidden">
                    <img className='h-[43vw] w-[35vw] hover:scale-125 transition-transform transform-gpu ' src={giftCard}/>

                    <br></br>

                    
                    <div className='flex flex-col flex-start text-sm leading-relaxed '>

                        <div className='flex flex-col flex-start text-sm leading-relaxed '>
                            <p >Shopping for someone else but not sure what to give them? Why not give <br></br>them the gift of piercing with our Aura Piercing Gift cards! <br></br>
                                Piercing gift cards are delivered via email and include instructions on how <br></br>to use them in our Singapore & Malaysian stores where the piercing service<br></br> is offered. <br></br>
                                To find your nearest piercing store, use our Store Finder.<br></br>Our gift cards have no additional processing fees but please note that any <br></br> gift card cannot be refunded or used in conjunction with any other voucher<br></br>codes.</p>
                        </div>
                        <br></br>
                        <p>SKU - PGC35</p>
                    </div>

                </div>

                <div>
                    <div><p>GIFT CARD AMOUNT</p></div>
                    <div className='flex flex-row  items-center'>
                        <select className="border border-t-gray-300 border-r-gray-300 border-l-gray-300 border-b-gray-400 w-[8vw]
                        h-[3vw] p-2 ">
                            <option value="option1">S$45.00</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                   
        <div>
        <br></br>
         <div>
         <div className="">
        <input 
          type="text" id="name"  name="name"  className="p-2 w-[31vw] block  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="NAME"/>
       </div>&nbsp;

       <div className="">
        <input 
        type="email"  id="email" name="email" className="p-2  w-[31vw] block  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500"  placeholder="EMAIL RECIPIENT"/>
      </div>&nbsp;

      <div className="">
       <textarea id="message"  name="message"  rows="4" className="p-2 w-[31vw] block  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500"  placeholder="MESSAGE"></textarea>
       <p className="text-right text-xs text-gray-500">Maximum 250 characters</p>
         </div>

        </div>
         </div><br></br>



         
         <div className="flex justify-center ">
                    <button className="px-4 py-2 w-[31vw] bg-black text-white hover:bg-white hover:text-black transition-colors duration-300    border border-t-gray-500 border-r-gray-500 border-l-gray-500 border-b-gray-500">
                        ADD TO BAG
                    </button>
                </div><br></br>
                <div className='flex items-center gap-1 justify-center text-pink-500 text-sm '>
                    <FontAwesomeIcon icon={faHeart} />
                    <p>ADD TO WISHLIST</p>
                    </div>
                    <br></br>

                    <div className='text-[12px]'>
                        <p>LOCATE YOUR NEAREST STORE →</p>&nbsp;
                        <p>SEE PIERCING STUD PRICE LIST →</p>&nbsp;
                        <p>LEARN MORE ABOUT PIERCING AT AURA →</p>
                    </div>

                




                </div>




             </div>
        </div>
        </>

    )
}

export default Pirecinggiftcart;