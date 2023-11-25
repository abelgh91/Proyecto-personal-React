import { useEffect, useState } from "react";
import { CardAves } from "../../components";
import { getAllAves } from "../../services/aves.service";
import "./Aves.css";
import { Link } from "react-router-dom";
import { CreateNewAve } from "../../components/CreateNewAve/CreateNewAve";


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

  const handleAveSubmit = async (aveData) => {
    try {
      // Llama a la función que crea un nuevo ave en la base de datos
      await createAve(aveData);

      // Vuelve a cargar la lista de aves después de agregar una nueva
      const newData = await getAllAves();
      setAvesData(newData.data);
    } catch (error) {
      console.error("Error creating ave:", error);
    }
  };

  return (
    <div id="container-aves">
      <Link to="/aves/crear">
        <button>Nueva Ave</button>
      </Link>
      <CreateNewAve onAveSubmit={handleAveSubmit} />

      {avesData.map((ave) => (
        <CardAves key={ave._id} especie={ave.especie} id={ave.id} src={ave.image} />
      ))}
    </div>
  );
};
