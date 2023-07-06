import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import CirgleImage from '../../assets/img/sakura-circulo.svg';
import Modal from '../../components/modal/Modal';
import './Reading.css';

export default function Reading() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const storedCards = localStorage.getItem('selectedCards');
    if (storedCards) {
      setSelectedCards(JSON.parse(storedCards));
    }
  }, []);

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
    // Guardar el nuevo pensamiento en localStorage o donde corresponda
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      handleCloseModal(); // Cerrar el modal
    }, 4000);
  };

  const handleDeleteThought = (index) => {
    // Eliminar el pensamiento del estado o de donde corresponda
  };

  return (
    <div className="secondary-page">
      <Header />
      <h2 className="title-reading">
       Tu lectura
      </h2>
      <div className="cards-reading">
        {selectedCards.map((card, index) => (
          <div className="card-reveal" key={index}>
            <img className="card-img" src={card.sakuraCard} alt="Sakura Card" />
            <h3 className="card-name">{card.spanishName}<span> - {card.kanji}</span></h3>
            <p className="card-meaning">{card.meaning}</p>
          </div>
        ))}
      </div>
      <div className="container-button-reading">
        <Button text="Guardar" onClick={handleOpenModal} />
        {modalOpen && <Modal onClose={handleCloseModal} onSave={handleSaveThoughts} />}
      </div>
      {successMessage && (
        <div className="container-success-message">
          <div className="success-message">
            <p>Pensamiento guardado correctamente.</p>
            <Button text="Cerrar" onClick={() => {
              setSuccessMessage(false);
              handleCloseModal();
            }} />
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
