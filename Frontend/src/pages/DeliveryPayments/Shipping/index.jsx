import React from 'react';

function Shipping() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-[9vh] '>
                <div className='flex flex-col justify-center items-center gap-8 w-[48%]'>
                    <h1 className='text-[30px] border-b-2 border-black flex justify-start w-[45%]text-align-center1'>Shipping & Delivery</h1>
                    <h1 className='text-[20px] font-semibold'>SINGAPORE & MALAYSIA</h1>
                    <h1 className='text-[20px] font-semibold'><i>DELIVERY TIMES</i></h1>
                    <div className='w-full'>


                        <div >
                            <table className="  border-[#F7ECE5] w-[45vw]">
                                <thead>
                                    <tr className='bg-[#F7ECE5]'>
                                        <th className=" border border-[#F7ECE5]  font-normal text-start px-4">ORDER TOTAL</th>
                                        <th className="border border-[#F7ECE5] font-normal px-3 mt-2 text-start">COST</th>
                                        <th className="border  border-[#F7ECE5] px-4 py-2 font-normal text-start ">DELIVERY TIME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#F7ECE5] ">
                                        <td className=" border border-[#F7ECE5] px-4 py-2 font-normal">SGD$0-$69.99</td>
                                        <td className="border border-[#F7ECE5] px-4 py-2 font-normal">SGD$9.99</td>
                                        <td className="border  border-[#F7ECE5] px-4 py-2 font-normal">4 - 7 Business Days*</td>
                                    </tr>
                                    <tr className="hover:bg-[#F7ECE5]">
                                        <td className="  border border-[#F7ECE5] px-4 py-2 font-normal">SGD$70+</td>
                                        <td className="border  border-[#F7ECE5] px-4 py-2 font-normal">FREE</td>
                                        <td className="border  border-[#F7ECE5] px-4 py-2 font-normal">4 - 7 Business Days*</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className='border-black mt-8'>____________________________________</p>


                    <h1 className='text-[25px] font-medium'>PLEASE NOTE:</h1>

                    <li className='text-[14px]'><i>The estimated delivery time is from the date the order has shipped, not necessarily the date of the order. All orders are usually shipped within 2 business days.</i></li>
                    <li className='text-[14px]  w-full'><i>Business days do not include weekends or public holidays.</i></li>

                    <li className='text-[14px] w-full'><i>We are not responsible for any delay, late delivery or failure to deliver.</i></li>

                    <li className='text-[14px] w-full'><i>There may be a delay of up to 2-4 business days during our sale periods.</i></li>

                    <li className='text-[14px]'><i>All orders are shipped out of Singapore and could incur charges due to local duties and taxes. Aura is not responsible for any additional fees, restricted items or delay in delivery due to these circumstances. If you have any queries or concerns about this please check your local customs policy.</i></li>

                    <li className='text-[14px]'><i>These transit days are estimates only. Once your parcel has been collected by the courier we are not responsible for any delays in delivery.</i></li>

                    <li className='text-[14px] mb-9'><i>Once your order has been placed online we are unable to make amendments to product, customer or delivery details. Alternatively, if you have any queries about placing an order or an order you have received, please contact our team at  <a href="info@aura.com">info@aura.com</a></i></li>

                </div>
            </div>
        </>
    )
}
export default Shipping