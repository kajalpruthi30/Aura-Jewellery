import React, { useState } from 'react'; 
 
const FAQAccordion = () => { 
    // Maintain separate state variables for each FAQ item 
    const [isOpen1, setIsOpen1] = useState(false); 
    const [isOpen2, setIsOpen2] = useState(false); 
    const [isOpen3, setIsOpen3] = useState(false); 
    const [isOpen4, setIsOpen4] = useState(false); 
    const [isOpen5, setIsOpen5] = useState(false); 
    const [isOpen6, setIsOpen6] = useState(false); 
    const [isOpen7, setIsOpen7] = useState(false); 
    const [isOpen8, setIsOpen8] = useState(false); 
 
 
    // Function to toggle the state of the corresponding FAQ item 
    const toggleAccordion = (faqNumber) => { 
        switch (faqNumber) { 
            case 1: 
                setIsOpen1(!isOpen1); 
                break; 
            case 2: 
                setIsOpen2(!isOpen2); 
                break; 
            case 3: 
                setIsOpen3(!isOpen3); 
                break; 
            case 4: 
                setIsOpen4(!isOpen4); 
                break; 
            case 5: 
                setIsOpen5(!isOpen5); 
                break; 
            case 6: 
                setIsOpen6(!isOpen6); 
                break; 
            case 7: 
                setIsOpen7(!isOpen7); 
                break; 
                case 8: 
                setIsOpen8(!isOpen8); 
                break; 
            default: 
                break; 
        } 
    }; 
 
    return ( 
        <div className='w-[100vw] flex flex-col gap-10 items-center justify-center my-[4rem]'> 
            {/* 1st FAQ */} 
            <div className='border-b-[1px] border-[#000000] w-[73vw]'> 
                <div className='flex items-center justify-between py-5'> 
                    <h1 className='uppercase text-3xl text-[#111111] tracking-tight'>Piercing Station</h1> 
                    <div onClick={() => toggleAccordion(1)}> 
                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" alt="Arrow" style={{ filter: 'brightness(0%)', stroke: "currentColor" }} className={`w-7 h-4 transform ${isOpen1 ? 'rotate-180' : ''}`} /> 
                    </div> 
                </div> 
 
                {/* Open toggle */} 
                <div style={{ maxHeight: isOpen1 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                    <div className="px-4 py-14 flex gap-5 items-center justify-between"> 
                        {/* FAQ Content */} 
                        <div className='w-[50%]'> 
                            <img src={'https://www.lovisa.sg/cdn/shop/files/PIERCING_STATION_3840x.jpg?v=1613767910'} alt='img' /> 
                        </div> 
                        <div className='w-[50%] text-[0.9rem] text-[#111111]'> 
                            <p>The Aura Piercing Station is a clean and sterile environment, with a strict sanitization procedure that is performed every day as well as before & after every piercing is performed. We use the latest Studex System 75 piercing device and our Piercing Stylists are fully trained in its use. Your ears will be pierced in an hygienic environment using pre-sterilised tools and individually packaged sterile studs that are hypoallergenic, nickel compliant and made from Surgical Stainless Steel.<br /><br /> 
                                We’ve done everything possible to make sure you feel welcome and comfortable with the procedure when you visit our Piercing stores. We’ll take the time to understand what you are looking for and after the piercing go through the correct aftercare procedures. This is why we’ve become the trusted name in piercing and why our customers choose Aura as their piercing destination.</p> 
                        </div> 
                    </div> 
                    <div className='border-b-[1px] border-[#000000]'></div> 
                </div> 
            </div> 
 
            {/* 2nd FAQ */} 
            <div className='border-b-[1px] border-[#000000] w-[73vw]'> 
                <div className='flex items-center justify-between py-5'> 
                    <h1 className='uppercase text-3xl text-[#111111] tracking-tight'>Piercing System</h1> 
                    <div onClick={() => toggleAccordion(2)}> 
                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" alt="Arrow" style={{ filter: 'brightness(0%)', stroke: "currentColor" }} className={`w-7 h-4 transform ${isOpen2 ? 'rotate-180' : ''}`} /> 
                    </div> 
                </div> 
 
                {/* Open toggle */} 
                <div style={{ maxHeight: isOpen2 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                    <div className="px-4 py-14 flex gap-5 items-center justify-between"> 
                        {/* FAQ Content */} 
                        <div className='w-[50%]'> 
                            <img src={'https://www.lovisa.sg/cdn/shop/files/PIERCING_STATION_3840x.jpg?v=1613767910'} alt='img' /> 
                        </div> 
                        <div className='w-[50%] text-[0.9rem]'> 
                            <p>The Aura Piercing Station is a clean and sterile environment, with a strict sanitization procedure that is performed every day as well as before & after every piercing is performed. We use the latest Studex System 75 piercing device and our Piercing Stylists are fully trained in its use. Your ears will be pierced in an hygienic environment using pre-sterilised tools and individually packaged sterile studs that are hypoallergenic, nickel compliant and made from Surgical Stainless Steel.<br /><br /> 
                                We’ve done everything possible to make sure you feel welcome and comfortable with the procedure when you visit our Piercing stores. We’ll take the time to understand what you are looking for and after the piercing go through the correct aftercare procedures. This is why we’ve become the trusted name in piercing and why our customers choose Aura as their piercing destination.</p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
 
            {/* 3rd FAQ */} 
            <div className='border-b-[1px] border-[#000000] w-[73vw]'> 
                <div className='flex items-center justify-between py-5'> 
                    <h1 className='uppercase text-3xl text-[#111111] tracking-tight'>Aftercare</h1> 
                    <div onClick={() => toggleAccordion(3)}> 
                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" alt="Arrow" style={{ filter: 'brightness(0%)', stroke: "currentColor" }} className={`w-7 h-4 transform ${isOpen3 ? 'rotate-180' : ''}`} /> 
                    </div> 
                </div> 
 
                {/* Open toggle */} 
                <div style={{ maxHeight: isOpen3 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                    <div className="px-4 py-14 flex justify-center"> 
                        {/* FAQ Content */} 
                        <div className='w-full'> 
                            <img src={'https://www.lovisa.sg/cdn/shop/files/PIERCING_LANDING_PAGE_2020_AFTERCARE_WEB_3840x.jpg?v=1613767911'} alt='img' /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
 
            {/* 4th FAQ */} 
            <div className='border-b-[1px] border-[#000000] w-[73vw]'> 
                <div className='flex items-center justify-between py-5'> 
                    <h1 className='text-3xl text-[#111111] tracking-tight'>FAQ's</h1> 
                    <div onClick={() => toggleAccordion(4)}> 
                        <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" alt="Arrow" style={{ filter: 'brightness(0%)', stroke: "currentColor" }} className={`w-7 h-4 transform ${isOpen4 ? 'rotate-180' : ''}`} /> 
                    </div> 
                </div> 
 
                {/* Open toggle */} 
                <div style={{ maxHeight: isOpen4 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                    <div className="px-4 py-14 flex gap-2 items-center justify-between"> 
                        {/* FAQ Content */} 
                        <div className='flex flex-col gap-1 items-center justify-center mx-auto'> 
 
                            {/* 1st faq */} 
                            <div className='flex items-center justify-between w-[50vw] cursor-pointer border-b-[1px] py-3' onClick={() => toggleAccordion(5)}> 
                                <div className='uppercase text-[1rem] font-semibold text-[#111111] leading-6'>Does ear piercing hurt?</div> 
                                <div> 
                                    <svg aria-hidden="true" focusable="false" role="presentation" className={`w-7 h-4 transform ${isOpen5 ? 'rotate-90' : ''} w-[30px] h-[30px] transform rotate-90`} viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg> 
                                </div> 
                            </div> 
 
                            {/* Faq nested toggle */} 
                            <div style={{ maxHeight: isOpen5 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                                <div className='text-[#111111] py-8 leading-6 w-[50vw] text-sm'>No. Our Studex ear piercing system has been carefully designed to pierce ears virtually pain free. When performed properly, most people feel little or no discomfort.</div> 
                            </div> 
 
                            {/* 2nd faq */} 
                            <div className='flex items-center justify-between w-[50vw] cursor-pointer border-b-[1px] py-3' onClick={() => toggleAccordion(6)}> 
                                <div className='uppercase text-[1rem] font-semibold text-[#111111] leading-6'>Do I need to consent to have my ears pierced?</div> 
                                <div> 
                                    <svg aria-hidden="true" focusable="false" role="presentation" className={`w-7 h-4 transform ${isOpen6 ? 'rotate-90' : ''} w-[30px] h-[30px] transform rotate-90`} viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg> 
                                </div> 
                            </div> 
 
                            {/* Faq nested toggle */} 
                            <div style={{ maxHeight: isOpen6 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                                <div className='text-[#111111] py-8 leading-6 w-[50vw] text-sm'>As a general rule, if you are under the age of 16 years old, you will need your parent or legal guardian present with you to consent for you to have your ears pierced. That age consent may differ depending on what territory or country you live in. Please consult your nearest Aura store for further information. Make sure you bring a form of identification with you to verify your age such as a driver’s license, school identification, birth certificate or passport.</div> 
                            </div> 
 
                            {/* 3rd faq */} 
                            <div className='flex items-center justify-between w-[50vw] cursor-pointer border-b-[1px] py-3' onClick={() => toggleAccordion(7)}> 
                                <div className='uppercase text-[1rem] font-semibold text-[#111111] leading-6'>Do I need to book an appointment?</div> 
                                <div> 
                                    <svg aria-hidden="true" focusable="false" role="presentation" className={`w-7 h-4 transform ${isOpen7 ? 'rotate-90' : ''} w-[30px] h-[30px] transform rotate-90`} viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z"
stroke="#000000" strokeWidth="0"></path></svg> 
                                </div> 
                            </div> 
 
                            {/* Faq nested toggle */} 
                            <div style={{ maxHeight: isOpen7 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                                <div className='text-[#111111] py-8 leading-6 w-[50vw] text-sm'>No need to book. Just walk in.</div> 
                            </div> 
 
                            {/* 4th faq */} 
                            <div className='flex items-center justify-between w-[50vw] cursor-pointer border-b-[1px] py-3' onClick={() => toggleAccordion(8)}> 
                                <div className='uppercase text-[1rem] font-semibold text-[#111111] leading-6'>How much does itcost to have my ears pierced?</div> 
                                <div> 
                                    <svg aria-hidden="true" focusable="false" role="presentation" className={`w-7 h-4 transform ${isOpen8 ? 'rotate-90' : ''} w-[30px] h-[30px] transform rotate-90`} viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg> 
                                </div> 
                            </div> 
 
                            {/* Faq nested toggle */} 
                            <div style={{ maxHeight: isOpen8 ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}> 
                                <div className='text-[#111111] py-8 leading-6 w-[50vw] text-sm'>Aura offers a FREE Ear Piercing Service that includes FREE aftercare solution with the purchase of your Studex Piercing Studs. The prices vary in each country.<br /> 
 
                                    We also offer children over the ages of 3 years old a free Aura Teddy Bear (while stocks last) and certificate to make their experience extra special.</div> 
                            </div> 
 
                        </div> 
                    </div> 
                </div> 
            </div> 
 
        </div> 
    ); 
}; 
 
export default FAQAccordion;