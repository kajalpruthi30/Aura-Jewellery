import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

const MyCarousel = ({ images,  togglePopup}) => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 2000 }, items: 6 },
        desktop: { breakpoint: { max: 2000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="carousel-container">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all 0.5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {images.map((image, index) => (
                    <div key={index}><Card images={images} index={index} togglePopup={togglePopup} /></div>
                ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel;