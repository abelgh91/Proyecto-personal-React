import { useEffect, useState } from "react";
import { CardAveById } from "../../components";
import { getById } from "../../services/aves.service";
import "./AveById.css";
import { useNavigate, useParams } from "react-router-dom";


export const AveById = () => {
  //estado para guardar los datos
  const [aveData, setAveData] = useState([]);

  const { id } = useParams()
  const navigate = useNavigate();
  //useEffect para llamar a la API

  useEffect(() => {
    
    const fetchDataById = async () => {
      try {
        // Llamar a la función que obtiene datos de MongoDB
        const data = await getById(id);
        setAveData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataById(); // Llamar a la función al montar el componente
  }, [id]);
  

  return (
    <div id="container-ave">
      {Object.keys(aveData).length > 0 ? (
        <>
            <CardAveById
              key={aveData._id}
              src={aveData.image}
              especie={aveData.especie}
              type={aveData.types}
              likes={aveData.likes}
              visto={aveData.visto}
              gender={aveData.gender}
              age={aveData.age}
              peligro={aveData.peligro}
              parque={aveData.parque}
              CCAA={aveData.CCAA}
              provincia={aveData.provincia}
              
            />
          
          <button className="btnReturnAves" onClick={() => navigate("/aves")}>
        VOLVER A GALERIA
      </button>
        </>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};
