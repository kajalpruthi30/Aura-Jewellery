import React, {useState} from 'react';
import './Card.css'

import MyCarousel from './LovisaCarousel';
import { PopupProvider } from './PopupContext';
import Popup from './PopUp';


const MyLovisaCards = ({images}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); // Set the selected image index
    setIsOpen(true); // Open the popup
  };

  const url = [
    'https://scontent.cdninstagram.com/v/t51.2885-15/441587509_335199666256754_4633467419162552774_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=puOgrNmG8XcQ7kNvgGk7zTI&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBI2vgURzvSOHwkiUsHvF3CbSVzcIZ3TjAfQh9R7YhQyg&oe=663FF712',

    'https://scontent.cdninstagram.com/v/t51.2885-15/441561218_773148294904679_2969644745407194635_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=izk6_SjNjp4Q7kNvgHizLSi&_nc_oc=AdjfI8rk6LYev603B33QvXZa7LfSdNXP5NhxSeGeh-ihQwilNqlGsBtDb4zMcitgTDE&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDFEjcmA47wPbqV-9oMlnGHUkWelGL5G_dKEGQl2Rskpg&oe=663FEF17',

    'https://scontent.cdninstagram.com/v/t51.2885-15/441027468_447454981132550_3915284273846163031_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=Gi-XuHnTUZAQ7kNvgEN6ZjQ&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDC8MeHQD2mBE-DEbEtP3Ln38mgVva5kTRt9dtY5QMhMQ&oe=663FCFF5',

    'https://scontent.cdninstagram.com/v/t51.2885-15/441558189_415128231322001_6188669352493663909_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=2yosSFa0F1QQ7kNvgGDrelY&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfB-oYZAGU5V7dlMb5_e8HbLB0WsbEZI-i99flrHjvmrZw&oe=663FCF64',

    'https://scontent.cdninstagram.com/v/t51.2885-15/440877342_1201582257879894_7968376455956952002_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=HpzScVNcY90Q7kNvgGoOaCK&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAXGDobjWbe7gtmGpUr0QdyKTxvq8Y9P3blsj1RDjYnzQ&oe=663FD23D',

    'https://scontent.cdninstagram.com/v/t51.2885-15/440936930_1015032399966930_2165692649732686300_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=4fWLknBmwkQQ7kNvgGh0FFe&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBvUK0T7HoC_FKJ_MIvNUiq8f-IIV8ehdP-cgxtHHVXNQ&oe=663FDBC8',

];

  return (
    <>
      <div className='text-2xl w-full text-center mt-[5em] tracking-wide'>#MYAURA</div>

      <PopupProvider>
        <MyCarousel images={url} handleImageClick={handleImageClick}/>
        <Popup images={url} isOpen={isOpen} setIsOpen={setIsOpen} selectedImageIndex={selectedImageIndex} />
      </PopupProvider>

      <div className='pt-[2rem] pb-[5rem] text-[#000000] text-sm tracking-tight cursor-pointer hover:underline'>
        <div className='w-full text-center uppercase leading-6'>show it to the world on instagram </div>
        <div className='w-full text-center '>#MYAURA @AURAJWELLERY </div>
      </div>
    </>
  );
}
export default MyLovisaCards;


