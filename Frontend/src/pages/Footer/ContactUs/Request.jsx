import React from 'react';
import { GrMailOption } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Request = () => {
 
  const options = [
    {value:"-",label:"-"},
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
    { value: 'General Enquiry', label: 'General Enquiry' },
    { value: 'Piercing Enquiry', label: 'Piercing Enquiry' },
  ];

  

  return (
    
    <div style={{letterSpacing:"1px"}} className='mx-[6rem]'>
      <Link to="/footer/request">
        
      <div>

      <GrMailOption style={{fontSize:"35px",position:"relative",top:"2.7rem",left:"14.6rem",color:"rgba(0, 0, 0, 0.2)"}}/>
        <h1 style={{fontSize:"30px",}}>Submit a request</h1>
      </div>
      <div className='greyContainer' style={{margin:"40px", backgroundColor:"#F7F7F7",padding:"30px", width:"44rem" }}>
        {/* Input field with dropdown */}
        <p style={{marginBottom:"1rem", fontSize: "14px"}}>Please choose your issue below</p>
        <select style={{width:"40rem",height:"2.5rem"}} className='border-[1px] rounded px-1'>
          {/* Displaying the options */}

          {options.map((option,index)=>(<option key={index} value={option.value}>{option.label}</option>))}
        </select>
      </div>
      </Link>
    </div>
  );
};

export default Request;
