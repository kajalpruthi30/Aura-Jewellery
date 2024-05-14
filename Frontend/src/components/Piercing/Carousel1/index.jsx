import React, { useState } from 'react';

function Carousel1() {
    const images = [
        { url: "https://www.lovisa.sg/cdn/shop/files/50975723_300x.jpg?v=1708112577", heading: "Silver Double Stone Statement Drop Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50914036_300x.jpg?v=1708112625", heading: "Silver Diamante Leaf Drop Stud"},
        { url:"https://lovisa.sg/cdn/shop/files/50914067_300x.jpg?v=1708113213", heading: "Silver Plated Classic Cubic Zirconia Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975679_300x.jpg?v=1708113453", heading: "Silver Plated Classic Cubic Zirconia Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/51010805_300x.jpg?v=1708113547", heading: "Silver Plated Diamante Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975730_300x.jpg?v=1708112840", heading: "Silver Pearl Stretch Bracelet 5-Pack"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975587_300x.jpg?v=1708113738", heading: "Silver Double Stone Statement Drop Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/51010706_300x.jpg?v=1708113643", heading: "Silver Diamante Leaf Drop Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/51010713_300x.jpg?v=1708113690", heading: "Silver Pearl Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/51010713_300x.jpg?v=1708113690", heading: "Silver Plated Classic Cubic Zirconia Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975563_300x.jpg?v=1708113081", heading: "Silver Plated Thick Diamante Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975822_300x.jpg?v=1708113357", heading: "Silver Pearl Zircona Piercing Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50981410_300x.jpg?v=1708112722", heading: "Silver Double Stone Statement Drop Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/51010768_300x.jpg?v=1708113034", heading: "Silver Diamante Leaf Drop Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975846_300x.jpg?v=1708112937", heading: "Gold 24K Diamante Star Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975556_300x.jpg?v=1708112986", heading: "Silver Pearl Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/50975716_300x.jpg?v=1708112674", heading: "Gold 24K Star Stud"},
        { url:"https://www.lovisa.sg/cdn/shop/files/51010782_300x.jpg?v=1708113129", heading: "Silver Green Stone Stud"},
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleImages = 6;
    const totalImages = images.length;

    const handleNext = () => {
        if (currentIndex + visibleImages < totalImages) {
            setCurrentIndex(currentIndex + visibleImages);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - visibleImages);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center my-8 mx-[8%]">
                <button onClick={handlePrev} className={`px-4 py-2 mx-2 text-white focus:outline-none ${currentIndex === 0 ? 'invisible' : ''}`}>
                <svg aria-hidden="true" focusable="false" role="presentation" className="w-[30px] h-[30px]" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg>


                </button>
                <div className="flex overflow-hidden">
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="min-w-[16.666%] relative">

                                <img src={image.url} alt={`Slide ${index}`} className="w-[11vw] h-[30vh] hover:opacity-80 transition-opacity duration-300" />
                                {/* Overlay */}
                                <div className="absolute top-0 inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 text-[#131010] h-[30vh] w-[11vw] border-[#000000] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <p className='text-center text-[12px] px-3 text-[#000000] leading-6 uppercase'>
                                    {image.heading}
                                </p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className={`px-4 py-2 mx-2 text-white focus:outline-none ${currentIndex + visibleImages >= totalImages ? 'invisible' : ''}`}>
                <svg aria-hidden="true" focusable="false" role="presentation" className="w-[30px] h-[30px]" viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg>

                </button>
            </div>
        </>
    );
}

export default Carousel1;
