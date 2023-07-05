import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Button from "../../components/btn/BtnModal";
import Footer from "../../components/Footer/Footer";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Modal from "../../components/modal/Modal";
import ThoughtsList from "../../components/thougtList/ThoughtsList";
import "./Reading.css";


  

  
export default function Reading() {
  const [modalOpen, setModalOpen] = useState(false);
  const [savedThoughts, setSavedThoughts] = useState([]);
  const [thoughtsListOpen, setThoughtsListOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  
  useEffect(() => {
    const storedCards = localStorage.getItem('selectedCards');
    if (storedCards) {
      setSelectedCards(JSON.parse(storedCards));
    }
  }, []);

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
      selectedCards: selectedCards,
    };
    setSavedThoughts((prevThoughts) => [...prevThoughts, newThought]);
    setSelectedCards([]);
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
      <Header />
  
      <div className="cards-reading">
  
      {selectedCards.map((card, index) => (
        <div className="card-reveal" key={index}>
            <img className="card-img" src={card.sakuraCard} alt="Sakura Card" />
            <h3 className="card-name">{card.spanishName}</h3>
            <p className="card-meaning">{card.meaning}</p>
         
        </div>
      ))}
    </div>
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
        className="middle-circle"
        src={CirgleImage}
        alt="Sakura golden card circle"
      />
      <Footer />
    </div>
  );
}
