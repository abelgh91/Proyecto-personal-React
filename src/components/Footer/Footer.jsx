import { Link } from "react-router-dom";
import "./Footer.css";


export const Footer = () => {
    return (
        <>
        <footer>
            <Link to="/about"><h4 className="linkAbout">Ay Gorrión! 🐦</h4></Link>
        </footer>
        </>
    );
};