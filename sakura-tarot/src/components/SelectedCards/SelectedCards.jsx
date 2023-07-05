import React from 'react';

function SelectedCards({ selectedCards }) {
  return (
    <div>
      <h2>Cartas seleccionadas:</h2>
      <ul>
        {selectedCards.map((cardId) => (
          <li key={cardId}>{cardId}</li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedCards;