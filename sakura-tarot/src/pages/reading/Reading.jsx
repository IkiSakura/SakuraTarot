import Header from "../../components/header/Header"
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer"
import "./Reading.css";
export default function Reading() {

    return (
        <div className="reading-container">
            <Header />
            {fakeData ? (
                <ul className="contianer-list-cards">
                    {fakeData.map((card) => (
                        <li className="list-cards">
                                <div className="front"></div>
                                <div className="back">

                                <img src={card.sakuraCard} alt="img" />
                            </div>
                        </li>
                    ))}
                <img className="middle-circle" src={CirgleImage}
                 alt="Sakura golden card circle"/>
                </ul>
            ) : (
                <p>Cargando Datos...</p>
            )}
            <Footer/>
        </div>

            )

}