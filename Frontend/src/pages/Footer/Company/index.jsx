import React from "react";
import TopBanner from "../../../components/Common/Banner";

function Company() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <TopBanner />
            <div className='flex flex-col justify-center items-center mt-[5vh] w-[48%]'>
                <h1 className='text-[30px] border-black'>About US</h1>
                <div className="border-b-[1px] w-[4vw] border-black mt-2"></div>
                <h1 className='text-[28px] mt-6'>Our Mission</h1>
                <p className="text-[14px] mt-5 text-center">To bring brilliantly affordable, on-trend jewellery to the WORLD, whilst delighting our customers with our commitment to continually improve your Lovisa experience</p>
            </div>

            {/* //divider */}
            <div className="h-[6vh] border-r mt-6" ></div>

            {/* images&content */}
            <div className="flex w-[75%] mt-[10vh] gap-[7rem] pb-10 mb-12">
                <div className="w-[30vw]  mt-[11vh] ">
                    <h1 className="text-[28px]">Our Brand</h1>

                    <p className="text-[14px] mt-7 flex-wrap">Lovisa was created out of a need for on-trend fashion jewellery at ready-to-wear prices. Our trend spotting departments worldwide take inspiration from couture runways and current street style to deliver new, must-have styles to our customers.</p>
                    <p className="text-[14px] mt-7 flex-wrap">We are a fashion-forward jewellery brand that caters to everyone, with 150 new styles being delivered to stores each week. We give exceptional customer service and apply our core belief, It’s about you, always to everything we do.</p>
                </div>
                <div className="pl-[10vw]">
                    <img src="https://www.lovisa.sg/cdn/shop/files/Screen_Shot_2019-10-25_at_12.07.22_pm_600x600.png?v=1613673500" alt="" className="h-[73vh] w-[40vw]" />
                </div>
            </div>


            <div className="w-[80%]">
                <div className="mt-4 flex items-center text-center pb-11">

                    <div className="flex flex-col w-[30vw] items-center space-x-3 px-6 border-r  h-[16vh]  mt-6">
                        <h1 className="text-[18px] ">OUR CUSTOMER</h1>
                        <p className="text-[14px] pt-4 text-gray-500 flex-wrap">Our customer is stylish, social and confident. They don't underestimate the power of the perfect accessory.</p>
                    </div>

                    <div className="flex flex-col w-[30vw] items-center space-x-3 px-6 border-r h-[16vh]  mt-6">
                        <h1 className="text-[18px] ">OUR STYLISTS</h1>
                        <p className="text-[14px] pt-4 text-gray-500 flex-wrap">With Lovisa Stylists in every store, we bring our customers expert advice on current trends, inspirational styling techniques and personalised tips to provide an elevated shopping experience.</p>
                    </div>

                    <div className="flex flex-col w-[30vw] items-center space-x-3 px-6  h-[16vh]  mt-6">
                        <h1 className="text-[18px] ">OUR EXPANSION</h1>
                        <p className="text-[14px] pt-4 text-gray-500 flex-wrap">After launching our first store in April 2010, Lovisa can now be found in over 30 countries globally.</p>
                    </div>
                </div>
            </div>
            <div className="h-[6vh] border-r mt-[10vh] mb-[10vh]" ></div>

            <div className="flex w-[75%]  pb-10 mb-12">
                <div className="w-[25vw]  mt-[1vh] ">
                    <h1 className="text-[28px]">Our Team</h1>

                    <p className="text-[14px] mt-7 flex-wrap text-gray-500">Here at Lovisa, we are passionate, dedicated, hard-working and fun-loving team players. We are devoted to fashion, style and customer service. All team members are Lovisa ambassadors, who live and breathe our Lovisa culture commitments.</p><br/><br/>

                    <p className="text-[14px] mt-7 flex-wrap text-gray-500">Lovisa provides exceptional opportunities to grow within our brand. If you are inspired by global trends and thrive in a fast-paced environment, we would love for you to join us.</p>

                    <button className="border-[1px] border-gray-300 mt-6 p-2 hover:bg-black hover:text-white hover:border-black text-[14px] tracking-wide">VIEW OUR CAREERS</button>
                </div>
                
            </div>
        </div>
    );
}

export default Company;