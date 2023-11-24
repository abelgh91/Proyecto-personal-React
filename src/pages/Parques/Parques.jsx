import { useEffect, useState } from "react";
import "./Parques.css";
import { CardParques } from "../../components";
import { getAllParques } from "../../services/parques.service";


export const Parques = () => {
  const [parquesData, setParquesData] = useState([]);

  useEffect(() => {
    const fetchDataParques = async () => {
      try {
        const dataParque = await getAllParques()
        setParquesData(dataParque.data);
      } catch (error) {
        console.error("Error fetching dataParque:", error);
      }
    };
    fetchDataParques()
  }, []);

  return (
    <div id="container-parques">
      {parquesData.map((parque) => (
        <CardParques key={parque._id} name={parque.name} id={parque.id} src={parque.image} />
      ))}
    </div>
  );

};
