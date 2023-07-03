import React from 'react';
import './BtnModal.css';

function Button({ onClick, label }) {
  return (
    <button className='btnModal' onClick={onClick}>{label}</button>
  );
}

export default Button;