import React from 'react';
import './Footer.css';
import ImagenFooter from "../../assets/img/sakura-decoration.svg"


function Footer() {

    return (
    <div className='footer-container'>
         <img src={ImagenFooter} className="footer-image" alt="Footer Image" /> 
    </div>
  );
};

export default Footer;