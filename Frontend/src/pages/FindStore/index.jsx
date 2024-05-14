import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Banner from "./../../components/Common/Banner"


function Store() {
    
    return(
        <>
        <Banner/>
        <div className='flex items-center align-center w-[100%] mb-[4rem]'>

             <div className='ml-[6rem] w-[50%] mr-[2rem]'>

                {/* First div */}
                <div className='py-[7rem]'>
                    <h1 className='text-4xl font-thin tracking-wide'>Store locator</h1>
                    <p className=' pb-2 border-b border-black w-12'></p>
                    <br></br>
                    <p className='leading-2 font-thin tracking-wide'>Use the store locator below or this  <span style={{ fontWeight: 'bold' }}>list of locations</span> to find
                    <br/> where in the world can you find our beautiful jewellery.</p>
                </div>

                <div className='w-[47vw]'>
                    <div className='flex items-center align-center w-full my-1 border-b pb-2'>
                        <FontAwesomeIcon icon={faLocation} className='mt-1' />
                        <form className='relative'>
                        <input
                            type='text'
                            className='text-sm pl-4 focus:outline-none font-thin tracking-wider w-[40vw]'
                            placeholder='ENTER YOUR LOCATION'
                        />
                        </form>
                        <FontAwesomeIcon icon={faSearch} className='mx-[5rem]' />
                    </div>

                    {/* <div>
                        <div className='leading-2 font-thin tracking-wide my-2'>
                            <input type="checkbox" id="earPiercing" name="piercingType" /> &nbsp;
                            <label htmlFor="earPiercing" className="mr-2">Display stores with Ear Piercing available</label>
                        </div>

                        <div className='leading-2 font-thin tracking-wide my-2'>
                            <input type="checkbox" id="nosePiercing" name="piercingType" /> &nbsp;
                            <label htmlFor="nosePiercing" className="mr-2">Display stores with Nose Piercing available</label>
                        </div>

                        <div className='leading-2 font-thin tracking-wide my-2'>
                            <input type="checkbox" id="nosePiercing" name="piercingType" /> &nbsp;
                            <label htmlFor="nosePiercing" className="mr-2">Display stores with 14ct Premium Piercing available</label>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='w-[50%]'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1IBcOEZlGSUmmVWhoi-QFN1oDoyA&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>
            </div>
        </div>
        
    </>
    )

}

export default Store;
