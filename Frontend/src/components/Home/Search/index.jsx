import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

function Search({ showSearch, setShowSearch }) {

    const values = [
        { text: 'Bracelets' },
        { text: 'Necklaces' },
        { text: 'Rings' },
        { text: 'Pearl' },
        { text: 'Earrings' },
        { text: 'Butterfly' },
        { text: 'Watch' },
        { text: 'Pearl Necklaces' },
        { text: 'Anklet' },
        { text: 'Cross' }
    ];

    return (
        <>
        
        <div className={`absolute w-full flex items-center justify-center transition-opacity duration-300`}>

            {/* Overlay-Fader */}
            <div className='fixed top-40 bottom-0 left-0 right-0 bg-black opacity-30 cursor-pointer' onClick={() => setShowSearch(false)}></div>

            <div className={`z-50 bg-white w-full transition-all duration-300`}>
                <div className="h-[15vh] px-[5.8rem] mt-[4rem] mb-[8rem]">

                    <div className="flex space-between align-center border-b pb-2 border-black">
                        <div className="w-full border-black">
                            <form>
                                <input
                                    type='text'
                                    className='text-[16px] focus:outline-none font-thin tracking-wider w-full'
                                    placeholder='Search Our Store'
                                />
                            </form>
                        </div>
                        <SearchRoundedIcon />
                        <div>
                        </div>
                    </div>

                    <div className="my-[2.5rem]">
                        <p className="font-bold text-[14px]">Trending Searches</p>
                    </div>

                    <div className="flex flex-start gap-6">
                        {values.map((value, index) => (
                            <div key={index.text} className="text-gray-700 border rounded-2xl flex justify-center align-center items-center gap-2 px-2 py-1 hover:bg-[#FF8557] hover:cursor-pointer hover:text-white">
                                <p className="text-[12px]"><StarBorderRoundedIcon /></p>
                                <p className="text-[14px] text-sm pt-1">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Search;
