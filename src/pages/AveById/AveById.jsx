import { useEffect, useState } from "react";
import { CardAveById } from "../../components";
import { getById } from "../../services/aves.service";
import "./AveById.css";
import { useNavigate, useParams } from "react-router-dom";


export const AveById = () => {
  //estado para guardar los datos
  const [aveData, setAveData] = useState(null);

  const { id } = useParams()
  const navigate = useNavigate();
  //useEffect para llamar a la API

  useEffect(() => {
    
    const fetchDataById = async () => {
      try {
        // Llamar a la función que obtiene datos de MongoDB
        const data = await getById(id);
        console.log("get by idddddddddddddddddd", getById)
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
          {Object.keys(aveData).map((key) => (
            <CardAveById
              key={aveData[key]._id}
              src={aveData[key].image}
              especie={aveData[key].especie}
              type={aveData[key].types}
              likes={aveData[key].likes}
              visto={aveData[key].visto}
              gender={aveData[key].gender}
              age={aveData[key].age}
              peligro={aveData[key].peligro}
              parque={aveData[key].parque}
              CCAA={aveData[key].CCAA}
              provincia={aveData[key].provincia}
              
            />
          ))}
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
