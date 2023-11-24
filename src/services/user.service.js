import { updateToken } from "../utils";
import { API } from "./service.config";

//? esto es lo que utiliza la pagina a la hora de traerse los datos

//REGISTER
export const registerUser = async (formData) => {
  return API.post("/users/register", formData, {
    // le damos la ruta, el objeto que le enviamos como body y las modificaciones de los headers
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res) // devolvemos la respuesta completa
    .catch((error) => error); // capturamos errores si los hay
};

//CHECK CODE

export const checkCodeConfirmationUser = async (formData) => {
  return API.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

// RESEND CODE

export const resendCodeConfirmationUser = async (formData) => {
  return API.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//AUTOLOGIN

export const autologinUser = async (formData) => {
  return API.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//LOGIN 

export const loginUserService = async (formData) => {
  return API.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//CAMBIO CONTRASEÑA SIN TOKEN

export const forgotPasswordUser = async (formData) => {
  return API.patch("/users/forgotpassword/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//DELETE USER

export const deleteUserService = async () => {
  return API.delete("/users/deleteuser/", { // YO TENIA ESTA RUTA users/deleteuser/
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//CAMBIO CONTRASEÑA CUANDO ESTAS LOGADO
export const changePasswordUserToken = async (formData) => {
  return API.patch("/users/changepassword", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

// UPDATE USER 

export const updateUser = async (formData) => {
  return API.patch("/users/update/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};