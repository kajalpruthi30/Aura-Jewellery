import React from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = () => {
  return (
    <>
      <div className="flex gap-3 mx-20 mt-20">
        {/* Large Image */}
        <div className="w-1/2 flex flex-col relative">
        <Link to='/gifts'><div>
            <img src={'https://www.lovisa.sg/cdn/shop/files/SGEU_SterlingSilver_-5blocklargetile_3840x.jpg?v=1712117539'} alt="Main" className="w-full h-[100vh] object-cover rounded cursor-pointer" />
            <button className="absolute bottom-0 w-[12vw] text-[0.7em] leading-5 left-0 m-4 bg-white text-black py-1 px-1 rounded">
              STERLING SILVER
            </button>
          </div></Link>
        </div>
        
        {/* Grid of Smaller Images */}
        <div className="w-1/2 grid grid-cols-2 gap-3">
          <Link to='/collections'><div className="relative">
            <img src={'https://www.lovisa.sg/cdn/shop/files/SG_SnakeAccessories_-smalltile_3840x.jpg?v=1712118094'} alt="Image 2" className="w-full h-[49vh] object-cover rounded cursor-pointer" />
            <button className="absolute bottom-0 w-[12vw] text-[0.7em] leading-5 left-0 m-4 bg-white text-black py-1 px-1 rounded">
              SNAKE JWELLERY
            </button>
          </div></Link>
          <Link to='/collections'><div className="relative">
            <img src={'https://www.lovisa.sg/cdn/shop/files/Butterfiles_SmallTile_1_1_3840x.jpg?v=1712118281'} alt="Image 3" className="w-full h-[49vh] object-cover rounded cursor-pointer" />
            <button className="absolute bottom-0 w-[12vw] text-[0.7em] leading-5 left-0 m-4 bg-white text-black py-1 px-1 rounded">
              BUTTERFLY JWELLERY
            </button>
          </div></Link>
          <Link to='/collections'><div className="relative">
            <img src={'https://www.lovisa.sg/cdn/shop/files/SG-EU_TitaniumJewellery-SmallTile_3840x.jpg?v=1710984223'} alt="Image 2" className="w-full h-[49vh] object-cover rounded cursor-pointer" />
            <button className="absolute bottom-0 w-[12vw] text-[0.7em] leading-5 left-0 m-4 bg-white text-black py-1 px-1 rounded">
              TITANIUM JWELLERY
            </button>
          </div></Link>
          <Link to='/collections'><div className="relative">
            <img src={'https://www.lovisa.sg/cdn/shop/files/Botanical_SmallTile_3840x.jpg?v=1712118481'} alt="Image 3" className="w-full h-[49vh] object-cover rounded cursor-pointer" />
            <button className="absolute bottom-0 w-[12vw] text-[0.7em] leading-5 left-0 m-4 bg-white text-black py-1 px-1 rounded">
              FLORAL
            </button>
          </div></Link>

        </div>
      </div>
    </>
  );
}

export default ImageGallery;