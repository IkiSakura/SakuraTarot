import "./Header.css";
import Logo from "../../assets/img/logo-ikisakura.svg"
import {Link} from "react-router-dom"


export default function Header() {

    return (
        <div className="header">
            <Link to="/" className="link-ikisakura">Ikisakura</Link>

            <div className="logo-container">
                <Link to="/"><img  className="img-logo" src={Logo} alt="Logo Ikisakura"/></Link>
            </div>

            <div className="nav-container">
                <Link to="/Reading" className="link-lecturas">Mis Lecturas</Link>  
            </div>
        </div>
    )
}