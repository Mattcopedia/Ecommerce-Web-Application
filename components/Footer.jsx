import Link from 'next/link';
import React from 'react';
import {  AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => { 
  return (
    <div className="footer-container">

       <h2 className='text-center text-blue-600'>Reach us on Social Media</h2>
    
      <p className="icons">
         <a href='https://mobile.twitter.com/Mattyjunior2'>  
         <AiOutlineTwitter />
         </a>

         <a href='https://www.linkedin.com/in/ofeimun-mathias-763a15200/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3ByocoBruKQdWyqECi9kg82Q%3D%3D'>
         <AiFillLinkedin /> 
         </a>

         <a href='https://api.whatsapp.com/send?phone=2348115659040&text=Hi%2C%20This%20is%20the%20Mattco%27s%20admin%20how%20can%20we%20be%20of%20service%20to%20you.'>
         <AiOutlineWhatsApp />
         </a>
        
         
        

      </p>
      <p>2022 POST UTME STORE All rights reserved</p> 
    </div>
  )
}

export default Footer;  