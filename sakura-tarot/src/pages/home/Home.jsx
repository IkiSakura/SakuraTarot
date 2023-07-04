import CardContainer from "../../components/CardsContainer/CardsContainer";
import Button from "../../components/Button/Button";
import CardBack from "../../components/CardBack/CardBack";
import "./Home.css";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import SingleCard from "../../components/SingleCard/SingleCard";
import { useState } from "react";

export default function Home() {
  const [flippedPast, setFlippedPast] = useState(false);
  const [flippedPresent, setFlippedPresent] = useState(false);
  const [flippedFuture, setFlippedFuture] = useState(false);

  function handleClickPast() {
    setFlippedPast(true);
  }
  function handleClickPresent() {
    setFlippedPresent(true);
  }

  function handleClickFuture() {
    setFlippedFuture(true);
  }

  return (
    <div className="home-container">
      <div className ="header-container">
      <Header />
      <h2>Bienvenid@ a nuestro Sakura-Tarot!</h2>
      <h3>Experimenta su magia con la tirada de las 3 cartas: </h3>
      </div>
      <div className="tarot-container">
        <div className="instructions">
          <h3>INSTRUCCIONES:</h3>
          <p>Por favor, selecciona una carta de cada mazo: </p>
          <CardBack handleClick={handleClickPast} frase = "Conecta con tu PASADO:" />
          <CardBack  handleClick={handleClickPresent} frase = "Comprende tu PRESENTE:" />
          <CardBack  handleClick={handleClickFuture} frase = "Intuye tu FUTURO:"/>
        </div>
        
<div className = "card-trio">
        <SingleCard
          imgElement={<img className="reverse-img" src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" />}
          text="PASADO"
          clase = "single-card"
          flipped={flippedPast}
        />
        <SingleCard
          imgElement={<img className="reverse-img" src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" />}
          text="PRESENTE"
          clase = "single-card"
          flipped={flippedPresent}
        />
        <SingleCard
          imgElement={<img className="reverse-img" src="https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg" />}
          text="FUTURO"
          clase = "single-card"
          flipped={flippedFuture}
        />
</div>
<Button />
      </div>
      <img
        className="sakura-circle"
        src={CirgleImage}
        alt="Sakura golden card circle"
      />
      <Footer />
    </div>
  );
}
