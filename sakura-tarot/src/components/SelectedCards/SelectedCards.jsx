import React, { useState } from 'react';


function SelectedCards({ selectedCards }) {
    console.log(selectedCards)
  return (
    <div>
      <h3>Cartas seleccionadas:</h3>
      <ul>
        {selectedCards.map((printedCard, index) => (
          <li key={index}>
            <div>Sakura Card: {printedCard.sakuraCard}</div>
            <div>Spanish Name: {printedCard.spanishName}</div>
            <div>Meaning: {printedCard.meaning}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedCards;