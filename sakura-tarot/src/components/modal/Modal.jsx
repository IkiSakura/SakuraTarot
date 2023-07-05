import React, { useState } from 'react';
import './Modal.css';
import Button from '../Button/Button';
import IconClose from "../../assets/img/icon-close.svg"
import Kinomoto from "../../assets/img/sakura-kinomoto.png"

function Modal({ onClose, onSave }) {
  const [thoughts, setThoughts] = useState('');

  const handleSave = () => {
    onSave(thoughts);
    setThoughts('');
  };

  return (
    <div className="container-modal">
      <div className='modal'>
        <button className='close' onClick={onClose}><img className='close-img' src={IconClose} alt="icono de cerrar" /></button>
        {/* <span className="close" onClick={onClose}>X</span> */}
          <img className="kinomoto-modal"src={Kinomoto} alt="" /> 
          <h2 className='title-modal'>¿Cómo te has sentido hoy?</h2>
        <div className='container-box-btn'>
          <p>Fecha actual: {new Date().toLocaleDateString()}</p>
          <textarea
         className='text-area'
          placeholder="Escribe aquí tus pensamientos..."
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
        ></textarea>
        <Button text="Guardar" onClick={handleSave}/>
        {/* <button onClick={handleSave}>Guardar</button> */}
      </div>
      </div>
    </div>
  );
}

export default Modal;



