import {  useState } from "react";
import { getAllAves } from "../../services/aves.service";
import "./CardAves.css";
import { Link } from "react-router-dom";
import { DeleteButton } from "../DeleteButton";


export const CardAves = ({ src, especie, id }) => {
  const path = `/aves/item/${id}`;
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDelete = () => {
    // agregar la lógica para eliminar la imagen
    console.log(`Eliminar imagen con ID ${id}`);
  };

  return (
    <div className="pictures-aves">
    <figure className="figureAves">
      <Link to={path}>
        <img src={src} alt={especie} className="img"/>
      </Link>
      <h3>{especie}</h3>
      <div className="buttons-container">
          <DeleteButton onClick={handleDelete} />
          <button onClick={handleLike} className="like-button">
            Me gusta ({likes})
          </button>
        </div>
    </figure>
    </div>
  );
};
