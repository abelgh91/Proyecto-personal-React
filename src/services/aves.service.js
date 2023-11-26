import { updateToken } from "../utils";
import { API } from "./service.config";


//DELETE AVES

export const deleteAvesService = async (id) => {
    return API.delete(`/aves/deleteave/${id}`, { 
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

  //UPDATE AVES

  export const updateAves = async (formData) => {
    return API.patch("/aves/update/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };

  //CREAR NUEVA AVE

  export const createAve = async (formData) => {
    return API.post("/aves/crear", formData, {
      // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res) // devolvemos la respuesta completa
      .catch((error) => error); // capturamos errores si los hay
  };

  //GET ALL

  export const getAllAves = async (data) => {
    return API.get("/aves/", data, {
      // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res) // devolvemos la respuesta completa
      .catch((error) => error); // capturamos errores si los hay
  };

  // GET BY ID 

  export const getById = async (id) => {
    const url = `/aves/${ id }`;
    return API.get(`/aves/${ id }`,{
      // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
      headers: { "Content-Type": "text/plain" },
    })
      .then((res) => res) // devolvemos la respuesta completa
      .catch((error) => error); // capturamos errores si los hay
  };

  