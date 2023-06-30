import Header from "../../components/header/Header"
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer"
// import { useState } from "react";
import "./Reading.css";

const fakeData = [
    {
        "id": "1",
        "clowCard": "https://i.ibb.co/ftvH3CX/Viento.jpg",
        "sakuraCard": "https://i.ibb.co/k5HVTP7/Viento-Sakura.jpg",
        "cardsReverse": {
        "clowReverse": "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
        "sakuraReverse": "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        },
        "meaning": "Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa.",
        },
        {
        "id": "2",
        "clowCard": "https://i.ibb.co/ryfdTjL/Lluvia.jpg",
        "sakuraCard": "https://i.ibb.co/ry15JSV/Vuelo-Sakura.jpg",
        "cardsReverse": {
        "clowReverse": "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
        "sakuraReverse": "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        },
        "meaning": "Simboliza la libertad, la evasión."
        },
        {
        "id": "3",
        "clowCard": "https://i.ibb.co/9W42mHB/Sombra.jpg",
        "sakuraCard": "https://i.ibb.co/q7dgnKZ/Sombra-Sakura.jpg",
        "cardsReverse": {
        "clowReverse": "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
        "sakuraReverse": "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
        },
        "meaning": "Indica el sigilo."
        }
]

export default function Reading() {
    // const [flippedCards, setFlippedCards] = useState([]);
  
    // const handleCardClick = (cardId) => {
    //   if (flippedCards.includes(cardId)) {
    //     setFlippedCards(flippedCards.filter((id) => id !== cardId));
    //   } else {
    //     setFlippedCards([...flippedCards, cardId]);
    //   }
    // };
  
    return (
        <div className="reading-container">
            <Header />
            <h2>
               Pasa el cursor sobre la carta de tarot para revelar su significado.
            </h2>
            <ul className="fullContainerCards">
                <img className="middle-circle" src={CirgleImage} alt="" />
                 {fakeData.map((card) => (
                <div className="card"
            //   className={`card ${flippedCards.includes(card.id) ? 'flipped' : ''}`}
            //   key={card.id}
            //   onClick={() => handleCardClick(card.id)}
                >
              <div
                className="front"
                style={{
                    backgroundImage: `url(${card.sakuraCard})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover'
                }}
              >{card.meaning}</div>
              <div
                className="back"
                style={{
                    backgroundImage: `url(${card.cardsReverse.sakuraReverse})`,
                    backgroundRepeat: "no-repeat"
                }}
              ></div>
            </div>
          ))}
        </ul>

       {/* <Button/>  */}

        <Footer />

      </div>
    );
  }