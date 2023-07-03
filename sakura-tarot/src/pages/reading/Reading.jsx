import Header from "../../components/header/Header"
import CirgleImage from "../../assets/img/sakura-circulo.svg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer"
import "./Reading.css";

export default function Reading() {

    return (
        <div className="reading-container">
            <Header />
         
         <div className="cards-reading">
         <div className="cards-open">
            
         </div>
         
         <Button text="Guardar mi lectura" route="/Journal" />
         </div>


            <img className="middle-circle" src={CirgleImage}
             alt="Sakura golden card circle"/>

            <Footer/>
        </div>

            )

}