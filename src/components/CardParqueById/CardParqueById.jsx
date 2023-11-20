import { useNavigate } from "react-router-dom";
import "./CardParqueById.css";

export const CardParqueById = ({src, name, description, CCAA, provincia, superficie, likes, visitado, aves}) => {
    const navigate = useNavigate();
    return (
    <figure id="figureParqueId">
        <img src={src} alt={name}/>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{CCAA}</p>
        <p>{provincia}</p>
        <p>{superficie}</p>
        <p>{likes}</p>
        <p>{visitado}</p>
        <p>{aves}</p>
        <button className="btnReturnParques" onClick={()=> navigate("/parques")}>VOLVER A PARQUES</button>
    </figure>
  );
};
