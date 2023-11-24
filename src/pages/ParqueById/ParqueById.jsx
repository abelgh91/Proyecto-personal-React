import { useNavigate } from "react-router-dom";
import "./ParqueById.css";

export const ParqueById = () => {
  const navigate = useNavigate();
  return <div>
    <button className="btnReturnParques" onClick={() => navigate("/parques")}>
        VOLVER A GALERIA
      </button>
  </div>;
};
