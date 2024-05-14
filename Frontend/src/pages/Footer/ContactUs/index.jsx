/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "./index.css";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Modal from './Modal';
import TopBanner from '../../../components/Common/Banner';


const ContactUs = () => {
  const [callUs,setCallUs]=useState(false);
 

  return (
    <div>
      <TopBanner />
    <div className='main-content'>
      <div className=' page-header'>
        <h1 className='heading text-3xl'>Contact Us</h1>
        <div className='rte'>
          <div className='text-center w-[81vw]'>
            <p>
              Have a question? Visit our <a href='/link'>Help Centre</a> below for answers to our frequently asked questions. If you still need help, just <a href='/link'>Contact Us</a> below, we'll get back to you within 24-48 hours!
            </p>
          </div>
        </div>
      </div>
      
      <div className='page-width'>
    <div className='titles-grid'>
        <div className='titles-grid--item'>
          <Link to='/footer/help-centre'>
            <a href='/shop center link' className=' titles-grid-item-content'>
                <div className='icon-wrapper'>
                <img src='//www.lovisa.sg/cdn/shop/files/FAQs_120x.webp?v=1651037079'/>
                <p className='titles-grid-item-title'>Help Centre</p>
                
                </div>
            </a>
            </Link>
        </div>
        
        <div className='titles-grid--item'>
        <Link to='/footer/request'>
            <a className=' titles-grid-item-content' href='/shop link'>
        
                <div className='icon-wrapper'>
                    <img src='//www.lovisa.sg/cdn/shop/files/IMG_1994_120x.png?v=1706761726'/>
                    <p className='titles-grid-item-title'>Contact Us</p> 
                </div>
               
                
            </a>
          </Link>
        </div>
       
        <div className='titles-grid--item'>
            <button className=' titles-grid-item-content button' type='button' onClick={()=>{
              setCallUs(true)
            }}>
                <div className='icon-wrapper'>
                    <img src='//www.lovisa.sg/cdn/shop/files/IMG_1990_120x.png?v=1706761737'/>
                    <p className='titles-grid-item-title para' >Call Us</p> 

                </div>
            </button>{callUs && <Modal closeModel={setCallUs}/>}
        </div>
    </div>
</div>

</div>
<div className='text-left'>
            <p className='text'>EMAIL</p>
            <p className='email'>info@lovisa.com</p>
            <div className='icons'>
                <li><a href=''><BsPinterest /></a></li>
                <li className='inc'><a href=''><AiOutlineInstagram /></a></li>
                <li><a href=''><BsFacebook /></a></li>
            </div>


    </div>
</div>

  );
}

export default ContactUs;
