import Header from "../../components/header/Header";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/btn/BtnModal";
import Modal from "../../components/modal/Modal";
import ThoughtsList from "../../components/thougtList/ThoughtsList";
import React, { useState, useEffect } from 'react';
import "./Reading.css";



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
          <div className="success-message">
            <p>Pensamiento guardado correctamente.</p>
            <Button onClick={() => setSuccessMessage(false)} label="X" />
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