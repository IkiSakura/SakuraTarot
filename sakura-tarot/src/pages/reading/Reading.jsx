import React, { useState, useEffect} from "react";
import Header from "../../components/header/Header";
import Button from "../../components/btn/BtnModal";
import Footer from "../../components/Footer/Footer"
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Modal from "../../components/modal/Modal"
import ThoughtsList from "../../components/thougtList/ThoughtsList"
import "./Reading.css";

// const fakeData = [
//     {
//         "id": "1",
//         "clowCard": "https://i.ibb.co/ftvH3CX/Viento.jpg",
//         "sakuraCard": "https://i.ibb.co/k5HVTP7/Viento-Sakura.jpg",
//         "cardsReverse": {
//         "clowReverse": "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
//         "sakuraReverse": "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
//         },
//         "meaning": "Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa.",
//         },
//         {
//         "id": "2",
//         "clowCard": "https://i.ibb.co/ryfdTjL/Lluvia.jpg",
//         "sakuraCard": "https://i.ibb.co/ry15JSV/Vuelo-Sakura.jpg",
//         "cardsReverse": {
//         "clowReverse": "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
//         "sakuraReverse": "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
//         },
//         "meaning": "Simboliza la libertad, la evasión."
//         },
//         {
//         "id": "3",
//         "clowCard": "https://i.ibb.co/9W42mHB/Sombra.jpg",
//         "sakuraCard": "https://i.ibb.co/q7dgnKZ/Sombra-Sakura.jpg",
//         "cardsReverse": {
//         "clowReverse": "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg",
//         "sakuraReverse": "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"
//         },
//         "meaning": "Indica el sigilo."
//         }
// ]

export default function Reading() {
    const [modalOpen, setModalOpen] = useState(false);
    const [savedThoughts, setSavedThoughts] = useState([]);
    const [thoughtsListOpen, setThoughtsListOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
  
    useEffect(() => {
      const storedThoughts = localStorage.getItem('savedThoughts');
      if (storedThoughts) {
        setSavedThoughts(JSON.parse(storedThoughts));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('savedThoughts', JSON.stringify(savedThoughts));
    }, [savedThoughts]);
  
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    const handleSaveThoughts = (thoughts) => {
      const newThought = {
        date: new Date().toLocaleDateString(),
        text: thoughts,
      };
      setSavedThoughts((prevThoughts) => [...prevThoughts, newThought]);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
    };
  
    const handleAccessThoughts = () => {
      setThoughtsListOpen(true);
    };
  
    const handleCloseThoughtsList = () => {
      setThoughtsListOpen(false);
    };
  
    const handleDeleteThought = (index) => {
      setSavedThoughts((prevThoughts) => {
        const updatedThoughts = [...prevThoughts];
        updatedThoughts.splice(index, 1);
        return updatedThoughts;
      });
    };
  
    return (
      <div className="secondary-page">
        <Header/>
            <h2>
            Pasa tu mano sobre la carta de tarot para revelar su significado.            
            </h2>
        <Button onClick={handleOpenModal} label="Guardar mi lectura" />
        {modalOpen && (
          <Modal onClose={handleCloseModal} onSave={handleSaveThoughts} />
        )}
        {thoughtsListOpen && (
          <div>
            <ThoughtsList thoughts={savedThoughts} onDelete={handleDeleteThought} />
            <Button onClick={handleCloseThoughtsList} label="X" />
          </div>
        )}
        {!thoughtsListOpen && savedThoughts.length > 0 && (
          <Button onClick={handleAccessThoughts} label="Acceder a mis pensamientos guardados" />
        )}
        {successMessage && (
          <div className="container-success-message">
            <div className="success-message">
              <p>Pensamiento guardado correctamente.</p>
              <Button onClick={() => setSuccessMessage(false)} label="Cerrar" />
            </div>
          </div>
        )}
        <img
            className="sakura-circle"
            src={CirgleImage}
            alt="Sakura golden card circle"
            />
            <Footer/>
      </div>
    );
  }
  //       <div className="reading-container">
  //           <Header />
  //           <h2>
  //              Pasa el cursor sobre la carta de tarot para revelar su significado.
  //           </h2>
  //           <ul className="fullContainerCards">
  //               <img className="middle-circle" src={CirgleImage} alt="" />
  //                {fakeData.map((card) => (
  //               <div className="card"
            
  //               >
  //             <div
  //               className="front"
  //               style={{
  //                   backgroundImage: `url(${card.sakuraCard})`,
  //                   backgroundRepeat: "no-repeat",
  //                   backgroundSize: 'cover'
  //               }}
  //             >{card.meaning}</div>
  //             <div
  //               className="back"
  //               style={{
  //                   backgroundImage: `url(${card.cardsReverse.sakuraReverse})`,
  //                   backgroundRepeat: "no-repeat"
  //               }}
  //             ></div>
  //           </div>
  //         ))}
  //       </ul>


  //       <Footer />

  //     </div>
  //   );
  // }
