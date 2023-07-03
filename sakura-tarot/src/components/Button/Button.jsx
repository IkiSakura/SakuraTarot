import { Link } from 'react-router-dom';
import React from 'react';
import './Button.css';


const Button = ({ text, route }) =>  {
  return (
    <Link to={route} className="link-reading" >
    {text}
   </Link>
  );
};

export default Button;
