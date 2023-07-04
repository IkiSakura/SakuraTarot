import React, { useState } from "react";
import CardContainer from "../../components/CardsContainer/CardsContainer";
import Button from "../../components/Button/Button";
import CardBack from "../../components/CardBack/CardBack";
import "./Home.css";
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Header from "../../components/header/Header"
import Footer from "../../components/Footer/Footer"


export default function Home() {

    return (
        <div className="home-container">
            <Header/>
            <h2>
                Seleccione la tarjeta que crea que puede representar su situación actual
            </h2>

            <div className="tarot-container">
                <div className="instructions">
                    <p>
                        Selecciona 3 cartas para leer sobre tu pasado, presente y futuro.
                    </p>
                    <CardBack/>
                </div>

                <div className="cards">
                    <CardContainer /> 
                    <Button/>
                </div>

            </div>
            <img
                        className="sakura-circle"
                        src={CirgleImage}
                        alt="Sakura golden card circle"
                    />
                    <Footer/>
        </div>
    );
}
