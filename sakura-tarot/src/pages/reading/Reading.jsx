import React, { useState } from 'react';
import Header from "../../components/header/Header";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Button from "../../components/Button/Button";
import SelectedCards from "../../components/SelectedCards/SelectedCards";
import Footer from "../../components/Footer/Footer";
import "./Reading.css";


export default function Reading() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (card) => {
    setSelectedCards([...selectedCards, card]);
  };
console.log(selectedCards)
  return (
    <div className="reading-container">
      <Header />

      <div className="cards-reading">
        <div className="cards-open">
          <SelectedCards selectedCards={selectedCards} />
        </div>

        <Button text="Guardar mi lectura" route="/Journal" />
      </div>

      <img className="middle-circle" src={CirgleImage} alt="Sakura golden card circle" />

      <Footer />
    </div>
  );
}
