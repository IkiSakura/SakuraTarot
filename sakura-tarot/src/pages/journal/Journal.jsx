import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import CirgleImage from '../../assets/img/sakura-circulo.svg';
import './Journal.css';

export default function Journal() {
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('journalData');
    if (storedData) {
      setJournalData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="journal-container">
      <Header />
      {journalData.map((data, index) => (
        <div key={index}>
          <h3>{data.date}</h3>
          <p>{data.text}</p>

          <div className="cards-reading">
            {data.selectedCards.map((card, cardIndex) => (
              <div className="card-reveal" key={cardIndex}>
                <img className="card-img" src={card.sakuraCard} alt="Sakura Card" />
                <h3 className="card-name">{card.spanishName}</h3>
                <p className="card-meaning">{card.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <img
        className="journal-circle"
        src={CirgleImage}
        alt="Sakura golden card circle"
      />
    </div>
  );
}
