import React from "react";
import TopBanner from "../../../components/Common/Banner";

function Careers() {
  return (
    <>
      <div className=" flex flex-col  justify-center items-center ">
        <TopBanner />
        <div className="flex flex-col justify-center mt-3 items-center">
          <p className="text-[2.5rem] font-thin leading-2 p-2">Careers</p>
          <div className="border-b border-black w-[5vw]"></div>
        </div>
        <p className="mt-[2rem]">Scroll down to apply for your dream role today!</p>
        <iframe width="580" height="280" class="mt-[4rem]" src="https://www.youtube.com/embed/xuHfSvmm_8s?si=8-wuCBPtjN2sLpIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        {/* links */}
        <div className="my-[2rem] overflow-hidden h-[80vh]  overflow-x-scroll overflow-y-scroll w-[50vw]">
          <ul className="flex  justify-end  w-[50vw]">
            <li className="text-[12px] text-[#5C657D]  ">Job Search</li>
            <li>|</li>
            <li className="text-[12px] text-[#5C657D] "> Login</li>
          </ul>

          {/* form */}
          <div className="flex  flex-row   h-[13vh]  mt-[2rem] w-[50vw] gap-2">

            {/* first option */}
            <div className="flex flex-col w-[11vw] text-[14px]">
              <label className="text-[#095473]">Country:</label>
              <select className="border-[1px] outline-none  border-gray-500  rounded">
                <option>Austraila-stores</option>
                <option>canada</option>
                <option>china</option>
                <option>Hong-khong</option>
                <option>taiwan</option>
                <option>singapore</option>
                <option>warehouse</option>
              </select>
            </div>

            {/* 2nd option */}
            <div className="flex flex-col w-[11vw] text-[14px]">
              <label className="text-[#095473]">State:</label>
              <select className="border-[1px] outline-none border-gray-500 rounded">
                <option>All</option>
                <option>CA</option>
                <option>CO</option>
                <option>MD</option>
                <option>NH</option>
                <option>PA</option>
                <option>RI</option>
              </select>
            </div>

            {/* 3rd option */}
            <div className="flex flex-col w-[11vw] text-[14px]">
              <label className="text-[#095473]">Suburb:</label>
              <select className="border-[1px] outline-none border-gray-500  rounded">
                <option>All</option>
                <option>camp hill</option>
                <option>boise</option>
                <option>brea</option>
                <option>brain tree</option>
                <option>Chandler</option>
                <option>Albany</option>
              </select>
            </div>

            {/*4th option  */}
            <div className="flex flex-col w-[11vw] text-[14px]">
              <label className="text-[#095473]">Keyword:</label>
              <input className="border-[1px] outline-none border-gray-500  rounded">
              </input>
            </div>

            {/* 5th option */}
            <div className="flex flex-col w-[11vw] text-[14px]">
              <label className="text-[#095473]">Sort By:</label>
              <select className="border-[1px] outline-none border-gray-500  ">
                <option>featured</option>
                <option>Most recent</option>
                <option>Least recent</option>
                <option>Position name</option>
                <option>Salary</option>
              </select>

              {/* Button  */}
              <button type="submit " className="border-[1px] px-2 py-0.5  border-gray-400 rounded-[24px] bg-[#EBEBEB] mt-[1rem] w-[6vw] text-[#004E6E] text-[12px]" >SEARCH</button>

            </div>
          </div>


          {/* paragraph  */}
          <div className=" flex flex-col mt-[1rem] ">
            <div className="h-[40vh] border-b">
              <p className="text-[#004E6E] text-[1.2rem] font-bold ">Sales Associate |</p>
              <p className="mt-[1rem] text-[13px] text-gray-500">Location: 50301 Chandler Fashion Center</p>
              <p className="text-[13px] text-gray-500 ">Posted on: 22 February 2024</p>
              <p className="mt-[1rem] text-[13px] text-gray-500">
                If you’re passionate about style with the customer service skills and enthusiasm to match,
                Lovisa is looking for team members like you! Apply today to join Lovisa, a global fashion-jewellery
                brand and market leader.
              </p>
              <p className="mt-[0.5rem]  text-[0.9rem] font-[600] text-gray-600">Share:</p>

              {/* icons */}
              <div className="flex gap-1">
                <img src="https://lola.worldmanager.com/careers/images/share/16px/twitter.png" alt="twitter" />
           <img src="https://lola.worldmanager.com/careers/images/share/16px/facebook.png" alt="facebook" />
           <img src="https://lola.worldmanager.com/careers/images/share/16px/linkedin.png" alt="linkedin" />
              </div>

              {/* button */}
              <div className="flex justify-end gap-4 my-[1rem]">
                <button type="submit " className="border-[1px]  border-gray-400 rounded-[24px] bg-[#EBEBEB]  w-[7vw] text-[#004E6E] text-[11px] p-1" >MORE INFO</button>
                <button type="submit " className="border-[1px]  border-gray-400 rounded-[24px] bg-[#EBEBEB] ] w-[7vw] text-[#004E6E] text-[11px] p-1" >APPLY NOW</button>
              </div>

            </div>

            {/* 2nd */}
            <div className="h-[40vh] border-b">
              <p className="text-[#004E6E] text-[1.2rem] font-bold  ">Sales Associate |</p>
              <p className="mt-[1rem] text-[13px] text-gray-500">Location: 50301 Chandler Fashion Center</p>
              <p className="text-[13px] text-gray-500 ">Posted on: 22 February 2024</p>
              <p className="mt-[1rem] text-[13px] text-gray-500">
                If you’re passionate about style with the customer service skills and enthusiasm to match,
                Lovisa is looking for team members like you! Apply today to join Lovisa, a global fashion-jewellery
                brand and market leader.
              </p>
              <p className="mt-[0.5rem]  text-[0.9rem] font-[600] text-gray-600">Share:</p>

              {/* icons */}
              <div className="flex gap-1">
                <img src="https://lola.worldmanager.com/careers/images/share/16px/twitter.png" alt="twitter" />
              <img src="https://lola.worldmanager.com/careers/images/share/16px/facebook.png" alt="facebook" />
              <img src="https://lola.worldmanager.com/careers/images/share/16px/linkedin.png" alt="linkedin" />
              </div>

              {/* button */}
              <div className="flex justify-end gap-4 my-[1rem]">
                <button type="submit " className="border-[1px]  border-gray-400 rounded-[24px] bg-[#EBEBEB]  w-[7vw] text-[#004E6E] text-[11px] p-1" >MORE INFO</button>
                <button type="submit " className="border-[1px]  border-gray-400 rounded-[24px] bg-[#EBEBEB] ] w-[7vw] text-[#004E6E] text-[11px] p-1" >APPLY NOW</button>
              </div>

            </div>


            {/* 3rd */}
            <div className="h-[40vh] border-b">
              <p className="text-[#004E6E] text-[1.2rem] font-bold ">Sales Associate |</p>
              <p className="mt-[1rem] text-[13px] text-gray-500">Location: 50301 Chandler Fashion Center</p>
              <p className="text-[13px] text-gray-500 ">Posted on: 22 February 2024</p>
              <p className="mt-[1rem] text-[13px] text-gray-500">
                If you’re passionate about style with the customer service skills and enthusiasm to match,
                Lovisa is looking for team members like you! Apply today to join Lovisa, a global fashion-jewellery
                brand and market leader.
              </p>
              <p className="mt-[0.5rem]  text-[0.9rem] font-[600] text-gray-600">Share:</p>

              {/* icons */}
              <div className="flex gap-1">
                <img src="https://lola.worldmanager.com/careers/images/share/16px/twitter.png" alt="twitter" />
               <img src="https://lola.worldmanager.com/careers/images/share/16px/facebook.png" alt="facebook" />
               <img src="https://lola.worldmanager.com/careers/images/share/16px/linkedin.png" alt="linkedin" />
              </div>

              {/* button */}
              <div className="flex justify-end gap-4 my-[1rem]">
                <button type="submit " className="border-[1px]  border-gray-400 rounded-[24px] bg-[#EBEBEB]  w-[7vw] text-[#004E6E] text-[11px] p-1" >MORE INFO</button>
                <button type="submit " className="border-[1px]  border-gray-400 rounded-[24px] bg-[#EBEBEB] ] w-[7vw] text-[#004E6E] text-[11px] p-1" >APPLY NOW</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;