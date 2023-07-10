import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';
import './Journal.css';
import Button from '../../components/Button/Button';

export default function Journal() {
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('journalData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setJournalData(parsedData.reverse());
    }
  }, []);

  const handleDeleteEntry = (index) => {
    const updatedJournalData = [...journalData];
    const deletedEntry = updatedJournalData.splice(index, 1)[0];
    setJournalData(updatedJournalData);

    const updatedSelectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];
    const filteredSelectedCards = updatedSelectedCards.filter((card) => {
      return !deletedEntry.selectedCards.find((deletedCard) => deletedCard.spanishName === card.spanishName);
    });
    localStorage.setItem('selectedCards', JSON.stringify(filteredSelectedCards));

    localStorage.setItem('journalData', JSON.stringify(updatedJournalData.reverse()));
  };

  // const handleSaveEntry = (newEntry) => {
  //   const updatedJournalData = [newEntry, ...journalData];
  //   setJournalData(updatedJournalData);
  //   localStorage.setItem('journalData', JSON.stringify(updatedJournalData.reverse()));
  // };

  return (
    <div className="journal-container">
      <Header />
      <div className='main'>
      <h2>Consulta tus lecturas anteriores</h2>
      <div className='journal-box'>
        {journalData.map((data, index) => (
          <div className='journal-reading' key={index}>
            <h3 className='journal-data'>Fecha de tu lectura: {data.date}</h3>
            <p className='journal-text'>Tus pensamientos: {data.text}</p>

            <div className="cards-reading">
              {data.selectedCards.map((card, cardIndex) => (
                <div className="card-reveal" key={cardIndex}>
                  <img className="card-img" src={card.sakuraCard} alt="Sakura Card" />
                  <h3 className="card-name">{card.spanishName}<span> - {card.kanji}</span></h3>
                  <p className="card-meaning">{card.meaning}</p>
                </div>
              ))}
            </div>
            <Button text="Borrar Lectura" onClick={() => handleDeleteEntry(index)} />
          </div>
        ))}
      </div>

      </div>
      <Footer />

    </div>
  );
}
