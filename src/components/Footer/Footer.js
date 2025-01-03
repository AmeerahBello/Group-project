import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitch} from "react-icons/fa" 

const Footer = () => {
  return <>
  <div className="container text-center space-y-10 py-10">
      <div className="space-y-4">
        <p className="text-3xl md:text-4xl font-bold">Join our email</p>
        <p>Get updates on latest discounts</p>
      </div> 
      <div className="space-y-5">
        <button className="primary-btn text-black">Subscribe</button>
         <div className="flex flex-row justify-center gap-3">
          <FaFacebook />
          <FaTwitch />
          <FaInstagram />
          <FaLinkedin />
         </div>
        </div> 
   </div>
  
   
   
    </>
}

export default Footer