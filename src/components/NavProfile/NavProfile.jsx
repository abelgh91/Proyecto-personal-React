import { Link } from "react-router-dom"
import "./NavProfile.css";
import { useAuth } from "../../contexts/authContext";
import { useDeleteUser } from "../../hooks";

export const NavProfile = () => {
    const {setUser, setDeleteUser} = useAuth();
  return (
    <div className="containerNavProfile">
      <Link to="/profile/likes">
        <img
          src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074902/ahorrar_tctk8v.png"
          alt="go to Likes"
          className="iconNav iconLikes"
        />
      </Link>
      <Link to="/profile/changepassword">
        <img
          src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074658/restablecer-la-contrasena_hielu9.png"
          alt="go to ChangePassword"
          className="iconNav"
        />
      </Link>

      <Link to="/profile/">
        <img
          src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074767/actualizar_1_qlf5sv.png"
          alt="go to change data profile"
          className="iconNav iconChangeProfile"
        />
      </Link>

      <img
        src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701074177/borrar_pxsixt.png"
        alt="user delete button"
        className="iconNav iconDeleteUser"
        onClick={() => useDeleteUser(setUser, setDeleteUser)}
        // customhook que hace la peticion al servicio de delete User y setea el usuario a null en el contexto
      />
    </div>
  )
}
