import React, { useState } from "react";
import CardContainer from "../../components/CardsContainer/CardsContainer";
import Button from "../../components/Button/Button";
import CardBack from "../../components/CardBack/CardBack";
import "./Home.css";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (card) => {
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, card]);
    console.log("Cartas seleccionadas:", selectedCards);
  };

  return (
    <div className="home-container">
      <Header />
      <h2>Seleccione la tarjeta que crea que puede representar su situación actual</h2>

      <div className="tarot-container">
        <div className="instructions">
          <p>Selecciona 3 cartas para leer sobre tu pasado, presente y futuro.</p>
          <CardBack onCardClick={handleCardClick} />
        </div>

        <div className="cards">
          <CardContainer selectedCards={selectedCards} />
          <Button text="Ver mi lectura" route="/reading" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
