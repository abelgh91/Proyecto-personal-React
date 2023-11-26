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
              key={aveData.data._id}
              src={aveData.data.image}
              especie={aveData.data.especie}
              type={aveData.data.types}
              likes={aveData.data.likes}
              visto={aveData.data.visto}
              gender={aveData.data.gender}
              age={aveData.data.age}
              peligro={aveData.data.peligro}
              parque={aveData.data.parque}
              CCAA={aveData.data.CCAA}
              provincia={aveData.data.provincia}
              
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
