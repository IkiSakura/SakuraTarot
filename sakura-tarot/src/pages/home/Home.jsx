import React, { useState } from "react";
import "./Home.css";
import CardContainer from "../../components/CardsContainer/CardsContainer";
import Button from "../../components/Button/Button";
import CardBack from "../../components/CardBack/CardBack";
// import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 3;
  const reverseImageUrl = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg";

  const handleCardClick = () => {
    if (clickCount < maxClicks) {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <h2>Seleccione la tarjeta que crea que puede representar su situación actual</h2>
      <div className="tarot-container">
        <div className="instructions">
          <p>Haz click en 3 cartas para leer sobre tu pasado, presente y futuro.</p>
          <CardBack onCardClick={handleCardClick} />
        </div>

        <div className="cards">
          <CardContainer clickCount={clickCount} reverseImageUrl={reverseImageUrl} />
          <Button text='Ver mi lectura' to='/reading' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
