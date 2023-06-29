import React, { useState } from 'react';
import './CardBack.css';

function CardBack({ onCardClick }) {
  const handleCardClick = async (cardId) => {
    try {
      const response = await fetch(
        `https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${card.id}`
      );
      const data = await response.json();
      const { image } = data;
      onCardClick(image);
    } catch (error) {
      console.error('Error fetching card:', error);
    }
  };

  return (
    <div className="deck-card-container">
      <img
        className="card-back"
        src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        alt="Reverso carta de tarot sakura"
        onClick={() => handleCardClick(1)} // Pasar el ID de la carta al hacer clic
      />
      <img
        className="card-back"
        src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        alt="Reverso carta de tarot sakura"
        onClick={() => handleCardClick(2)} // Pasar el ID de la carta al hacer clic
      />
      <img
        className="card-back"
        src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        alt="Reverso carta de tarot sakura"
        onClick={() => handleCardClick(3)} // Pasar el ID de la carta al hacer clic
      />
      <img
        className="card-back"
        src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        alt="Reverso carta de tarot sakura"
        onClick={() => handleCardClick(4)} // Pasar el ID de la carta al hacer clic
      />
      <img
        className="card-back"
        src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        alt="Reverso carta de tarot sakura"
        onClick={() => handleCardClick(5)} // Pasar el ID de la carta al hacer clic
      />
      <img
        className="card-back"
        src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        alt="Reverso carta de tarot sakura"
        onClick={() => handleCardClick(6)} // Pasar el ID de la carta al hacer clic
      />
    </div>
  );
}

export default CardBack;
