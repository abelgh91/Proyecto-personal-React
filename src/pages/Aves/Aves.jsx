import { useEffect, useState } from "react";
import { CardAves } from "../../components";
import { getAllAves } from "../../services/aves.service";
import "./Aves.css";


export const Aves = () => {
  //estado para guardar los datos
  const [avesData, setAvesData] = useState([]);

  //useEffect para llamar a la API

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        // Llamar a la función que obtiene datos de MongoDB
        const data = await getAllAves();
        // console.log("soy getAllaves", getAllAves)
        setAvesData(data.data);
        console.log(data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Llamar a la función al montar el componente
  }, []);

  return (
    <div id="container-aves">
      {avesData.map((ave) => (
        <CardAves key={ave._id} especie={ave.especie} id={ave.id} src={ave.image} />
      ))}
    </div>
  );
};
