import React from 'react'
import TopBanner from '../../components/Common/Banner'
import Carousel2 from "../../components/Piercing/Carousel2"
import PiercingCard from './PiercingEditCard';


function PiercingEdit() {

    const cardData = [
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS_35e3162e-b2f5-48bd-8ced-6591424d34b7_480x.png?v=1673494285', heading: 'Industrial' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS3_caac7852-3777-4f64-b1c2-f9fde7261020_480x.png?v=1673494365', heading: 'Huggies' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS5_a4f78a8e-3e32-476f-a279-c56b97220c7c_480x.png?v=1673494424', heading: 'Clickers & hinged rings' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS7_41717560-4669-4429-8475-efc13e918eb9_480x.png?v=1673494581', heading: 'Barbells' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS9_d3b22491-c7f2-461e-ace6-5f5afbb0dc35_480x.png?v=1673494673', heading: 'Nipple' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS2_dca8f16e-9c73-4182-9e43-4f6be8e98bdb_480x.png?v=1673494837', heading: 'Flat back' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS12_55083b5f-722a-46b8-bd5f-6651040d0b02_480x.png?v=1673495083', heading: 'Belly' },
        { image: 'https://www.lovisa.sg/cdn/shop/files/LOVSIGN-223_EDIT_JEWELLERY-THUMBS11_b2da2182-efe8-4f6d-ac0f-0aeeec65b3ac_480x.png?v=1673494774', heading: 'Open end rings' },

    ];

    const arrCard = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
            array.slice(index * size, index * size + size)
        );
    };

    const chunkedData = arrCard(cardData, 4);

    return (
        <div className='flex flex-col justify-center overflow-hidden'>
            {/* Top Banner */}
            <TopBanner />

            {/* Piercing Edit Start */}
            <div className='my-5'>
                <img src={'https://www.lovisa.sg/cdn/shop/files/edit_HERO_DESK_3840x.png?v=1673493004'} alt='Piercing edit banner' />
            </div>

            <div className='flex items-center justify-center w-[100vw]'>
                <div className='w-[50vw]'>
                    <img src={"https://www.lovisa.sg/cdn/shop/files/Lowdown_Piercing_Image_2560x.png?v=1673493053"} alt="Lowdown Piercing" />
                </div>
                <div className='w-[50vw]'>
                    <img src={'https://www.lovisa.sg/cdn/shop/files/Lowdown_Piercing_Text_3840x.png?v=1673493070'} alt='Lowdown on Piercing' />
                </div>
            </div>

            <div className='flex items-center justify-center w-[100vw] my-5'>
                <div className='w-[50vw]'>
                    <img src={'https://www.lovisa.sg/cdn/shop/files/Piercing_Stack_Trend_Text_3840x.png?v=1673493189'} alt="Stacking" />
                </div>
                <div className='w-[50vw]'>
                    <img src={'https://www.lovisa.sg/cdn/shop/files/800X415_2_3840x.png?v=1673495350'} alt='Stacking' />
                </div>
            </div>

            <div className='mt-[5rem] flex flex-col items-center justify-center'>
                <h1 className='py-1 text-[2.6rem] text-[#8f7047]'><em>Styling Suite</em></h1>
                <p className='pt-9 text-[#111111] leading-5'>Get inspired! Find new ways to layer styles and stock them high for a perfectly curated look!</p>
            </div>

            {/* Carousel-2 */}
            <div className='my-[3rem]'>
                <Carousel2 />
            </div>

            <div className='my-[2rem] text-center'>
                <h1 className='my-[2rem] text-3xl leading-6'>- PIERCING PLACEMENT GUIDE -</h1>
                <div className='mt-[4rem]'><img src={"https://www.lovisa.sg/cdn/shop/files/placement_guide_DESK_3840x.png?v=1673494151"} alt="Piercing placement guide" /> </div>
            </div>

            <div className='flex flex-col text-center'>
                <h1 className='my-10 text-3xl leading-6'>- SHOP BY PIERCING -</h1>

                <div className='mx-10'>
                    {chunkedData.map((chunk, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center mb-1 gap-9">
                            {chunk.map((piercing, index) => (
                                <PiercingCard key={index} heading={piercing.heading} image={piercing.image} />
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className='my-[2rem]'>
                <img src={'https://www.lovisa.sg/cdn/shop/files/Untitled_design_c055b3fc-26f1-43df-b85d-d63b0ecccc34_2560x.png?v=1673925406'} alt='Store Locator' />
            </div>
        </div>
    )
}

export default PiercingEdit