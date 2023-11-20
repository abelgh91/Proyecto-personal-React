import { useNavigate } from "react-router-dom"
import "./CardAveById.css"

export const CardAveById = ({src, especie, description, type, likes, visto, gender, age, peligro, parque, CCAA, provincia}) => {
    const navigate = useNavigate();
  return (
    <figure id="figureAveId">
        <img src={src} alt={especie}/>
        <h3>{especie}</h3>
        <p>{description}</p>
        <p>{CCAA}</p>
        <p>{provincia}</p>
        <p>{type}</p>
        <p>{likes}</p>
        <p>{visto}</p>
        <p>{parque}</p>
        <p>{gender}</p>
        <p>{age}</p>
        <p>{peligro}</p>
        <button className="btnReturnAves" onClick={()=> navigate("/aves")}>VOLVER A PARQUES</button>
    </figure>
  )
}
