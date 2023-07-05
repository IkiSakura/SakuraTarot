import { Link } from 'react-router-dom';
import React from 'react';
import './Button.css';


// const Button = () => {
//   return (
//     <button className="button-readings">
//          <Link to="/reading" className="link-reading">Ver mi lectura</Link>
//     </button>
//   );
// };

const Button = ({text, to, onClick}) => {

  return(
   <Link to={to}><button className='button' onClick={onClick}>{text}</button></Link>
  )
}

export default Button;
