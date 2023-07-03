import React from "react";
import "./CardsContainer.css";
import { useState } from "react";
import CardBack from "../CardBack/CardBack";

const CardContainer = () => {
  const [mostrarImagen, setMostrarImagen] = useState(false);

  const handleClick = () => {
    setMostrarImagen(true);
  };

  return (
    <div className="card-container">

 <div className = "deck" >
<CardBack onClick={handleClick}/>
</div>

      <div className={mostrarImagen ? "reverse" : "past"}>
      <p>Past</p>
        {mostrarImagen && (
          <img
          className = "reverse-pic"
            src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
            alt="Reverso Sakura card color rosado"
          />
        )}
       
      </div>
      <div className={mostrarImagen ? "reverse" : "present"}>
        <p>Present</p>
        {mostrarImagen && (
          <img
          className = "reverse-pic"
            src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
            alt="Reverso Sakura card color rosado"
          />)}
      </div>
      <div className={mostrarImagen ? "reverse" : "future"}>
        <p>Future</p>
        {mostrarImagen && (
          <img
          className = "reverse-pic"
            src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
            alt="Reverso Sakura card color rosado"
          />)}
      </div>
    </div>
  );
};

export default CardContainer;
