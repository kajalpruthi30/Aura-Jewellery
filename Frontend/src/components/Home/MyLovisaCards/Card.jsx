import React, { useState } from 'react';
import { BiLogoInstagram } from 'react-icons/bi'; // Import the Instagram logo
import { useAuth } from './PopupContext';



const Card = ({ images, index }) => {
    const { togglePopup } = useAuth();
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    const handleCardClick = () => {
        togglePopup(); // Call the togglePopup function when the card is clicked
    };    

    return (
        <div className="card-container">
            <div className='card' onClick={handleCardClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="hover-div" style={{ backgroundColor: isHovered ? 'rgba(243, 212, 194, 0.8)' : 'transparent' }}></div>
                <img src={images[index]}  className='carousel_image' alt="" />
                {/* Render Instagram logo */}
                <div className={`instagram-logo ${isHovered ? 'hovered' : ''}`}>
                    <BiLogoInstagram />
                </div>
                
            </div>
        </div>
    );
};

export default Card;