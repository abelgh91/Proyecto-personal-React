import "./CheckCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { checkCodeConfirmationUser, resendCodeConfirmationUser } from "../../services/user.service";
import { useAuth } from "../../contexts/authContext";
import { useAutoLogin, useCheckCodeError, useResendCodeError } from "../../hooks";


export const CheckCode = () => {
  const navigate = useNavigate();
  const { allUser, login, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  // EL RES va a ser para el check del code
  const [res, setRes] = useState({});
  // resResend va a ser para gestionar el renvio del codigo de confirmacion
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  // ------> estos dos estados se utilizan para cuando se recarga la pagina por el usuario y se mandan al register porque borra al usuario el delete
  const [okDeleteUser, setOkDeleteUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  // FUNCION QUE GESTIONA LA DATA DEL FORMULARIO

  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user");

    if (userLocal == null) {
      // entramos por el register
        const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode), //CONVERTIMOS A NUMERO EL CODIGO
        email: allUser?.data?.user.email, //allUser porque viene del register
      };
      setSend(true);
      setRes(await checkCodeConfirmationUser(custFormData));
      setSend(false);
    } else {
      // entramos por el login
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
        confirmationCode: parseInt(formData.confirmationCode),
      };
      setSend(true);
      setRes(await checkCodeConfirmationUser(customFormData));
      setSend(false);
    }
  };

  const handleReSend = async () => { // esta funcion esta adherida al boton de resend code
    const userLocal = localStorage.getItem("user");
    if (userLocal != null) {
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
      };

      setSend(true);
      setResResend(await resendCodeConfirmationUser(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        email: allUser?.data?.user?.email,
      };

      setSend(true);
      setResResend(await resendCodeConfirmationUser(customFormData));
      setSend(false);
    }
  }; 

  // USE EFFECT QUE NOS SIRVE PARA CUANDO CAMBIA RES, LANZAR EL COMPROBADOR DE ERRORES
  useEffect(() => {
    console.log("😭", res);
      useCheckCodeError(
      res,
      setRes,
      setOkCheck,
      login,
    );
  }, [res]);

  useEffect(() => {
    console.log("😃", resResend);
    useResendCodeError(
      resResend,
      setResResend,
      setUserNotFound)
  }, [resResend]);

  // PONEMOS LOS CONDICIONALES QUE EVALUAN SI ESTAN A TRUE LOS ESTADOS DE NAVEGACION (deleUser, okCheck)

  if (okCheck) {
    /// hacemos autologin para cuando viene del register
    // cuando viene del login lo gestionamos en el usecheckCodeError ---> modificamos el localstorage y el user del contexto
    if (!localStorage.getItem("user")) { // si no existe el local storage quiere decir que viene del allUser (register)
      useAutoLogin(allUser, login); //le hacemos autologin
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  if (okDeleteUser) {
    // si mete mal el codigo lo mandamos al register
    return <Navigate to="/register"/>;
  }

  if(userNotFound) {
    //ha recargado la pag y se resetea el alluser, por tanto no tengo email para poder verificarlo y lo mando al login
    return <Navigate to="/login"/>
  }
  
  return (
    <>
      <div className="form-wrap">
        <h1>Verify your code 👌</h1>
        <p>Write the code sent to your email</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Registration code
            </label>
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Verify Code
            </button>
          </div>
          <div className="btn_container">
            <button
              id="btnResend"
              className="btn"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => handleReSend()}
            >
              Resend Code
            </button>
          </div>

          <p className="bottom-text">
            <small>
              If the code is not correct ❌, your user will be deleted from the
              database and you will need to register again.{" "}
            </small>
          </p>
        </form>
      </div>
    </>
  );
};