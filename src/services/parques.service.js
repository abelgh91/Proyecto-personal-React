import { updateToken } from "../utils";
import { API } from "./service.config";


//DELETE PARQUE

export const deleteParqueService = async () => {
    return API.delete("/parques/deleteparque/", { 
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

  //UPDATE PARQUE

  export const updateParques = async (formData) => {
    return API.patch("/parques/update/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

  //CREAR NUEVO PARQUE 

  export const createParque = async (formData) => {
    return API.post("/parques/crear", formData, {
      // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res) // devolvemos la respuesta completa
      .catch((error) => error); // capturamos errores si los hay
  };

  //GET ALL

  export const getAllParques = async (data) => {
    return API.get("/parques/", data, {
      // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res) // devolvemos la respuesta completa
      .catch((error) => error); // capturamos errores si los hay
  };

// GET BY ID 

export const getById = async (id) => {
    return API.get(`/parques/${ id }`, {
      // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res) // devolvemos la respuesta completa
      .catch((error) => error); // capturamos errores si los hay
  };
