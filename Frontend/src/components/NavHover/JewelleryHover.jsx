import React from 'react';
import { Link } from 'react-router-dom';

function JewelleryHover({ setShowComponent }) {
    const paraStyle = {
        textUnderlineOffset: '4px',
    };

    return (
        <div className='flex justify-center gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
            <div>
                <p className='uppercase py-1.5'>Earrings</p>
                <hr className='mb-3 w-full'/>
                <div className='flex gap-[4rem]'>
                    <div>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Earrings</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Statement Earrings</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Hoops</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Drops & Dangles</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Studs</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Huggies</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Helix</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Flat Backs</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <p className='uppercase py-1.5'>Rings</p>
                <hr className='mb-3 w-full'/>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Rings</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Stacking Rings</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Engagement Rings</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Cocktail Rings</p>
                </Link>
            </div>

            <div>
                <p className='uppercase py-1.5'>Necklace</p>
                <hr className='mb-3 w-full'/>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Necklaces</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Pendant Necklaces</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Layered Necklaces</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Chokers</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Statement Necklaces</p>
                </Link>
            </div>

            <div>
                <p className='uppercase py-1.5'>Body Jewellery</p>
                <hr className='mb-3 w-full'/>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Body Jewellery</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Nose Rings & Studs</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Belly Rings</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Fake Piercings</p>
                </Link>
            </div>

            <div>
                <p className='uppercase py-1.5'>More</p>
                <hr className='mb-3 w-full'/>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Bracelets</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Anklets</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Sets</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Kids Jewellery</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Watches</p>
                </Link>
            </div>

            <div>
                <p className='uppercase py-1.5'>More</p>
                <hr className='mb-3 w-full'/>
                <div className='flex gap-[4rem]'>
                    <div>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Gold Plated</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sterling Silver</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Surgical Steel</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Titanium</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Gold</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Silver</p>
                        </Link>
                        <Link to="/collections">
                            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Rose Gold</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <p className='uppercase py-1.5'>Collection</p>
                <hr className='mb-3 w-full'/>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Pearl</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sensitive</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Waterproof</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Initials</p>
                </Link>
                <Link to="/collections">
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Cubic Zirconia</p>
                </Link>
            </div>
        </div>
    );
}

export default JewelleryHover;
