import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


export const ProtectedCheckChildren = ({ children }) => {
  const { allUser, user } = useAuth(); //nos traemos el estado del usuario tanto si ha entrado por el register como por el login
  if (allUser?.data?.user?.check == true || user?.check == true) { //si cualquiera de los dos estan en true, entran al dashboard
    return <Navigate to="/dashboard" />;
  }
  if (user == null && allUser?.data?.confirmationCode === "") { //si no hay usuario o esta en el estado inicial por haber recargado la pag de checkCode pues lo llevamos al login
    return <Navigate to="/login" />;
  }
  return children;
};