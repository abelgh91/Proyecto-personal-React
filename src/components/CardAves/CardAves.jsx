import "./CardAves.css"
import { Link } from "react-router-dom";

export const CardAves = ({src, name, id}) => {
    const path = `/aves/item/${id}`;
  return (
    <figure>
      <Link to={path}>
        <img src={src} alt={name} />
      </Link>
    </figure>
  )
}