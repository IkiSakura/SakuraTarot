import React, { useState, useEffect } from 'react';
import './CardBack.css';
import { fetchData } from '../../service/service';

function CardBack({ onCardClick }) {
  const [randomCards, setRandomCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    fetchRandomCards();
  }, []);

  const fetchRandomCards = async () => {
    try {
      const data = await fetchData();
      const randomIndexes = getRandomIndexes(data.length, 6);
      const randomCards = randomIndexes.map(index => data[index]);
      setRandomCards(randomCards);
    } catch (error) {
      console.error('Error fetching random cards:', error);
    }
  };

  const getRandomIndexes = (length, count) => {
    const indexes = Array.from({ length }, (_, index) => index);
    const shuffledIndexes = indexes.sort(() => Math.random() - 0.5);
    return shuffledIndexes.slice(0, count);
  };

  const fetchCardDetails = (cardId) => {
    return randomCards.find(card => card.id === cardId);
  };

  const handleCardClick = (cardId) => {
    const selectedCard = randomCards.find(card => card.id === cardId);
    
    if (selectedCard && !selectedCards.find(card => card.id === cardId)) {
      const cardDetails = fetchCardDetails(cardId);
      if (cardDetails) {
        setSelectedCards(prevSelectedCards => [...prevSelectedCards, cardDetails]);
        if (typeof onCardClick === 'function') {
          onCardClick(cardDetails);
        }
      }
    }
    
    setClickCount(prevClickCount => prevClickCount + 1);
  };

  return (
    <div className="deck-card-container">
      {randomCards.map((card) => (
        <img
          key={card.id}
          className="card-back"
          src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
          alt="Reverso carta de tarot sakura"
          onClick={() => handleCardClick(card.id)}
        />
      ))}
      <div>
        Cartas seleccionadas:
        {selectedCards.length > 0 ? (
          selectedCards.map((card, index) => (
            <div key={index}>g
              <div>ID: {card.id}</div>
              <div>Nombre: {card.spanishName}</div>
              {/* Agrega más detalles de la carta aquí */}
            </div>
          ))
        ) : (
          <div>No hay cartas seleccionadas</div>
        )}
      </div>
    </div>
  );
}

export default CardBack;
