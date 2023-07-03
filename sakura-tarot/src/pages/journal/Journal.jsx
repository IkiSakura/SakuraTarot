import Header from "../../components/header/Header"
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import "./Journal.css";



export default function Journal() {

    return (
        <div className="journal-container">
            <Header />
            <h3>30 de Junio 2023</h3>
            
            <img
                        className="journal-circle"
                        src={CirgleImage}
                        alt="Sakura golden card circle"
                    />
        </div>

            )

}