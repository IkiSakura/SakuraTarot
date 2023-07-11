import React from "react";
import "./CardsContainer.css";

function CardContainer({ clickCount, reverseImageUrl }) {
  return (
    <div className="card-container">
      <div className="past">
        {clickCount >= 1 ? (
          <img className="card-reverse" src={reverseImageUrl} alt="Reverso carta de tarot sakura" />
        ) : (
          <div>Pasado</div>
        )}
      </div>
      <div className="present">
        {clickCount >= 2 ? (
          <img className="card-reverse" src={reverseImageUrl} alt="Reverso carta de tarot sakura" />
        ) : (
          <div>Presente</div>
        )}
      </div>
      <div className="future">
        {clickCount >= 3 ? (
          <img className="card-reverse" src={reverseImageUrl} alt="Reverso carta de tarot sakura" />
        ) : (
          <div>Futuro</div>
        )}
      </div>
    </div>
  );
}

export default CardContainer;
