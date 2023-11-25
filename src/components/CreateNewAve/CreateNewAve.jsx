import { useState } from "react";
import "./CreateNewAve.css";

import React from 'react'

export const CreateNewAve = ({ onAveSubmit }) => {
    const [especie, setEspecie] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza cualquier validación adicional aquí

    // Llama a la función onAveSubmit con los datos del nuevo ave
    onAveSubmit({ especie, imagen });

    // Limpiar los campos después de enviar el formulario
    setEspecie("");
    setImagen("");
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Especie:
        <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)} />
      </label>
      <label>
        Imagen URL:
        <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
      </label>
      <button type="submit">Agregar Ave</button>
    </form>
  )
}};
