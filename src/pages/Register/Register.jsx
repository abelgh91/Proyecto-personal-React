import { useEffect, useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/user.service";
import { useErrorRegister } from "../../hooks/useErrorRegister";
import { Uploadfile } from "../../components";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";



export const Register = () => {
  /*
    1) Estados: 
        1- Estado donde se setea la respuesta
        2- Estado que gestionamos cuando los botones se deshabilitan (la respuesta esta cargando)
        3- Estado que comprueba el ok o no ok de la funcionalidad de la pagina (estado de navegacion)
    */
  const { allUser, setAllUser, bridgeData, setDeleteUser } = useAuth();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false); //cuando yo envio la peticion pero aun no la he recibido (send a true y se deshabilita el boton)
  const [ok, setOk] = useState(false); // res 200 el ok a true

  // 2) Llamamos a los hooks

  const { handleSubmit, register } = useForm();

  // ese register es una funcion que nos sirve para registrar el valor que tenemos en el input
  // el handle submit sirve para decir que funcion va a gestionar los datos del formulario
  // los datos que recibimos son registrados en un objeto gracias al register. Este objeto lo recibe la funcion que el handleSubmit haya decidido

  // 3) Funcion que gestiona los datos del formulario (la que decide el handle)

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files; //apuntamos al file para ver si tenemos img

    if (inputFile.length != 0) {
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        ...formData,
      };
      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };

  // 4) useEffect que gestiona las respuesta y llaman al customhook que gestiona los errores

  useEffect(() => {
    console.log(res);
    // llamamos a un customHook para gestionar posibles errores de la respuesta
    useErrorRegister(res, setOk, setRes);
    if(res?.status === 200) bridgeData("ALLUSER") // si todo es ok llamamos a la funcion puente
  }, [res]);

  useEffect(() => {
    console.log("entro al allUser", allUser)
  }, [allUser]);

  useEffect(() => {
    setDeleteUser(() => false);
  }, [])
  
  // 5) Gestion de los estados de navegacion (ok o no ok)

  if (ok) {
    return <Navigate to="/checkcode"/>
    // lo llevamos al checkCode confirmation
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}> 
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>

          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>

            <div className="sexo">
              <input
                type="radio"
                name="sexo"
                id="hombre"
                value="hombre"
                {...register("gender")}
              />
              <label htmlFor="hombre" className="label-radio hombre">
                Hombre
              </label>
              <input
                type="radio"
                name="sexo"
                id="mujer"
                value="mujer"
                {...register("gender")}
              />
              <label htmlFor="mujer" className="label-radio mujer">
                Mujer
              </label>
            </div>
            <Uploadfile />
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#77b430" : "#456d17" }}
            >
              Register
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <Link className="anchorCustom">Terms & Conditions</Link> and{" "}
              <Link className="anchorCustom">Privacy Policy</Link>.
            </small>
          </p>
        </form>
      </div>
    </>
  );
  };
