import {  useState } from "react";
import { deleteAvesService } from "../../services/aves.service";
import "./CardAves.css";
import { Link } from "react-router-dom";
import { DeleteButton } from "../DeleteButton";
import { addFavAve } from "../../services/user.service";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";


export const CardAves = ({ src, especie, id, likes, setDeleteAve }) => {
  const path = `/aves/item/${id}`;
  const [isAveLiked, setIsAveLiked] = useState();
  const {user} = useAuth();

useEffect(() => {
  if(likes.includes(user._id)) {
    setIsAveLiked(true)
  } else {
    setIsAveLiked(false)
  }
}, [])

  const handleLike = () => {
    addFavAve(id);
    setIsAveLiked(true);
  };

  const handleDelete = async() => {
    await deleteAvesService(id)
    setDeleteAve(id)
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
          <button onClick={handleLike} className="like-button" disabled={isAveLiked} >
            {isAveLiked ? "+1" : "me gusta"}
          </button>
        </div>
    </figure>
    </div>
  );
};
