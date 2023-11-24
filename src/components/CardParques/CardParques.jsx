import { useState } from "react";
import "./CardParques.css";
import { Link } from "react-router-dom";
import { DeleteButton } from "../DeleteButton";


export const CardParques = ({ src, name, id }) => {
  const path = `/parques/item/${id}`;
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDelete = () => {
    // agregar la lógica para eliminar la imagen
    console.log(`Eliminar imagen con ID ${id}`);
  };

  return (
    <div className="pictures-parques">
    <figure className="figureParques">
      <Link to={path}>
        <img src={src} alt={name} className="img" />
      </Link>
      <h3>{name}</h3>
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
