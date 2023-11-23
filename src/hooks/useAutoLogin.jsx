import { Navigate } from "react-router-dom";
import { autologinUser } from "../services/user.service";

export const useAutoLogin = async (allUser, userLogin) => {
  console.log("entroooooooooooo")
    try {
      const { password, email } = allUser?.data?.user; //esto solo se utiliza por el register
      const customFormData = {
        email,
        password,
      };
  
      const sendData = await autologinUser(customFormData);
      console.log("entro a send data", sendData)
  
      if (sendData?.status == 200) {  //le metemos lo mismo y lo convertimos a string. Lo loguea la funcion de login
        const { name, email, image, check } = sendData?.data?.user;
        const userCustom = {
          token: sendData.data.token,
          user: name,
          email,
          image,
          check,
          _id: sendData.data.user._id,
        };
  
        const stringUser = JSON.stringify(userCustom);
        userLogin(stringUser); //userLogin es lo mismo que login pero aqui lo hemos llamado userLogin
        return <Navigate to="/dashboard" />;
      } else {
        return <Navigate to="/login" />; //llevaremos al login siempre que el check sea false
      }
    } catch (error) {
      console.log(error);
    }
  };