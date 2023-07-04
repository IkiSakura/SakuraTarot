import "./Principal.css";
import Header from "../../components/header/Header"
import Footer from "../../components/Footer/Footer"
import Portada from "../../assets/img/Portada.svg"
import Kinomoto from "../../assets/img/sakura-kinomoto.png"
import Button from "../../components/Button/Button";

export default function Principal() {
   
    return (
        <div className="home-container">
         <Header/>
         <div className="container-portada">
            <img src={Portada} className="portada-img" alt="Portada Ikisaura Image" /> 
         </div>
         <div className="container-btn-img">
            <Button/>
            <img src={Kinomoto} className="kinomoto" alt="Portada Ikisaura Image" /> 
         </div>
         
        <Footer/>
        </div>
    );
}