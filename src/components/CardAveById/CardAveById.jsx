import { useNavigate } from "react-router-dom";
import "./CardAveById.css";

export const CardAveById = ({
  src,
  especie,
  type,
  likes,
  visto,
  gender,
  age,
  peligro,
  parque,
  CCAA,
  provincia,
}) => {
 
  return (
    <>
    <figure id="figureAveId">
      <img src={src} alt={especie} />
      <h3>{especie}</h3>
      <p>{CCAA}</p>
      <p>{provincia}</p>
      <p>{type}</p>
      <p>{likes}</p>
      <p>{visto}</p>
      <p>{parque}</p>
      <p>{gender}</p>
      <p>{age}</p>
      <p>{peligro}</p>
    </figure>
    </>
  );
};

