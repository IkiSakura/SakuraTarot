import CardContainer from "../../components/CardsContainer/CardsContainer";
import Button from "../../components/Button/Button";
import CardBack from "../../components/CardBack/CardBack";
import "./Home.css";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import SingleCard from "../../components/SingleCard/SingleCard";
import { useState } from "react";



export default function Home () { 

const [flipped, setFlipped] = useState(false)

function handleClick(){
  setFlipped(true)
}

  return (
    
    <div className="home-container">
      <Header />
      <h2>
        Seleccione la tarjeta que crea que puede representar su situación actual
      </h2>

      <div className="tarot-container">
        <div className="instructions">
          <p>
            Selecciona 3 cartas para leer sobre tu pasado, presente y futuro.
          </p>
      
            <CardBack handleClick = {handleClick}/>
           
        </div>

       

        <SingleCard className = "past-card"
            imgElement={<img src= "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"/>}
            text="PASADO"
            flipped={flipped}
          />
          <SingleCard className = "present-card"
            imgElement={<img src= "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"/>}
            text="PRESENTE"
            flipped={flipped}
          />
          <SingleCard className = "Future-card"
            imgElement={<img src= "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"/>}
            text="FUTURO"
            flipped={flipped}
          />
      
        <div className="cards">
{/*          <CardContainer /> */}
          <Button />
        </div>
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
