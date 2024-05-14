import React from 'react';
import Card from '../Card';
import Banner from "../Banner"

function Collections() {
  // Define the array of images
  const images = [
    { url: "https://cdn.shopify.com/s/files/1/0264/9672/9185/files/51253769.jpg?v=1712719882", heading: "Silver Double Stone Statement Drop Earrings", price: "$12.5" },
    { url: "https://cdn.shopify.com/s/files/1/0264/9672/9185/products/51076009_85a5ac70-a30d-400e-8e4a-a49fd0cc6c27.jpg?v=1701263712", heading: "Silver Diamante Leaf Drop Earrings", price: "$24.5" },
    { url: "https://cdn.shopify.com/s/files/1/0264/9672/9185/products/51287443.jpg?v=1702432001", heading: "Black Beaded Layered Necklace", price: "$5" },
    { url: "https://cdn.shopify.com/s/files/1/0264/9672/9185/products/51396985_01a11528-99c6-497a-aee9-a5036ac4b890.jpg?v=1701662511", heading: "Silver Plated Classic Stud Earrings", price: "$35.5" },
    { url: "https://cdn.shopify.com/s/files/1/0264/9672/9185/products/50864089_94775cab-344b-4933-9e3d-fbe874939552.jpg?v=1701267720", heading: "Silver Diamante Bracelet", price: "$20" },
    { url: "https://cdn.shopify.com/s/files/1/0264/9672/9185/products/50736805_fd6fe17a-a653-4433-ac81-39d298b03472.jpg?v=1701267625", heading: "Silver Pearl Stretch Bracelet 5-Pack", price: "$19.5" },
  ];


  const roundedImages = [
    {url: "https://www.lovisa.sg/cdn/shop/files/58_sale-earrings_50687619_160x.jpg?v=1709839215", heading: "Earrings"},
    {url: " https://www.lovisa.sg/cdn/shop/files/57_sale-body-jewellery_51148829_160x.jpg?v=1709839270", heading: "Body Jwellery"},
    {url: "https://www.lovisa.sg/cdn/shop/files/187_sale-bracelets_51097714_160x.jpg?v=1709839351", heading: "Bracelets"},
    {url: " https://www.lovisa.sg/cdn/shop/files/60_sale-necklaces_51157524_160x.jpg?v=1709839271", heading: "Necklaces"},
    {url: "https://www.lovisa.sg/cdn/shop/files/74_sale-wristwear_51375805_3187775e-f5f6-494d-b023-78f8d4489692_160x.jpg?v=1711149084", heading: "Wristwear"},
    {url: "https://www.lovisa.sg/cdn/shop/files/59_sale-hair_51481940_160x.jpg?v=1709839270", heading: "Hair"},
    {url: "https://www.lovisa.sg/cdn/shop/files/75_sale-accessories_51458348_160x.jpg?v=1709839271", heading: "Accessories"},
    {url: "https://www.lovisa.sg/cdn/shop/files/55_offers_51463007_9db806f1-ba72-47aa-b677-af78dd83ea26_160x.jpg?v=1709839671", heading:"Bundle Offers"}
  ]

  const repeatedImages = [];
  for (let i = 0; i < 10; i++) {
    repeatedImages.push(...images);
  }

  return (

    <div>

      <Banner />

      <div className="flex flex-col justify-center items-center align-center mb-[3rem]">

          <div className='my-5'>
              <h1 className=" text-center text-4xl my-5">Mid Season Sale</h1>
              <p className='tracking-wide'>Mid-Season Sale has landed at Aura! Level up your jewellery collection with signature jewellery pieces and trending accessories, including pendant<br/>
              <span className="block mx-auto text-center"> and chain necklaces hoop and huggie earrings hair accessories body jewellery and so much.</span></p>
          </div> 

          <div className='flex gap-7 my-4 items-center justify-center'>
          {roundedImages.map((image, index) => (
            <div key={index} className='w-[6vw] flex flex-col items-center'>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={image.url} className=" w-full h-full object-cover" alt="Ring" />
              </div>
              <p className="text-gray-800 text-sm uppercase mt-2 text-center">{image.heading}</p>
            </div>
          ))}
          </div>
      </div>


      <div className="grid grid-cols-6 gap-6 px-[6rem]">
        {repeatedImages.map((image, index) => (
          <div key={index}>
            <Card images={image} />
          </div>
        ))}
      </div>

    </div>

  );
}

export default Collections;
