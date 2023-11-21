import "./CardParque.css";
import { Link } from "react-router-dom";

export const CardParques = ({ src, name, id }) => {
  const path = `/parques/item/${id}`;
  return (
    <figure>
      <Link to={path}>
        <img src={src} alt={name} />
      </Link>
    </figure>
  );
};
