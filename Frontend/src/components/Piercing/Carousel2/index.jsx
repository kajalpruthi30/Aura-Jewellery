import React, { useState } from 'react';

function Carousel2() {
    const images = [
        { url: "https://www.lovisa.sg/cdn/shop/files/STUDEX_1_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/Cynthia_1_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_2_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_3_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/MG_7759-2_1200x.jpg?v=1613764817"},
        { url:"https://lovisa.sg/cdn/shop/files/STUDEX_6_1200x.jpg?v=1613764817"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_5_1200x.jpg?v=1613764817"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_STUDS_0003_IMG_8567_1dbc6c2c-f74d-4965-b2c2-7dc146eee15c_1200x.jpg?v=1613764817"},
        { url:"https://www.lovisa.sg/cdn/shop/files/Sara_2_1200x.jpg?v=1613764817"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_4_1200x.jpg?v=1613764817"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_STUDS_0002_IMG_8600_c0112cad-60d3-4c31-aa30-b803b37be112_1200x.jpg?v=1613764816"},
        { url:"https://www.lovisa.sg/cdn/shop/files/0001_Screen_Shot_2019-08-30_at_1.53.42_pm_7c355fc8-db29-4d6f-b7ee-502801103905_1200x.jpg?v=1613764816"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_1_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/Cynthia_1_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_2_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_3_1200x.jpg?v=1613764818"},
        { url:"https://www.lovisa.sg/cdn/shop/files/MG_7759-2_1200x.jpg?v=1613764817"},
        { url:"https://www.lovisa.sg/cdn/shop/files/STUDEX_6_1200x.jpg?v=1613764817"},
        { url: "https://www.lovisa.sg/cdn/shop/files/STUDEX_1_1200x.jpg?v=1613764818"},
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleImages = 4;
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
                {/* Previous icon */}
                <button onClick={handlePrev} className={`px-4 py-2 mx-2 text-white focus:outline-none ${currentIndex === 0 ? 'invisible' : ''}`}>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="w-[30px] h-[30px]" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg>
                </button>

                <div className="flex overflow-hidden gap-10">
                    <div className="flex transition-transform duration-300 gap-3" style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="min-w-[25%] relative">
                                <img src={image.url} alt={`Slide ${index}`} className="w-[30vw]" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Next icon */}
                <button onClick={handleNext} className={`px-4 py-2 mx-2 text-white focus:outline-none ${currentIndex + visibleImages >= totalImages ? 'invisible' : ''}`}>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="w-[30px] h-[30px]" viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg>
                </button>
            </div>
        </>
    );
}

export default Carousel2;
